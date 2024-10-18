import { router } from "./backend/router/route.login.js";

import express from "express";

const app = express();

app.use("/login", router);

export default app;
