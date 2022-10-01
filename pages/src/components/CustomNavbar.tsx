import {
  Button,
  Card,
  Container,
  Link,
  Navbar,
  Popover,
  Text,
  User,
} from "@nextui-org/react";

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
              <Button css={{ background: "white" }}>
                <User
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  name="Ariana Wattson"
                />
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <Text css={{ p: "$10" }}>
                This is the content of the popover.
              </Text>
            </Popover.Content>
          </Popover>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default CustomNavbar;
