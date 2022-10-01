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
          ConnectApp
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs"></Navbar.Content>
      <Navbar.Content hideIn="xs">
        <Navbar.Item>
          <Popover isBordered disableShadow>
            <Popover.Trigger>
              <Button auto flat>
                Open Popover
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <Text css={{ p: "$10", background: "black" }}>
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
