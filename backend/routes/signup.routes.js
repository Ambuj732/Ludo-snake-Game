import { Router } from "express";
import { getsignUp } from "../controllers/signup.controller.js";
import { login } from "../controllers/login.controller.js";
const router = Router();

router.route("/signup").post(getsignUp);
router.route("/login").post(login);

export default router;
