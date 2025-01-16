import express from "express";
import noteController from "../controllers/note.controller.js";

const noteRouter = express.Router();

noteRouter.post("/new", noteController.create);
noteRouter.get("/all", noteController.read);
noteRouter.put("/edit/:id", noteController.update);
noteRouter.delete("/remove/:id", noteController.delete);

export default noteRouter;
