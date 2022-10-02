/* eslint-disable react/jsx-key */
import { Combobox } from "@headlessui/react";
import {
  Badge,
  Button,
  Container,
  Input,
  Modal,
  Text,
} from "@nextui-org/react";
import { useState } from "react";

interface InterestCarousel {
  tags: string[];
  alltags: string[];
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 15,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const InterestCarousel = ({ tags, alltags }: InterestCarousel) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [query, setQuery] = useState("");
  const [userTags, setUserTags] = useState<string[]>(tags);
  const [allTags, setAllTags] = useState<string[]>(alltags);
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    setQuery("");
  };

  const noTags = allTags.filter((tag) => !userTags.includes(tag));
  const noTagsAndQuery = allTags.filter(
    (tag) =>
      tag.toLowerCase().includes(query.toLowerCase()) && !userTags.includes(tag)
  );

  const filteredTags =
    query === ""
      ? noTags.slice(1, Math.min(noTags.length, 6))
      : noTagsAndQuery.slice(1, Math.min(noTagsAndQuery.length, 6));

  const killBadge = (tag: string) => {
    setUserTags(userTags.filter((e) => e !== tag));
    console.log(allTags);
    // need logic to delete from allTags if no one is subscribed to it
  };

  return (
    <Container>
      <Container
        css={{ margin: 0, padding: 0, display: "flex", flexDirection: "row" }}
      >
        <Text
          h1
          size={34}
          color="$sapDarkBlue"
          css={{ marginBottom: -2, paddingLeft: 5 }}
        >
          INTERESTS
        </Text>
        <Button
          size="sm"
          css={{
            marginLeft: 15,
            paddingBottom: 0,
            marginBottom: -5,
            alignSelf: "center",
            minWidth: 0,
            minHeight: 0,
            background: "$sapDarkBlue",
          }}
          onClick={handler}
        >
          <b>ADD A INTEREST</b>
        </Button>
      </Container>

      <Container
        css={{
          border: 4,
          background: "rgba(245,245,245,0.9)",
          borderColor: "$sapDarkBlue",
          borderStyle: "solid",
          borderRadius: 15,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        {userTags.map((e) => (
          <Badge
            css={{ background: "$sapDarkBlue", cursor: "pointer" }}
            key={e}
            onClick={() => {
              killBadge(e);
            }}
          >
            {e}
          </Badge>
        ))}
      </Container>

      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text size={18} h1>
            Add A Interest!
          </Text>
        </Modal.Header>
        <Modal.Body css={{ minHeight: 225 }}>
          <Combobox
            value={selectedValue}
            onChange={(tag) => {
              if (!userTags.includes(tag)) setUserTags([...userTags, tag]);
              if (!allTags.includes(tag)) setAllTags([...allTags, tag]);
              setSelectedValue("");
            }}
          >
            <Combobox.Input
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              style={{ marginBottom: -13, borderRadius: 4 }}
            />
            <Combobox.Options style={{ width: "100%", marginLeft: 0 }}>
              {query.length > 0 && (
                <Combobox.Option
                  key={query}
                  value={query}
                  style={{
                    background: "rgba(122,122,122,0.9)",
                    color: "white",
                    border: -1,
                    borderLeft: 4,
                    borderRight: 4,
                    borderStyle: "solid",
                    width: "100%",
                    marginBottom: 0,
                  }}
                >
                  <Text b css={{ padding: 8, color: "white" }}>
                    {query}
                  </Text>
                </Combobox.Option>
              )}
              {filteredTags.map((e) => (
                <Combobox.Option
                  key={e}
                  value={e}
                  style={{
                    background: "rgba(122,122,122,0.9)",
                    color: "white",
                    border: -1,
                    borderLeft: 4,
                    borderRight: 4,
                    borderStyle: "solid",
                    width: "100%",
                    marginBottom: 0,
                  }}
                >
                  <Text b css={{ padding: 8, color: "white" }}>
                    {e}
                  </Text>
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default InterestCarousel;
