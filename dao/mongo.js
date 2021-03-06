import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGODB_URL);

let mongo = {
  db: null,
  users: null,
  async connectDB() {
    await mongoClient.connect();
    console.log("MongoDB Connected");
    this.db = mongoClient.db("Registration");
    this.users = this.db.collection("users");
  },
};

export { mongo };
