import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const mongodbUri = process.env.MONGODB_URI || ""; // Set a default value if MONGODB_URI is undefined
    await mongoose.connect(mongodbUri);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;