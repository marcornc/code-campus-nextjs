import ButtonSelector from "@/components/buttons-selector";
import { EventDataType } from "@/types";
import { getDefaultResultOrder } from "dns";

const getEvents = async () => {
  const data = JSON.stringify({
    "collection": "events",
    "database": "events_db",
    "dataSource": "Cluster0"
  });

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '7VWboISBDJGDCr5t5Yt1yoxEKTafPhXaaGmB45b7YZnETJkwh1cIgyNWtWSSmsUD',
    },
    body: data,
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://eu-west-2.aws.data.mongodb-api.com/app/data-ebwcl/endpoint/data/v1/action/find", requestOptions);
    return response.json();
 
  } catch (error) {
    console.log('error', error);
  }
};

export default async function Home() {
  const events = await getEvents();

  return <ButtonSelector events={events.documents as EventDataType[]} />;
}
