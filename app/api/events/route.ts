import { NextResponse } from "next/server";
import Event from "@/models/event";
import connectMongoDB from "@/libs/mongodb";

export async function GET() {
  await connectMongoDB();
  try {
    const events = await Event.find();
    return NextResponse.json({ events }, { status: 201 });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ Message: "Error", err }, { status: 500 });
  }
}

export async function POST(request: any) {
  await connectMongoDB();
  try {
    const { title, date, time, location, type, attendees } =
      await request.json();

    await Event.create({ title, date, time, location, type, attendees });
    return NextResponse.json({ message: "Event Created" }, { status: 201 });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ Message: "Error", err }, { status: 500 });
  }
}

