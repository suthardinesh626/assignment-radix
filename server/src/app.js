import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import signupRoutes from "./routes/ signup.routes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("OK");
});
const ensureDBConnection = async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ message: "Database connection failed" });
  }
};

app.use("/api", ensureDBConnection, signupRoutes);

export default app;
