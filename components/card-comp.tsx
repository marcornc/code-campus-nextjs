"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider, Spinner } from "@nextui-org/react";
import { Image } from "@nextui-org/image";

import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
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


////////////////////////////////////////////////////////////////////
//////////////         COMP CARDCOMP                ////////////////
////////////////////////////////////////////////////////////////////

function CardComp({ event }: CardProps) {
  const [attendeesState, setAttendeesState] = useState(event.attendees);
  const [isImageLoaded, setImageLoaded] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  const spinnerColor = getSpinnerColor(event.type);

  useEffect(() => {
    const putEvent = async (id: string, attendees: number) => {
      try {
        const response = await fetch(`http://localhost:3000/api/events/${id}`, {
          method: "PUT",
          body: JSON.stringify({ attendees: attendees }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          console.log("THE ATTENDEES ARE BEEN UPDATE ");
          const data = await response.json();
        } else {
          console.error("Failed to update attendees count");
        }
      } catch (error) {
        console.error("Error updating attendees count:", error);
      }
    };

    putEvent(event._id, attendeesState);
  }, [attendeesState, event._id]);

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
          onError={() => setImageLoaded(true)}
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
        <p>Attendees: {attendeesState}</p>
        <Button
          className=""
          onClick={() => {
            setIsJoined(!isJoined);
            setAttendeesState((att) => (isJoined ? att - 1 : att + 1));
          }}
        >
          {isJoined ? "Joined" : "Join"}{" "}

        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardComp;
