"use client";

import React, { useState } from "react";
import { Navbar } from "@nextui-org/navbar";
import { navItems } from "@/config/site";
import { link as linkStyles } from "@nextui-org/theme";
import { Button, ButtonGroup } from "@nextui-org/button";
import NextLink from "next/link";
import clsx from "clsx";
import CardsGrid from "./cards-grid";

import { data } from "@/config/db/data";

// Define the type for the event data
type EventDataType = {
  event_title: string;
  date: string;
  time: string;
  location: string;
  event_type: string;
  attendees: number;
};

// Define events data (you can import or fetch it from wherever it's coming from)
const eventsData: EventDataType[] = data;

export default function ButtonSelector() {
  // Initialize state for filtered events
  const [filteredEvents, setFilteredEvents] =
    useState<EventDataType[]>(eventsData);

  // Function to filter events by type
  const filterEventsByType = (type: string) => {
    if (type === "All") {
      setFilteredEvents(eventsData);
    } else {
      const filtered = eventsData.filter((event) => event.event_type === type);
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
                  {/* <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium"
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink> */}
                </Button>
              </li>
            ))}
          </ul>
        </ButtonGroup>
      </Navbar>

      {/* Pass filteredEvents as a prop to CardsGrid */}
      <CardsGrid data={filteredEvents} />
    </>
  );
}
