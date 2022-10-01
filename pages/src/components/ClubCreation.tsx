import {
  Button,
  Card,
  Container,
  Grid,
  Input,
  Spacer,
  Text,
  Textarea,
} from "@nextui-org/react";

const ClubCreation = () => {
  return (
    <Container css={{ display: "flex", justifyContent: "center" }}>
      <Text h1> Make your event! </Text>
      <Card>
        <Card.Body>
          <Grid.Container gap={2}>
            <Grid xs={12}>
              <Textarea
                label="Event Name"
                placeholder="Movie Watchparty"
                helperText={"Text Limit: 30 Characters"}
                rows={1}
                size={"lg"}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} />
            <Grid xs={12}>
              <Textarea
                label="Event Description"
                placeholder="What is your event about?"
                helperText={"Text Limit: 300 Characters"}
                rows={4}
                size={"lg"}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} />

            <Grid xs={12}>
              <Container css={{ padding: 0 }}>
                <Text size={"$md"}>Event Image</Text>
                <Button css={{ marginTop: 4 }}> Upload </Button>
              </Container>
            </Grid>

            <Grid xs={12} css={{ fontSize: 16 }}>
              <Input
                bordered
                size="lg"
                label="Labels"
                placeholder="Chess"
                css={{ width: "100%" }}
                helperText="Add labels to help other SAP employees to find your club! For example: chess"
              />
            </Grid>

            <Grid xs={12}>
              <Spacer y={1} />
            </Grid>

            <Grid xs={12} css={{ justifyContent: "center" }}>
              <Button>
                <b>Create Club</b>
              </Button>
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ClubCreation;
