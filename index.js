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

app.use("/contact", Contact);

const PORT = 5000;

const startServer = () => {
  try {
    ConnectDB('mongodb+srv://personalApp:rEQq3gYNeJcCgiJV@cluster0.hnxpqnw.mongodb.net/?retryWrites=true&w=majority');

    app.listen(PORT, () =>
      console.log(`Server Running in the Port : http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};
startServer();