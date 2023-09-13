import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ConnectDB from "./database/connect.js";
import Contact from "./routes/Contact.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(bodyParser.json({ limit: "5mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from There ");
});
app.get("/contact", (req, res) => {
  res.send("contact ");
});
// app.use("/contact", );

const PORT = process.env.PORT || 5000;

const startServer = () => {
  try {
    ConnectDB(process.env.CONNECTION_URL);

    app.listen(PORT, () =>
      console.log(`Server Running in the Port : http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};
startServer();
