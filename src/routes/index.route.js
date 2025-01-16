import express from "express";
import userRouter from "./user.router.js";
import noteRouter from "./note.route.js";

const indexRouter = express.Router();
indexRouter.use("/api/v1/users", userRouter);

indexRouter.use("/api/v1/notes", noteRouter);

export default indexRouter;
