import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectMongoDB } from "./utils/mongodb.js";

import urlrouter from "./routes/url.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectMongoDB();
app.use("/", urlrouter);

app.listen(5050,()=>{
    console.log("server is running on port 5050");
})
