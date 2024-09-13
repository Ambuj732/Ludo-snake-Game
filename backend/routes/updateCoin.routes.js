import { Router } from "express";
import { updateCoin } from "../controllers/updateCoin.controller.js";
const router = Router();
router.route("/update-coins").post(updateCoin);
export default router;
