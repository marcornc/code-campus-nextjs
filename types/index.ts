import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export type EventDataType = {
  _id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  attendees: number;
}

export type CardProps = {
 event: EventDataType
};

export type EventsProps = {
  events: EventDataType[]
}

export type Color = "success" | "warning" | "secondary"