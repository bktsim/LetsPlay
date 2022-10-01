import {
  Button,
  Container,
  Grid,
  Navbar,
  Popover,
  Spacer,
  Text,
  Textarea,
  User,
} from "@nextui-org/react";

const vSpace = 1.5;
const Texts = {
  profileInfo: "Profile Information"
}

const CustomTextarea = (field: string, currentText: string, rows? : number) => 
  <Textarea 
    animated={false}
    value={currentText}
    fullWidth
    minRows={rows ? rows : 1}
    bordered
    color="secondary"
    labelPlaceholder={field}
  />

const saveChanges = () => {

}

const CustomPopover = () => {
  return (
    <Container gap={3} justify="center" direction="column" alignItems="stretch">
      <Spacer y={vSpace/2} />
      <Text size={23} weight="bold"> Profile Information </Text>
      <Spacer y={vSpace} />
      {CustomTextarea("Name", "Ariana Wattson")}
      <Spacer y={vSpace} />
      {CustomTextarea("Pronoun", "She/Her/Hers")}
      <Spacer y={vSpace} />
      {CustomTextarea("Location", "Vancouver")}
      <Spacer y={vSpace} />
      {CustomTextarea("Team", "Infrastructure")}
      <Spacer y={vSpace} />
      {CustomTextarea("Biography", "Hello world", 3)}
      <Spacer y={vSpace} />
      {CustomTextarea("Social Medias", "None")}
      <Spacer y={vSpace / 2} />
      <Button onClick={saveChanges}>Save</Button>
      <Spacer y={vSpace / 2} />
      <Button onClick={saveChanges}>Log Out</Button>
    </Container>
  )
};

const CustomNavbar = () => {
  return (
    <Navbar isBordered variant={"static"}>
      <Navbar.Brand>
        <Text b color="inherit">
          SAPConnect
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs"></Navbar.Content>
      <Navbar.Content hideIn="xs">
        <Navbar.Item>
          <Popover isBordered disableShadow>
            <Popover.Trigger>
              <Button bordered color="gradient">
                <User
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  name="Ariana Wattson"
                />
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
