import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGODB_URL || process.env.MONGO_URL;

    if (!mongoUrl) {
      throw new Error(
        "Missing MongoDB URL. Set MONGODB_URL (or MONGO_URL) in your .env file."
      );
    }

    const instance = await mongoose.connect(mongoUrl);
    console.log(`MongoDB Connected: ${instance.connection.host}`);
    return instance;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};
