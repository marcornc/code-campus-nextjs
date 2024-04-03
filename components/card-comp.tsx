import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import {Image} from "@nextui-org/image";
import {Link} from "@nextui-org/link";

import { data } from '@/db/data'
import { Button } from "@nextui-org/button";

const event = data[2];



function getEventImageUrl(eventType: string): string {
  const imageUrls: { [key: string]: string } = {
    "Tech": "/green.png",
    "Social": "/yellow.png",
    // Add more event types and their corresponding image URLs here
  };

  // Return the corresponding image URL for the eventType, or a default image URL if not found
  return imageUrls[eventType] || "/purple.png";
}



type CardProps = {
  event_title: string;
  date: string;
  time: string;
  location: string;
  event_type: string;
  attendees: number;
}

export default function CardComp({ event_title, date, time, location, event_type, attendees }: CardProps) {
 
  return (
  
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="event's name"
          height={70}
          radius="sm"
          src={getEventImageUrl(event_type)}
          width={70}
          isZoomed
        />
        <div className="flex flex-col">
          <p className="text-md">{event_title}</p>
          <div>
          <p className="text-small text-default-500">{date}</p>
          <p className="text-small text-default-500">{time}</p>

          </div>
        </div>
      </CardHeader>
      
      <CardBody>
        <p>{location}</p>
      </CardBody>
      <Divider/>
      <CardFooter className="justify-between ">
        <p>Attendees: {attendees}</p>
        <Button className="">Join</Button>
      </CardFooter>
    </Card>
  );
}
