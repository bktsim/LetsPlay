import { Card, Text, Image, Button } from "@nextui-org/react";

interface ClubCardInfo {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface ClubCardProps {
  info: ClubCardInfo;
}

const ClubCard = (info: ClubCardProps) => {
  const {
    info: { id, name, image, description },
  } = info;

  return (
    <Card variant={"bordered"} css={{ maxWidth: "40%", padding: 15 }}>
      <Card.Header>
        <Text h2>{name}</Text>
      </Card.Header>
      <Card.Divider />
      <Image
        css={{
          padding: 6,
          maxWidth: "80%",
          maxHeight: "80%",
          aspectRatio: "1 / 1",
        }}
        src={image}
        alt="image"
      ></Image>
      <Card.Body>
        <Text css={{ padding: 4, marginBottom: -5 }}>{description}</Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer
        css={{
          display: "flex",
          paddingLeft: 0,
          paddingRight: 0,
          justifyContent: "center",
        }}
      >
        <Button css={{ width: "80%" }}>Join</Button>
      </Card.Footer>
    </Card>
  );
};

export default ClubCard;
