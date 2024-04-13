import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema(
  {
    title: String,
    date: String,
    time: String,
    location: String,
    type: String,
    attendees: Number,
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;

