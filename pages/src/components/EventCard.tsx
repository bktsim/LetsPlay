/* eslint-disable react/jsx-key */
import {
  Image,
  Card,
  Container,
  Modal,
  Text,
  Avatar,
  Badge,
  Button,
  Link,
} from "@nextui-org/react";
import { useState } from "react";

interface EventCardInfo {
  name: string;
  location: string; // one-of: hyperlink (Microsoft Teams) or address (string)
  type: string; // one-of: In-Person, Remote, Hybrid
  date: Date;
  organizer: string;
  description: string;
  tags: string[];
}

interface EventCardProps {
  info: EventCardInfo;
}

const EventCard = ({ info }: EventCardProps) => {
  const { name, location, type, date, organizer, description, tags } = info;
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <Container
      css={{
        width: 395,
        height: 200,
      }}
    >
      <Card isPressable isHoverable onPress={handler}>
        <Card.Body css={{ flexDirection: "row" }}>
          <Container
            css={{
              padding: 0,
              margin: 0,
              wordBreak: "break-word",
              alignSelf: "center",
              display: "flex",
            }}
          >
            <Text b h5 css={{ marginBottom: 3 }}>
              {`${name}`}
            </Text>
            <Text small css={{ marginBottom: 15 }}>
              <b>Location: </b>
              {type === "In-Person" || type === "Hybrid"
                ? `${type} @ ${location}`
                : `${type}`}
            </Text>
            <Container
              css={{
                display: "flex",
                justifyContent: "left",
                padding: 0,
                marginTop: -5,
              }}
            >
              {tags.map((e) => (
                <Badge color="primary">{e}</Badge>
              ))}
            </Container>
          </Container>
        </Card.Body>
      </Card>
      <Modal closeButton open={visible} width={"600"} onClose={closeHandler}>
        <Modal.Header>
          <Container
            css={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <Text h2>{name}</Text>
            <Card
              css={{
                justifyContent: "left",
                margin: 0,
                background: "transparent",
              }}
            >
              <Card.Body
                css={{
                  flexDirection: "row",
                  paddingTop: 0,
                  paddingLeft: 0,
                  paddingBottom: 15,
                  background: "transparent",
                }}
              >
                {tags.map((e) => (
                  <Badge color="primary">{e}</Badge>
                ))}
              </Card.Body>
            </Card>
            <hr></hr>

            <Text css={{ marginTop: 10 }}>
              <b>Type: </b>
              {type}
            </Text>
            <Text css={{ display: "flex" }}>
              <b style={{ marginRight: 5 }}>Location: </b>
              {type === "In-Person" || type === "Hybrid" ? (
                location
              ) : (
                <Link href={location}>Join Meeting</Link>
              )}
            </Text>
            <Text>
              <b>Time: </b>
              {date.toString()}
            </Text>
            <Text css={{ marginBottom: 10 }}>
              <b>Organizer: </b>
              {organizer}
            </Text>
            <hr></hr>
          </Container>
        </Modal.Header>
        <Modal.Body css={{ display: "flex", wordWrap: "break-word" }}>
          <Text size={16} css={{ marginLeft: 25 }}>
            {description}
          </Text>
        </Modal.Body>
        <Modal.Footer css={{ display: "flex", justifyContent: "center" }}>
          <Button>
            <b>RSVP</b>
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default EventCard;
