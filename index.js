import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { registerRoute } from "./routes/registration.js";
import {mongo} from "./dao/mongo.js"

dotenv.config();
const app = express();
await mongo.connectDB();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send({ message: "Server for Registration CRUD-HOME" });
});
app.use("/api/registration", registerRoute);

app.listen(PORT, () => console.log("Server running successfully"));
