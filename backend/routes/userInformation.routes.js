import { Router } from "express";
import userInfromation from "../controllers/userInformation.controller.js";
const router = Router();
router.route("/user-information").post(userInfromation);
export default router;
