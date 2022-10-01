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
  User,
  useTheme,
} from "@nextui-org/react";

const vSpace = 1.5;
const Texts = {
  profileInfo: "Profile Information",
};

const CustomTextarea = (field: string, currentText: string, rows?: number) => (
  <Textarea
    animated={false}
    value={currentText}
    fullWidth
    minRows={rows ? rows : 1}
    bordered
    color="primary"
    label={field}
  />
);

const saveChanges = () => {};

const CustomPopover = () => {
  return (
    <Container justify="center" direction="column" alignItems="stretch">
      <Spacer y={vSpace / 2} />
      <Text size={23} b>
        Profile Information
      </Text>
      <Spacer y={0.5} />
      {CustomTextarea("Name", "Ariana Wattson")}
      <Spacer y={0.5} />
      {CustomTextarea("Pronoun", "She/Her/Hers")}
      <Spacer y={0.5} />
      {CustomTextarea("Location", "Vancouver")}
      <Spacer y={0.5} />
      {CustomTextarea("Team", "Infrastructure")}
      <Spacer y={0.5} />
      {CustomTextarea("Biography", "Hello world", 3)}
      <Spacer y={0.5} />
      {CustomTextarea("Social Medias", "None")}
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

const CustomNavbar = () => {
  return (
    <Navbar isBordered variant={"static"}>
      <Navbar.Brand>
        <Container css={{ display: "flex", flexDirection: "row" }}>
          <Text h2 color="$sapBlue" css={{ marginBottom: -5 }}>
            SAP
          </Text>
          <Text h2 css={{ marginBottom: -5 }}>
            Connect
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
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
                <Text>Ariana Wattson</Text>
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <CustomPopover></CustomPopover>
            </Popover.Content>
          </Popover>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default CustomNavbar;
