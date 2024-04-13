import React from "react";
import CardComp from "./card-comp";

import { EventDataType, EventsProps } from "@/types";



export default function CardsGrid({ events }:EventsProps ) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {events.map((event) => (
        <CardComp key={event._id} event={event} />
      ))}
    </div>
  );
}
