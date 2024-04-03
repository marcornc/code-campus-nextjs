import React from 'react'

import { navItems } from "@/config/site";
import { link as linkStyles } from "@nextui-org/theme";

import { Button, ButtonGroup } from "@nextui-org/button";
import NextLink from "next/link";
import clsx from "clsx";

export default function ButtonSelector() {
  return (
    
    <ButtonGroup className="mx-auto pt-4 sticky top-0 w-full">
    <ul className="flex gap-10 justify-center ml-2">
      {navItems.map((item) => (
        <div key={item.href}>
          <Button color={item.color} variant="ghost">
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </NextLink>
          </Button>
        </div>
      ))}
    </ul>
  </ButtonGroup>
  )
}
