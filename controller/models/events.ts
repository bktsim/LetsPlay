import { eventsCollection } from "../db/db";
import { Interest, User } from "./user";

export interface Event {
    id: string;
    name: string;
    description: string;
    location: string;
    date: Date;
    clubId?: string;
    atendeeIds: string[];
    organizerIds: string[];
    interests: Interest[];
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
        obj.date &&
        obj.date instanceof Date &&
        obj.clubId &&
        typeof obj.clubId === 'string' &&
        obj.atendeeIds &&
        Array.isArray(obj.atendeeIds) &&
        obj.organizerIds &&
        Array.isArray(obj.organizerIds) &&
        obj.interests &&
        Array.isArray(obj.interests)
    )
}