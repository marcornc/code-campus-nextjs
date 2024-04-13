import { events } from "./libs/data";
import Event from "./models/event";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env" });

const mongodbUri = process.env.MONGODB_URI || ""; // Set a default value if MONGODB_URI is undefined

mongoose
  .connect(mongodbUri,)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log("DB Connection Failed", error.message));

export const importData = async (events: any) => {
    try {
     // delete previous data | avoid duplication
      await Event.deleteMany();

      await Event.insertMany(events);

      console.log("Data imported");

      // 0 is a success code and 1 (or another number) can be a failure code.
      process.exit();
    } catch (error: any) {
      console.log("Data not imported", error.message);
      process.exit(1);
    }
};

importData(events);
