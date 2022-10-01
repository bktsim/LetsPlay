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


// Returns how much user is interested in the event 
// based on the number of common interests between the user and the event
export const compareInterests = (user: User, event: Event): number => {
    let commonInterests = 0;
    user.interests.forEach((interest: Interest) => {
        if (event.interests.includes(interest)) {
            commonInterests++;
        }
    });
    return commonInterests;
};