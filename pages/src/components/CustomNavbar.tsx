import {
  Avatar,
  Button,
  Container,
  Grid,
  Navbar,
  Popover,
  Spacer,
  Text,
  Textarea,
} from "@nextui-org/react";
import { text } from "stream/consumers";
import { User } from "../../../controller/models/user";

const vSpace = 1.5;

// should be enum for text
const Texts = {
  PROFILE_INFO: "Profile Information",
};

const CustomTextarea = (field: string, changeFunc: (value: string) => void, currentText?: string, rows?: number) => (
  <Textarea
    animated={false}
    value={currentText ? currentText : ''}
    fullWidth
    minRows={rows ? rows : 1}
    bordered
    color="primary"
    label={field}
    onChange={(e) => changeFunc(e.target.value)}
  />
);

const saveChanges = (userProfile: User) => {
  console.log(userProfile)
  return fetch("/api/user", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userProfile)
  }).then((res) => {
    return res.json().then((data) => {
      console.log(data)
    });
  })
};

interface Props {
  userProfile: User,
}

const CustomPopover = (props: Props) => {
  return (
    <Container justify="center" direction="column" alignItems="stretch">
      <Spacer y={vSpace / 2} />
      <Text size={23} b>
        Profile Information
      </Text>
      <Spacer y={0.5} />
      {CustomTextarea("Name", (text) => props.userProfile.name = text, props.userProfile.name)}
      <Spacer y={0.5} />
      {CustomTextarea("Pronoun", (text) => props.userProfile.pronouns = text, props.userProfile.pronouns)}
      <Spacer y={0.5} />
      {CustomTextarea("Location", (text) => props.userProfile.location = text, props.userProfile.location)}
      <Spacer y={0.5} />
      {CustomTextarea("Team", (text) => props.userProfile.team = text, props.userProfile.team)}
      <Spacer y={0.5} />
      {CustomTextarea("Biography", (text) => props.userProfile.bio = text, props.userProfile.bio, 3)}
      <Spacer y={0.5} />
      {CustomTextarea("Social Medias", (text) => props.userProfile.socialMedia = text, props.userProfile.socialMedia)}
      <Spacer y={1} />
      <Button onClick={() => saveChanges(props.userProfile)}>
        <b>Save</b>
      </Button>
      <Spacer y={0.5} />
      <Button onClick={() => saveChanges(props.userProfile)}>
        <b>Log Out</b>
      </Button>
      <Spacer y={1} />
    </Container>
  );
};

const CustomNavbar = (props: Props) => {
  return (
    <Navbar isBordered variant={"static"}>
      <Navbar.Brand>
        <Container css={{ display: "flex", flexDirection: "row" }}>
          <Text h1 color="$sapBlue" css={{ marginBottom: -5, marginLeft: -25 }}>
            Lets
          </Text>
          <Text h1 color="$darkNavy" css={{ marginBottom: -5 }}>
            Play
          </Text>
        </Container>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs"></Navbar.Content>
      <Navbar.Content hideIn="xs">
        <Navbar.Item>
          <Popover isBordered disableShadow>
            <Popover.Trigger>
              <Button bordered color="primary">
                <Avatar
                  css={{ margin: 5 }}
                  size={"sm"}
                  src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"
                />
                <Text>{props.userProfile.name}</Text>
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <CustomPopover {...props}></CustomPopover>
            </Popover.Content>
          </Popover>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default CustomNavbar;
