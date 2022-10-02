/* eslint-disable react/jsx-key */
import { Combobox } from "@headlessui/react";
import {
  Button,
  Card,
  Container,
  Grid,
  Radio,
  Text,
  Textarea,
} from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Badge } from "@nextui-org/react";
import { LoginContext } from "../../_app";

interface EventCreationInfo {
  closeHandler: any;
}

const EventCreation = ({ closeHandler }: EventCreationInfo) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [userTags, setUserTags] = useState<string[]>([]);
  const { user } = useContext(LoginContext);
  const [query, setQuery] = useState("");
  const [date, setDate] = useState(new Date());
  const [eventType, setEventType] = useState("In-Person");
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [allTags, setAllTags] = useState<Array<string>>([]);
  const [defaultUser, setDefaultUser] = useState<any>(null);

  useEffect(() => {
    setDefaultUser(user);
  }, [user]);

  const realTagQuery = allTags
    .filter(
      (tag) => tag.toLowerCase().includes(query) && !userTags.includes(tag)
    )
    .sort();

  const filteredTags =
    query === ""
      ? allTags.sort().slice(1, Math.min(allTags.length, 6))
      : realTagQuery.slice(1, Math.min(realTagQuery.length, 6));

  const handleDateChange = (date: Date) => setDate(date);
  return (
    <Container css={{ display: "flex", justifyContent: "center" }}>
      <Card>
        <Card.Body>
          <Grid.Container gap={2}>
            <Grid xs={12}>
              <Textarea
                label="Event Name"
                placeholder="Movie Watchparty"
                helperText={`${30 - eventName.length} Characters Remaining`}
                rows={1}
                maxLength={30}
                size={"lg"}
                onChange={(e) => setEventName(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} />
            <Grid xs={12}>
              <Radio.Group
                label="Event Mode:"
                color="primary"
                defaultValue="In-Person"
                size={"sm"}
                css={{ paddingLeft: 6 }}
                onChange={(value) => {
                  setEventType(value);
                }}
              >
                <Radio value="In-Person">In-Person</Radio>
                <Radio value="Online">Online</Radio>
                <Radio value="Hybrid">Hybrid</Radio>
              </Radio.Group>
            </Grid>
            <Grid xs={12}>
              <Textarea
                label="Location:"
                placeholder={
                  eventType === "Online"
                    ? "No location for online events"
                    : "Where will this event take place?"
                }
                helperText={
                  eventType === "Online"
                    ? undefined
                    : `${60 - eventLocation.length} Characters Remaining`
                }
                rows={1}
                onChange={(e) => {
                  setEventLocation(e.target.value);
                  if (eventType === "Online") setEventLocation("");
                }}
                disabled={eventType === "Online"}
                size={"lg"}
                maxLength={60}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} />

            <Grid xs={12} css={{ flexDirection: "column", paddingLeft: 18 }}>
              <Text>Time:</Text>
              <DatePicker
                selected={date}
                onChange={handleDateChange}
                showTimeSelect
                dateFormat="Pp"
              />
            </Grid>
            <Grid xs={12}>
              <Textarea
                label="Event Description"
                placeholder="What is your event about? Be sure to attach a link to your Teams meeting if your event is Online or Hybrid!"
                helperText={`${
                  300 - eventDescription.length
                } Characters Remaining`}
                maxLength={300}
                rows={4}
                onChange={(e) => setEventDescription(e.target.value)}
                size={"lg"}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} />

            <Grid xs={12} css={{ flexDirection: "column" }}>
              <Text size={"$lg"}>Attach relevant tags:</Text>
              <Container
                css={{
                  display: "flex",
                  justifyContent: "left",
                  padding: 0,
                  marginTop: 5,
                  marginBottom: 10,
                }}
              >
                {userTags.map((e) => (
                  <Badge
                    color="primary"
                    onClick={() =>
                      setUserTags(userTags.filter((tag) => tag !== e))
                    }
                  >
                    {e}
                  </Badge>
                ))}
              </Container>
              <Combobox
                value={selectedValue}
                onChange={(tag) => {
                  if (!userTags.includes(tag)) setUserTags([...userTags, tag]);
                  if (!allTags.includes(tag)) setAllTags([...allTags, tag]);
                  setSelectedValue("");
                }}
              >
                <Combobox.Input
                  onChange={(event) => setQuery(event.target.value)}
                  style={{ marginBottom: -13, borderRadius: 4 }}
                />

                <Combobox.Options style={{ width: "100%", marginLeft: 0 }}>
                  {query.length > 0 && filteredTags.length === 0 && (
                    <Combobox.Option
                      key={query}
                      value={query}
                      style={{
                        background: "rgba(140,140,140,1)",
                        color: "white",
                        border: -1,
                        width: "100%",
                        marginBottom: 0,
                      }}
                    >
                      {({ active }) => (
                        <Text
                          b
                          css={{
                            display: "flex",
                            paddingLeft: 8,
                            paddingRight: 8,
                            border: active
                              ? "2px #00b9f2"
                              : "2px rgba(0,185,242,0.3)",
                            color: "white",
                            width: "100%",
                            borderStyle: "solid",
                          }}
                        >
                          {query}
                        </Text>
                      )}
                    </Combobox.Option>
                  )}
                  {filteredTags.map((e) => (
                    <Combobox.Option
                      key={e}
                      value={e}
                      style={{
                        background: "rgba(140,140,140,1)",
                        color: "white",
                        border: -1,
                        width: "100%",
                        marginBottom: 0,
                      }}
                    >
                      {({ active }) => (
                        <Text
                          b
                          css={{
                            display: "flex",
                            paddingLeft: 8,
                            paddingRight: 8,
                            border: active
                              ? "2px #00b9f2"
                              : "2px rgba(0,185,242,0.3)",
                            color: "white",
                            width: "100%",
                            borderStyle: "solid",
                          }}
                        >
                          {e}
                        </Text>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </Combobox>
            </Grid>
            <Grid xs={12} css={{ justifyContent: "center" }}>
              <Button
                css={{ marginTop: 15 }}
                onPress={() => {
                  const a = fetch("/api/event", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      name: eventName,
                      location: eventLocation,
                      type: eventType,
                      date: date,
                      description: eventDescription,
                      organizerId: defaultUser ? defaultUser.id : null,
                      tags: userTags,
                    }),
                  });
                  closeHandler();
                  window.location.reload();
                  return a;
                }}
              >
                <b>Create Event</b>
              </Button>
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EventCreation;
