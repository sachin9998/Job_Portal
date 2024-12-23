import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();
const port = 8000;

app.get("/home", (req, res) => {
  return res.status(200).json({
    message: "I am coming from backend",
    sucess: true,
  });
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: "http//localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

app.listen(port, (req, res) => {
  console.log("Server is listening on Port: ", port);
});
