import { interestCollection } from "../db/db";

// assumes all given interests have not been added
export const addInterests = async (interests: String[]): Promise<String[]> => {
        await interestCollection.insertMany(interests.map((str) => {return {name: str}}));
        return interests;
};