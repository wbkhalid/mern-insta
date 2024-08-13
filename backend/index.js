import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import "dotenv/config";
import DBConnect from "./utils/db.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "*",
  Credential: true,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  return res.status(200).send({
    message: "comming from backend",
  });
});

app.listen(PORT, () => {
  DBConnect();
  console.log(`server lister at port ${PORT}`);
});
