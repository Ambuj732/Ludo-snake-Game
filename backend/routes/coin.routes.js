import { Router } from "express";
import { coinStore } from "../controllers/coin.controller.js";
const router = Router();
router.route("/coin-update").post(coinStore);
export default router;
