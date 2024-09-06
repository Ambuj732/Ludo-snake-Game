import { Router } from "express";
import getUserInformationByPhoneNumber from "../controllers/getUserInformation.controller.js";
const router = Router();
router.route("/get-user-information").post(getUserInformationByPhoneNumber);
export default router;
