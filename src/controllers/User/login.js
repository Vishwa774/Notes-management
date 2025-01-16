import { User } from "../../models/user.model.js";
import ApiResponse from "../../utils/ApiResponse.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "Required fields are missing"));
    }
    const existinguser = await User.findOne({ email: email });
    if (!existinguser) {
      return res.status(404).send(new ApiResponse(404, null, "404 Not found"));
    }
    const verified = await bcrypt.compare(password, existinguser.password);
    if (!verified) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "Invalid Creditials"));
    }
    const Token = jwt.sign(
      {
        name: existinguser.name,
        email: existinguser.email,
        _id: existinguser.id,
      },
      process.env.Token_key,
      { expiresIn: "1d" }
    );

    res.status(200).send(new ApiResponse(200, { Token }, "Login Succesfully"));
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiResponse(500, error, "Failed to login"));
  }
};
export default loginUser;
