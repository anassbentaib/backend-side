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


const startServer = () => {
  try {
    ConnectDB('mongodb+srv://PizzaApp:thgBykhTck3XVmMP@cluster0.hnxpqnw.mongodb.net/?retryWrites=true&w=majority');

    app.listen(5000, () =>
      console.log(`Server Running in the Port : http://localhost:5000`)
    );
  } catch (error) {
    console.log(error);
  }
};
startServer();
