import { interestCollection } from "../db/db";

export const addInterests = async (interest: String): Promise<String | null> => {
    const result = await interestCollection.find({ name: interest });
    if (!result.hasNext()) {
        await interestCollection.insertOne({ name: interest });
        return interest;
    } else {
        return null;
    }
};