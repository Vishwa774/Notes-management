import { User } from "../../models/user.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "Required fields are missing"));
    }
    const hashed = await bcrypt.hash(password, 10);
    const result = await User.create({
      name,
      email,
      password: hashed,
    });
    res
      .status(201)
      .send(new ApiResponse(201, result, "userAccount registered Succesfully"));
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiResponse(500, error, "Failed to register user"));
  }
};
export default registerUser;
