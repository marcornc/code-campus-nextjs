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



// import mongoose, { Document, Schema } from "mongoose";

// export interface IEvent extends Document {
//   event_title: String;
//   date: String;
//   time: String;
//   location: String;
//   events_type: String;
//   attendees: Number;
// }

// const eventSchema: Schema = new mongoose.Schema({
//   event_title: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: String,
//     required: true,
//   },
//   time: {
//     type: String,
//     required: true,
//   },
//   location: {
//     type: String,
//     required: true,
//   },
//   event_type: {
//     type: String,
//     required: true,
//   },
//   attendees: {
//     type: Number,
//     required: true,
//   },
// });

// const Event = mongoose.models.Event || mongoose.model<IEvent>("Event", eventSchema);

// export default Event;
