import React from "react";
import CardComp from "./card-comp";

import { EventDataType } from "@/types";



export default function CardsGrid({ events }: { events: EventDataType[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {events.map((event) => (
        <CardComp key={event._id} event={event} />
      ))}
    </div>
  );
}
