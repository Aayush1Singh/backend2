import express from "express";
import { router } from "./router/route.login.js";
const app = express();

app.use("/login", router);
export { app };
