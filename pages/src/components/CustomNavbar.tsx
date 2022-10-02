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
import { User } from "../../../controller/models/user";

const vSpace = 1.5;

// should be enum for text
const Texts = {
  PROFILE_INFO: "Profile Information",
};

const CustomTextarea = (field: string, currentText?: string, rows?: number) => (
  <Textarea
    animated={false}
    value={currentText ? currentText : ""}
    fullWidth
    minRows={rows ? rows : 1}
    bordered
    color="primary"
    label={field}
  />
);

const saveChanges = () => {};

interface CustomProps {
  userProfile: User;
}

const CustomPopover = ({ userProfile }: CustomProps) => {
  return (
    <Container justify="center" direction="column" alignItems="stretch">
      <Spacer y={vSpace / 2} />
      <Text size={23} b>
        Profile Information
      </Text>
      <Spacer y={0.5} />
      {CustomTextarea("Name", userProfile ? userProfile.name : "")}
      <Spacer y={0.5} />
      {CustomTextarea("Pronoun", userProfile ? userProfile.pronouns : "")}
      <Spacer y={0.5} />
      {CustomTextarea("Location", userProfile ? userProfile.location : "")}
      <Spacer y={0.5} />
      {CustomTextarea("Team", userProfile ? userProfile.team : "")}
      <Spacer y={0.5} />
      {CustomTextarea("Biography", userProfile ? userProfile.bio : "")}
      <Spacer y={0.5} />
      {CustomTextarea(
        "Social Medias",
        userProfile ? userProfile.socialMedia : ""
      )}
      <Spacer y={1} />
      <Button onClick={saveChanges}>
        <b>Save</b>
      </Button>
      <Spacer y={0.5} />
      <Button onClick={saveChanges}>
        <b>Log Out</b>
      </Button>
      <Spacer y={1} />
    </Container>
  );
};

const CustomNavbar = ({ userProfile }: CustomProps) => {
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
                  src={userProfile ? userProfile.icon : ""}
                />
                <Text>{userProfile ? userProfile.name : ""}</Text>
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <CustomPopover userProfile={userProfile}></CustomPopover>
            </Popover.Content>
          </Popover>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default CustomNavbar;
