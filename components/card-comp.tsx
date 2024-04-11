"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider, Spinner } from "@nextui-org/react";
import { Image } from "@nextui-org/image";

import { Button } from "@nextui-org/button";
import { useState } from "react";
import { CardProps, Color } from "@/types/index";

function getEventImageUrl(type: string): string {
  const imageUrls: { [key: string]: string } = {
    Tech: "/green.png",
    Social: "/yellow.png",
  };

  return imageUrls[type] || "/purple.png";
}

function getSpinnerColor(type: string): Color {
  const imageUrls: { [key: string]: Color } = {
    Tech: "success",
    Social: "warning",
  };

  return imageUrls[type] || "secondary";
}

export default function CardComp(
 { event}: CardProps
) {
  const [isImageLoaded, setImageLoaded] = useState(false);

  const spinnerColor = getSpinnerColor(event.type);

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        {!isImageLoaded && <Spinner color={spinnerColor} />}
        <Image
          alt="event's name"
          height={70}
          radius="sm"
          src={getEventImageUrl(event.type)}
          width={70}
          isZoomed
          onLoad={() => setImageLoaded(true)}
          style={{ display: isImageLoaded ? "block" : "none" }}
        />
        <div className="flex flex-col">
          <p className="text-md">{event.title}</p>
          <div>
            <p className="text-small text-default-500">{event.date}</p>
            <p className="text-small text-default-500">{event.time}</p>
          </div>
        </div>
      </CardHeader>

      <CardBody>
        <p>{event.location}</p>
      </CardBody>
      <Divider />
      <CardFooter className="justify-between ">
        <p>Attendees: {event.attendees}</p>
        <Button className="">Join</Button>
      </CardFooter>
    </Card>
  );
}
