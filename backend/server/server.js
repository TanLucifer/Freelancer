import express from "express";
import dotenv from "dotenv";
import cookie from "cookie-parser";
dotenv.config();

import authRouter from "../routes/authroutes.js";
import mongoConn from "../utils/mongooseconnection.js";
mongoConn(process.env.MONGODB_URI)

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
app.use("/api/auth", authRouter);


mongoConn(process.env.MONGO_URI)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});