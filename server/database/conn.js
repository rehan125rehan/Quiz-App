import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export default async function connect() {
  try {
    await mongoose.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected");
  } catch (error) {
    console.error("Database Connection Failed:", error.message);
    process.exit(1); // Exit the application if the database connection fails
  }
}
