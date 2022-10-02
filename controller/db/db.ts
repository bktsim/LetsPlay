import { MongoClient } from "mongodb";

const uri = "mongodb+srv://rustamch:p4s8B3q5KKowyCUT@cluster0.vz2rw.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);
const appDb = client.db("sap_club_app")



export const {
    usersCollection,
    clubsCollection,
    eventsCollection,
    interestsCollection,
} = {
    usersCollection: appDb.collection("users"),
    clubsCollection: appDb.collection("clubs"),
    eventsCollection: appDb.collection("events"),
    interestsCollection: appDb.collection("interests"),
};

