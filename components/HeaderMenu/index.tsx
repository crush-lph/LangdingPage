"use client";
import React, { FC } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import type { TMenuItem } from "../Header/constant";
import menu from "../Header/constant";
import { Listbox, ListboxItem } from "@nextui-org/react";

const MenuItem: FC<MenuItemProps> = ({ menuItem }) => {
  return (
    <AccordionItem aria-label={menuItem.name} title="Accordion 1">
      {/* <Listbox>
        <ListboxItem key="home" href="/home">
          Home
        </ListboxItem>
        <ListboxItem key="about" href="/about">
          About
        </ListboxItem>
      </Listbox> */}
      123123
    </AccordionItem>
  );
};

export default function HeaderMenu() {
  return (
    <Accordion selectionMode="multiple">
      {menu.map((item) => {
        return <MenuItem key={item.name} menuItem={item}></MenuItem>;
      })}
    </Accordion>
  );
}
