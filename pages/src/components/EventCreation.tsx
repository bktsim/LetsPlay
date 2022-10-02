/* eslint-disable react/jsx-key */
import { Combobox } from "@headlessui/react";
import {
  Button,
  Card,
  Container,
  Dropdown,
  Grid,
  Radio,
  Spacer,
  Text,
  Textarea,
} from "@nextui-org/react";
import { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Badge } from "@nextui-org/react";

interface EventCreationInfo {
  tags: string[];
}

const EventCreation = ({ tags }: EventCreationInfo) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [userTags, setUserTags] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [eventName, setEventName] = useState<string>("");
  const [eventLocation, setEventLocation] = useState<string>("");
  const [eventType, setEventType] = useState("In-Person");
  const [date, setDate] = useState<Date>(new Date());
  const [eventDescription, setEventDescription] = useState<string>("");
  const [allTags, setAllTags] = useState(tags);

  const realTagQuery = allTags
    .filter(
      (tag) => tag.toLowerCase().includes(query) && !userTags.includes(tag)
    )
    .sort();

  const filteredTags =
    query === ""
      ? allTags.sort().slice(1, Math.min(tags.length, 6))
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
                value={eventName}
                onChange={(e) => {
                  setEventName(e.target.value);
                }}
                size={"lg"}
                fullWidth
                required
                maxLength={30}
              />
            </Grid>
            <Grid xs={12} />

            <Grid xs={12}>
              <Textarea
                label="Location:"
                placeholder="Where will this event take place?"
                helperText={`${
                  60 - eventLocation.length
                } Characters Remaining.`}
                rows={1}
                value={eventLocation}
                maxLength={60}
                onChange={(e) => setEventLocation(e.target.value)}
                size={"lg"}
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
                } characters remaining`}
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                rows={4}
                maxLength={300}
                size={"lg"}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} />

            <Grid xs={12} css={{ flexDirection: "column" }}>
              <Text size={"$lg"}>Attach relevant tags:</Text>
              <Text small css={{ marginBottom: 5 }}>
                Type to get started on adding tags! You can click on tags to
                remove them from your event.
              </Text>
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
              <Button css={{ marginTop: 15 }}>
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
