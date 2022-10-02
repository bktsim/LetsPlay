/* eslint-disable react/jsx-key */
import { Combobox, Transition } from "@headlessui/react";
import {
  Button,
  Card,
  Container,
  Dropdown,
  Grid,
  Input,
  Spacer,
  StyledBadge,
  Text,
  Textarea,
} from "@nextui-org/react";
import { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Badge } from "@nextui-org/react";
import { keyframes } from "@emotion/react";

const interests = ["chess", "cooking"];

const EventCreation = () => {
  const [selectedInterest, setSelectedInterest] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [date, setDate] = useState(new Date());
  const [eventType, setEventType] = useState("in-person");
  const filteredPeople =
    query === ""
      ? interests
      : interests.filter((interest) => {
          const interestText = interest.toLowerCase();
          const isNotSelected = !selectedInterests.includes(interest);
          const isMatch = interestText.includes(query.toLowerCase());
          return isNotSelected && isMatch;
        });
  const handleDateChange = (date: Date) => setDate(date);
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
            <Grid xs={12}>
              <Textarea
                label="Location:"
                placeholder="Where will this event take place?"
                helperText={"Text Limit: 60 Characters"}
                rows={1}
                size={"lg"}
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12}>
              <Dropdown>
                <Dropdown.Button
                  flat
                  color="secondary"
                  css={{ tt: "capitalize", width: "max-content" }}
                >
                  {eventType}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={eventType}
                  onAction={(key) => setEventType(key.toString())}
                >
                  <Dropdown.Item key="text">Text</Dropdown.Item>
                  <Dropdown.Item key="number">Number</Dropdown.Item>
                  <Dropdown.Item key="date">Date</Dropdown.Item>
                  <Dropdown.Item key="single_date">Single Date</Dropdown.Item>
                  <Dropdown.Item key="iteration">Iteration</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
            <Grid xs={12} />

            <Grid xs={12} css={{ flexDirection: "column" }}>
              <Text size={"$lg"}>Add some tags:</Text>
              <Combobox
                value={selectedInterest}
                onChange={(selectedInterest) => {
                  setSelectedInterests([
                    ...selectedInterests,
                    selectedInterest,
                  ]);

                  setSelectedInterest("");
                }}
              >
                <div className="relative mt-1">
                  <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                      onChange={(event) => setQuery(event.target.value)}
                    />
                  </div>
                  <Container
                    css={{
                      display: "flex",
                      justifyContent: "left",
                      padding: 0,
                      marginTop: 5,
                    }}
                  >
                    {selectedInterests.map((e) => (
                      <div
                        onClick={() =>
                          setSelectedInterests(
                            selectedInterests.filter(
                              (interest) => interest !== e
                            )
                          )
                        }
                      >
                        <Badge color="primary">{e}</Badge>
                      </div>
                    ))}
                  </Container>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                  >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredPeople.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredPeople.map((person) => (
                          <Combobox.Option
                            key={person}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-teal-600 text-white"
                                  : "text-gray-900"
                              }`
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {person}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? "text-white" : "text-teal-600"
                                    }`}
                                  ></span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
            </Grid>

            <Grid xs={12} css={{ flexDirection: "column" }}>
              <Text size={"$lg"}>Select time for event:</Text>
              <DatePicker
                selected={date}
                onChange={handleDateChange}
                showTimeSelect
                dateFormat="Pp"
              />
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

export default EventCreation;
