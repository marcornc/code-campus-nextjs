import ButtonSelector from "@/components/buttons-selector";
import { EventDataType } from "@/types";
import { getDefaultResultOrder } from "dns";

const getEvents = async () => {
  const data = JSON.stringify({
    "collection": "events",
    "database": "events_db",
    "dataSource": "Cluster0"
  });

  const apiKey = process.env.API_KEY || ""

  const urlEndpoint = process.env.URL_ENDPOINT || ""


  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': apiKey,
    },
    body: data,
    redirect: 'follow'
  };

  try {
    const response = await fetch(`${urlEndpoint}/action/find`, requestOptions);
    return response.json();
 
  } catch (error) {
    console.log('error', error);
  }
};

export default async function Home() {
  const events = await getEvents();

  return <ButtonSelector events={events.documents as EventDataType[]} />;
}
