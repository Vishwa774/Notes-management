import mongoose from "mongoose";
async function dbConnect() {
  try {
    console.log("attempting to connect to db");
    await mongoose.connect(process.env.DB_URL);
    console.log("connected to db");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
export default dbConnect;
