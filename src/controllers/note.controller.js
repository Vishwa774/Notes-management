import createdNote from "./note/create.js";
import deleteNote from "./note/delete.js";
import Allnote from "./note/read.js";
import updateNote from "./note/update.js";
const noteController = {
  create: createdNote,
  read: Allnote,
  update: updateNote,
  delete: deleteNote,
};
export default noteController;
