import ButtonSelector from "@/components/buttons-selector";

const getEvents = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/events", {
      method: "GET",
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

// const patchEvent = async (_id:string, {title, date, time, location, attendees})=>{
//   try{
//     const res = 
//   }
// }

export default async function Home() {
  const { events } = await getEvents();

  return <ButtonSelector events={events} />;
}
