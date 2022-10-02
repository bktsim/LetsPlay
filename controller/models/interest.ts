import { interestsCollection } from "../db/db";

interface Interest {
    _id: string;
    tag: string;
    userIds: string[];
}

// assumes all given interests have not been added
export const addInterests = async (interests: String[]): Promise<String[]> => {
    await interestsCollection.insertMany(interests.map((str) => { return { name: str } }));
    return interests;
};

export const getAllInterests = async (): Promise<String[]> => {
    const table = await interestsCollection.find();
    const result: String[] = [];
    await table.forEach((doc) => { result.push(doc.name) })
    return result;
}

export const addInterest = async (tag: string, userId: string): Promise<Interest> => {
    return await interestsCollection.updateOne(
        { "tag": tag },
        { $push: { "userIds": userId } }, { "upsert": true }
    ) as unknown as Interest;
}

export const deleteInterest = async (interestId: string, userId: string): Promise<void> => {
    const result =
        await interestsCollection.updateOne({ _id: interestId }, { $pull: { userIds: userId } }) as unknown as Interest;
    if (result.userIds.length === 0) {
        await interestsCollection.deleteOne({ _id: interestId });
    }
}   