import { usersCollection } from "../db/db";

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
    name?: string;
    email: string;
    password: string;
    eventIds?: string[];
    pronouns?: string;
    bio?: string;
    icon?: string;
    team?: string;
    location?: string;
    socialMedia?: string;
    followIDs?: string[];
    tags?: string[];
}

export const createOrGetUser = async (email: string, password: string): Promise<User> => {
    const existingUser = await usersCollection.findOne({ email: email });
    if (existingUser) {
        return { id: existingUser._id.toString(), ...existingUser } as unknown as User;
    } else {
        const userObject = {
            email: email,
            password: password,
        } as User;
        const result = await usersCollection.insertOne(userObject);
        userObject.id = result.insertedId.toString();
        return userObject;
    }

};

export const updateUser = async (user: User): Promise<User | null> => {
    const result = await usersCollection.updateOne({ email: user.email }, { $set: user });
    if (result.modifiedCount === 1) {
        return user;
    } else {
        return null;
    }
};

export const getUserById = async (id: string): Promise<User | null> => {
    const user = await usersCollection.findOne({ _id: id });
    if (user) {
        return { id: user._id.toString(), ...user } as unknown as User;
    } else {
        return null;
    }
}

export const getAllUsers = async (): Promise<User[]> => {
    const result = usersCollection.find();
    const users: User[] = [];
    await result.forEach((doc) => {
        users.push({
            id: doc._id.toString(),
            name: doc.name,
            email: doc.email,
            password: doc.password,
            eventIds: doc.eventIds,
            pronouns: doc.pronouns,
            bio: doc.bio,
            icon: doc.icon,
            team: doc.team,
            location: doc.location,
            socialMedia: doc.socialMedia,
            followIDs: doc.followIDs,
            tags: doc.tags
        });
    });
    return users;
}
