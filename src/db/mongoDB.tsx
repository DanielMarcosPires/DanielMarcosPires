import { MongoClient, ServerApiVersion } from "mongodb";
const API_KEY = process.env.API_KEY as string

const client = new MongoClient(API_KEY, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

interface RunPortifolio {
  db: string;
  collection: string;
}
export async function RunPortifolio({ collection, db }: RunPortifolio) {
  try {
    const database = (await client.connect()).db(db);
    const coll = database.collection(collection);
    return await coll.find({}).toArray();
  } catch (error) {
    console.error(error);
  }
}
