export enum Interest {
    Music,
    Sports,
    Movies,
    Books,
    Travel,
    Food,
    Fashion,
    Gaming,
    Chess,
    Photography,
    Art,
    Technology,
    Graphics,
    Programming,
    "Martial Arts",
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    interests: Interest[];
    clubIds: string[];
    eventIds: string[];
    pronouns: string[];
    bio: string;
    profilePicture: string;
    team: string;
    location: string;
}


// Returns the number of common interests between two users;
const compareInterests = (firstUser: User, secondUser: User): number => {
    let commonInterests = 0;
    firstUser.interests.forEach((interest) => {
        if (secondUser.interests.includes(interest)) {
            commonInterests++;
        }
    });
    return commonInterests;
};