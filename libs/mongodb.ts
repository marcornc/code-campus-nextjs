import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const mongodbUri = process.env.MONGODB_URI || "";
    await mongoose.connect(mongodbUri);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;