import app from "../src/app.js";
import { connectDB } from "../src/config/db.js";

// Connect to database
connectDB().catch((error) => {
  console.error("Database connection failed:", error);
});

// Export the Express app as a serverless function
export default app;
