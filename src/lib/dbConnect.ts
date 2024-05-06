import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI as string;
const options: any = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

let mongoClient: any = null;

declare global {
    namespace globalThis {
      var _mongoClient: Promise<MongoClient>
    }
}

if (!process.env.MONGO_URI) {
    throw new Error('Please add your Mongo URI')
}

export async function connectToDB() {
    try {
        if (mongoClient) {
            return mongoClient;
        }

            if (!global._mongoClient) {
                mongoClient = await (new MongoClient(uri, options)).connect();
                global._mongoClient = mongoClient;
            } 
            else {
                mongoClient = global._mongoClient;
            }

        return mongoClient;
    } 
    catch (e) {
        console.error(e);
    }
}