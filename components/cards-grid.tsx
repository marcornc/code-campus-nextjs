import React from 'react';
import CardComp from './card-comp';

type EventDataType = {
  event_title: string;
  date: string;
  time: string;
  location: string;
  event_type: string;
  attendees: number;
}

const CardsGrid: React.FC<{ data: EventDataType[] }> = ({ data }) => (
  <div className="grid grid-cols-3 gap-4">
    {data.map(event => (
      <CardComp key={event.event_title} {...event} />
    ))}
  </div>
);

export default CardsGrid;