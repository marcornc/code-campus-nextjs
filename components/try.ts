import { EventDataType } from '@/types';



const getEvents = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/events", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading events: ", error);
  }
};

export default async function EventsList(): Promise<EventDataType[]> {
  const events  = await getEvents();
  console.log(events)
  return events;
}