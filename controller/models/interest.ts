import { interestsCollection } from "../db/db";

// assumes all given interests have not been added
export const addInterests = async (interests: String[]): Promise<String[]> => {
        await interestsCollection.insertMany(interests.map((str) => {return {name: str}}));
        return interests;
};

export const getAllInterests = async (): Promise<String[]> => {
    const table = await interestsCollection.find();
    const result: String[] = [];
    await table.forEach((doc) => {result.push(doc.name)})
    return result;
}