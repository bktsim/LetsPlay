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
  Spacer,
} from "@nextui-org/react";
import { useState } from "react";

interface ProfileCard {
  name: string;
  pronouns: string;
  team: string;
  icon: string;
  location: string;
  bio: string;
  tags: string[];
}

interface ProfileCardInfo {
  info: ProfileCard;
}

const ProfileCard = ({ info }: ProfileCardInfo) => {
  const { name, team, pronouns, icon, location, bio, tags } = info;
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <Container>
      <Card
        isPressable
        isHoverable
        onPress={handler}
        variant="bordered"
        css={{
          marginTop: 10,
          display: "flex",
          borderColor: "$sapDarkBlue",
        }}
      >
        <Card.Body css={{ flexDirection: "row" }}>
          <Avatar
            bordered
            src={icon}
            size={"xl"}
            css={{
              aspectRatio: "1 / 1",
              marginRight: 15,
              alignSelf: "center",
            }}
          />
          <Container
            css={{
              padding: 0,
              margin: 0,
              wordBreak: "break-word",
              alignSelf: "center",
              flexDirection: "column",
            }}
          >
            <Container
              css={{
                flexDirection: "column",
                display: "flex",
                padding: 0,
              }}
            >
              <Text b h5>
                {name}
              </Text>
              <Text
                size={14}
                css={{ marginBottom: -10, marginTop: -11, paddingLeft: 5 }}
              >
                <b>Pronouns: </b>
                {pronouns}
              </Text>
              <Spacer y={0.25} />
              <Text size={14} css={{ paddingLeft: 5, marginBottom: -10 }}>
                <b>Team: </b>
                {team}
              </Text>
              <Spacer y={0.25} />
              <Text size={14} css={{ paddingLeft: 5, marginBottom: 15 }}>
                <b>Location: </b>
                {location}
              </Text>
            </Container>
            <Container
              css={{
                display: "flex",
                justifyContent: "left",
                padding: 0,
                marginTop: -5,
              }}
            >
              {tags.map((e) => (
                <Badge color="secondary">{e}</Badge>
              ))}
            </Container>
          </Container>
        </Card.Body>
      </Card>
      <Modal closeButton open={visible} onClose={closeHandler}>
        <Modal.Header>
          <Container
            css={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Avatar
              bordered
              src={icon}
              size={"xl"}
              css={{
                minWidth: 100,
                minHeight: 100,
                marginBottom: 5,
                alignSelf: "center",
              }}
            />
            <Text h3>{name}</Text>
            <Text css={{ marginTop: -16, marginBottom: 10 }}>
              <b>Pronouns: </b>
              {pronouns}
            </Text>
            <Card
              css={{
                justifyContent: "center",
                margin: 0,
                background: "transparent",
              }}
            >
              <Card.Body
                css={{
                  flexDirection: "row",
                  paddingTop: 0,
                  paddingBottom: 15,
                  background: "transparent",
                }}
              >
                {tags.map((e) => (
                  <Badge color="secondary">{e}</Badge>
                ))}
              </Card.Body>
            </Card>
            <hr></hr>

            <Text css={{ marginTop: 10 }}>
              <b>Team: </b>
              {team}
            </Text>
            <Text css={{ marginBottom: 10 }}>
              <b>Location: </b>
              {location}
            </Text>
            <hr></hr>
          </Container>
        </Modal.Header>
        <Modal.Body css={{ display: "flex", wordWrap: "break-word" }}>
          <Text size={14}>{bio}</Text>
        </Modal.Body>
        <Modal.Footer
          css={{ display: "flex", justifyContent: "center", marginTop: -10 }}
        >
          <Button color="secondary">
            <b>Follow</b>
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProfileCard;
