import { eventsCollection } from "../db/db";
import { Interest, User } from "./user";

export interface Event {
    id: string;
    name: string;
    description: string;
    location: string;
    date: Date;
    attendeeIds: string[];
    organizer: string;
    type: string;
    interests: string[];
};


export const createNewEvent = async (event: Event): Promise<Event | null> => {
    const result = await eventsCollection.insertOne(event);
    if (!result.insertedId) {
        return null;
    } else {
        event.id = result.insertedId.toString();
        return event;
    }
}

export const updateEvent = async (event: Event): Promise<Event | null> => {
    const result = await eventsCollection.updateOne({ _id: event.id }, { $set: event });
    if (result.modifiedCount === 1) {
        return event;
    } else {
        return null;
    }
};

export const getAllEvents = async (): Promise<Event[]> => {
    const result = eventsCollection.find();
    const events: Event[] = [];
    await result.forEach((doc) => {
        events.push({
            id: doc.id,
            name: doc.name,
            description: doc.description,
            location: doc.location,
            date: doc.date,
            attendeeIds: doc.attendeeIds,
            organizerIds: doc.organizerIds,
            interests: doc.interests
        }
        )
    });
    return events;
}

export const isEvent = (obj: any): obj is Event => {
    return (
        obj &&
        typeof obj === 'object' &&
        obj.name &&
        typeof obj.name === 'string' &&
        obj.description &&
        typeof obj.description === 'string' &&
        obj.location &&
        typeof obj.location === 'string' &&
        obj.attendeeIds &&
        Array.isArray(obj.attendeeIds) &&
        obj.organizerIds &&
        Array.isArray(obj.organizerIds) &&
        obj.interests &&
        Array.isArray(obj.interests)
    )
}