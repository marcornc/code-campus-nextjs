"use client";

import React, { useState } from "react";
import { Navbar } from "@nextui-org/navbar";
import { navItems } from "@/config/site";

import { Button, ButtonGroup } from "@nextui-org/button";

import CardsGrid from "./cards-grid";

import { EventDataType } from "@/types";

export default function ButtonSelector({
  events,
}: {
  events: EventDataType[];
}) {

  // Initialize state for filtered events
  const [filteredEvents, setFilteredEvents] = useState<EventDataType[]>(events);

  // Function to filter events by type
  const filterEventsByType = (type: string) => {
    if (type === "All") {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter((event) => event.type === type);
      setFilteredEvents(filtered);
    }
  };

  return (
    <>
      <Navbar isBordered className="mb-4">
        <ButtonGroup className="mx-auto py-4 sticky top-0 w-full">
          <ul className="flex gap-10 justify-center ml-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Button
                  color={item.color}
                  variant="ghost"
                  onClick={() => filterEventsByType(item.label)}
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </ButtonGroup>
      </Navbar>

      <CardsGrid events={filteredEvents} />
    </>
  );
}
