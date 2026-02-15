import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.DATABASE_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));
