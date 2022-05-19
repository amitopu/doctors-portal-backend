import express from "express";
import cors from "cors";
import "dotenv/config";
import { MongoClient } from "mongodb";

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(port, () => {
    console.log("Server is running and listening to port ", port);
});
