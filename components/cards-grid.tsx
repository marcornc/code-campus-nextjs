import React from 'react'

import { data } from '@/db/data'
import CardComp from './card-comp'



export default function CardsGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map(event => (
        <CardComp key={event.event_title} {...event} />
      ))}
    </div>
  );
}