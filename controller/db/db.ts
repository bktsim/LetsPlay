import { Collection, MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://rustamch:p4s8B3q5KKowyCUT@cluster0.vz2rw.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);
export let usersCollection: Collection;
export let clubsCollection: Collection;
export let eventsCollection: Collection;



export const initializeDb = async () => {
    await client.connect();
    const appDb = client.db("sap_club_app")
    usersCollection = appDb.collection("users");
    clubsCollection = appDb.collection("clubs");
    eventsCollection = appDb.collection("events");
}
