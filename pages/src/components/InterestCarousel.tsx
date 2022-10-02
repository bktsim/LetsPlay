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
import { useEffect, useState } from "react";

interface InterestCarousel {
  tags: string[];
  alltags: string[];
}

const InterestCarousel = ({ tags, alltags }: InterestCarousel) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [query, setQuery] = useState("");
  const [userTags, setUserTags] = useState<string[]>(tags);
  const [allTags, setAllTags] = useState<string[]>(alltags);
  const [visible, setVisible] = useState(false);
  const [alert, setAlert] = useState<string>("");
  const [alertTimeout, setAlertTimeout] = useState<any>();

  useEffect(() => {
    setUserTags(tags);
  }, [tags]);

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    setQuery("");
  };

  const noTags = allTags.filter((tag) => !userTags.includes(tag)).sort();
  const noTagsAndQuery = allTags
    .filter(
      (tag) =>
        tag.toLowerCase().includes(query.toLowerCase()) &&
        !userTags.includes(tag)
    )
    .sort();

  const filteredTags =
    query === ""
      ? noTags.slice(1, Math.min(noTags.length, 6))
      : noTagsAndQuery.slice(1, Math.min(noTagsAndQuery.length, 6));

  const killBadge = (tag: string) => {
    setUserTags(userTags.filter((e) => e !== tag));
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
        <Modal.Header css={{ display: "flex", flexDirection: "column" }}>
          <Text size={33} h1>
            Add A Interest
          </Text>
        </Modal.Header>
        <hr />
        <Modal.Body css={{ minHeight: 260 }}>
          <Container
            css={{
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text h5 size={14}>
              Get started by typing your interest!
            </Text>
            <Text small css={{ marginTop: -10, marginBottom: 5 }}>
              You can remove your interests by clicking on them in the main
              page.
            </Text>
            {alert !== "" && (
              <Text
                small
                css={{
                  color: "green",
                  marginTop: 5,
                  marginBottom: 2,
                  fontWeight: "bold",
                }}
              >{`Successfully added ${alert}!`}</Text>
            )}
          </Container>
          <Combobox
            value={selectedValue}
            onChange={(tag) => {
              if (!userTags.includes(tag)) setUserTags([...userTags, tag]);
              if (!allTags.includes(tag)) setAllTags([...allTags, tag]);
              setAlert(tag);
              clearTimeout(alertTimeout);
              setAlertTimeout(
                setTimeout(() => {
                  setAlert("");
                }, 2000)
              );
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
              {query.length > 0 && filteredTags.length === 0 && (
                <Combobox.Option
                  key={query}
                  value={query}
                  style={{
                    background: "rgba(140,140,140,1)",
                    color: "white",
                    border: -1,
                    width: "100%",
                    marginBottom: 0,
                  }}
                >
                  {({ active }) => (
                    <Text
                      b
                      css={{
                        display: "flex",
                        paddingLeft: 8,
                        paddingRight: 8,
                        border: active
                          ? "2px #00b9f2"
                          : "2px rgba(0,185,242,0.3)",
                        color: "white",
                        width: "100%",
                        borderStyle: "solid",
                      }}
                    >
                      {query}
                    </Text>
                  )}
                </Combobox.Option>
              )}
              {filteredTags.map((e) => (
                <Combobox.Option
                  key={e}
                  value={e}
                  style={{
                    background: "rgba(140,140,140,1)",
                    color: "white",
                    border: -1,
                    width: "100%",
                    marginBottom: 0,
                  }}
                >
                  {({ active }) => (
                    <Text
                      b
                      css={{
                        display: "flex",
                        paddingLeft: 8,
                        paddingRight: 8,
                        border: active
                          ? "2px #00b9f2"
                          : "2px rgba(0,185,242,0.3)",
                        color: "white",
                        width: "100%",
                        borderStyle: "solid",
                      }}
                    >
                      {e}
                    </Text>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox>
        </Modal.Body>
      </Modal>
      <Text h5 css={{ paddingLeft: 7, justifyContent: "center" }}>
        Click on a interest to remove it from the list!
      </Text>
    </Container>
  );
};

export default InterestCarousel;
