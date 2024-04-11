import Event from "@/models/event";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function PUT(request: any, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const { title, data, time, location, type, attendees} = await request.json();
        await connectMongoDB();
        await Event.findByIdAndUpdate(id, { title, data, time, location, type, attendees});
        return NextResponse.json({ message: "Event updated" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

export async function GET(request:any, { params }:{ params: { id: string } }) {
  try{ 
    const { id } = params;
  await connectMongoDB();
  const event = await Event.findOne({ _id: id });
  return NextResponse.json({ event }, { status: 200 });
} catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(request:any, { params }:{ params: { id: string } }) {
  try {
    await connectMongoDB();
    const { id } = params;

    await Event.findByIdAndDelete(id);
    return NextResponse.json({ message: "Event Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

