import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import signupRoutes from "./routes/ signup.routes.js";

dotenv.config();

const app = express();

// Configure CORS with explicit options
app.use(cors({
  origin: "*", // Allow all origins (you can restrict this to specific origins in production)
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use("/api", signupRoutes);
app.get("/", (req, res) => {
  res.status(200).send("OK");
});

export default app;
