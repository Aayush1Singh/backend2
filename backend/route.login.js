import { Router } from "express";
import data from "./";
import { registerUser } from "../controller/login.controller.js";
const router = Router();

router.route("/register").post(registerUser);

export default router;
