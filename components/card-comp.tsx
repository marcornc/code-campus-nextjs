"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider, Spinner } from "@nextui-org/react";
import { Image } from "@nextui-org/image";

import { Button } from "@nextui-org/button";
import { useState } from "react";

function getEventImageUrl(eventType: string): string {
  const imageUrls: { [key: string]: string } = {
    Tech: "/green.png",
    Social: "/yellow.png",
  };

  return imageUrls[eventType] || "/purple.png";
}

function getSpinnerColor(eventType: string): string {
  const imageUrls: { [key: string]: string } = {
    Tech: "success",
    Social: "warning",
  };

  return imageUrls[eventType] || "secondary";
}

type CardProps = {
  event_title: string;
  date: string;
  time: string;
  location: string;
  event_type: string;
  attendees: number;
};

export default function CardComp({
  event_title,
  date,
  time,
  location,
  event_type,
  attendees,
}: CardProps) {
  const [isImageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        {!isImageLoaded && <Spinner color={getSpinnerColor(event_type)} />}
        <Image
          alt="event's name"
          height={70}
          radius="sm"
          src={getEventImageUrl(event_type)}
          width={70}
          isZoomed
          onLoad={() => setImageLoaded(true)}
          style={{ display: isImageLoaded ? "block" : "none" }}
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
      <Divider />
      <CardFooter className="justify-between ">
        <p>Attendees: {attendees}</p>
        <Button className="">Join</Button>
      </CardFooter>
    </Card>
  );
}
