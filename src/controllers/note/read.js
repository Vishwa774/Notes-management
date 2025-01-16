import { Note } from "../../models/note.model.js";
import ApiResponse from "../../utils/ApiResponse.js";
const Allnote = async (req, res) => {
  try {
    const Allnote = await Note.find();
    res
      .status(201)
      .send(new ApiResponse(201, Allnote, "Note readed succesfully"));
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiResponse(500, error, "Failed to read"));
  }
};
export default Allnote;
