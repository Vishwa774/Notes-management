import crypto from "crypto";

const key = crypto.randomBytes(16).toString("hex");

console.log(`Generate key:${key}`);
