import express from "express";
import connectDB from "./models/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import signup from "./routes/signup.routes.js";
const port = process.env.PORT;
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

// db connection
connectDB();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Mount the signup route
app.use("/auth", signup);

// server connection
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
