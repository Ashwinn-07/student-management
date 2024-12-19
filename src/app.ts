import dotenv from "dotenv";
import bodyParser from "body-parser";
import express from "express";
import Studentroute from "./routes/route";
import mongo from "./mongoConfig/mongo";
import path from "path";

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use("/", Studentroute);

mongo();

app.listen(process.env.PORT || 3000, () => {
  console.log("server up!");
});
