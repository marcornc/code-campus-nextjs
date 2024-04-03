import Link from "next/link";
import React from "react";

import { links } from '@/config/site'

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center py-3 text-current">

        <p className="text-xs">
          <span className="font-semibold">About this website:&nbsp;</span>
          built with &nbsp;
          <Link
            className="underline hover:no-underline"
            href={links.nextJS}
            title="nextJs home page"
          >
             Next.js
          </Link>
          ,&nbsp; 
          <Link
            className="underline hover:no-underline"
            href={links.nextUI}
            title="next UI home page"
          >
             Next UI
          </Link>
          ,&nbsp; 
          <Link
            className="underline hover:no-underline"
            href={links.vercel}
            title="vercel home page"
          >
             Vercel
          </Link>
          &nbsp;hosting.
        </p>
    </footer>
  );
}
