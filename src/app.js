import express from "express";
import { Note } from "./models/note.model.js";
import indexRouter from "./routes/index.route.js";

const app = express();

app.use(express.json());

app.use("/", indexRouter);
