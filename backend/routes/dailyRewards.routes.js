import { Router } from "express";
import { claimDailyReward } from "../controllers/dailyRewards.controller.js";
const router = Router();
router.route("/daily-reward-coins").post(claimDailyReward);
export default router;
