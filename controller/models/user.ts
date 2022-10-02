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
    name: string;
    email: string;
    password?: string;
    interests?: Interest[];
    clubIds?: string[];
    eventIds?: string[];
    pronouns?: string[];
    bio?: string;
    profilePicture?: string;
    team?: string;
    location?: string;
}

export const createNewUser = async (email: string, password: string): Promise<User | null> => {
    const existingUser = await usersCollection.findOne({ email: email });
    if (existingUser) {
        return null;
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
    const result = await usersCollection.updateOne({ _id: user.id }, { $set: user });
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
