import e from "express";
import operationRouter from "./routes/operation.router.js"
import { env } from "./config/environment.js";
const app = e();

app.listen(env.PORT, () => {
    console.log("server up on " + env.PORT);
});

app.use("/operaciones", operationRouter);