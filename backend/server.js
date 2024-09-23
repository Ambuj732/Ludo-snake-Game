import express from "express";
import connectDB from "./models/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import signup from "./routes/signup.routes.js";
import coin from "./routes/coin.routes.js";
import userInformation from "./routes/userInformation.routes.js";
import getUserInformation from "./routes/getUserInforamtion.routes.js";
import updateCoins from "./routes/updateCoin.routes.js";
import claimDailyReward from "./routes/dailyRewards.routes.js";
// import adminRoutes from "./routes/adminRoutes.js";
const port = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/auth", signup);
app.use("/auth", coin);
app.use("/auth", userInformation);
app.use("/auth", getUserInformation);
app.use("/auth", updateCoins);
app.use("/auth", claimDailyReward);
// app.use("/api/auth/admin", adminRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
