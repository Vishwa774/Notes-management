import "dotenv/config";
import http from "http";
import app from "./app.js";
import dbConnect from "./db/db.connect.js";

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`server running on http://localhost: ${process.env.PORT}`);
  dbConnect();
});
console.log("hiiiii");
