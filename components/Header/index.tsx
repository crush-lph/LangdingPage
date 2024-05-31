"use client";

import React, { FC, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { CDN_PREFIX_PC } from "@/constants";
import { headerMenuList } from "./constant";
import type { TMenuItem } from "./constant";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";

interface NavBarProps {}

const Header: FC<NavBarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Navbar
      //   classNames={{ base: "bg-[#FEF5F5]" }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <Image
            width={101}
            height={29}
            src={`${CDN_PREFIX_PC}/FM_new_home_LOGO.png`}
            alt="FastMoss"
          ></Image>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarMenuToggle
          icon={
            <motion.nav animate={isMenuOpen ? "open" : "closed"}>
              <MenuToggle></MenuToggle>
            </motion.nav>
          }
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          //   className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu className="px-0 py-0 !backdrop-blur-xl">
        <Accordion showDivider={false} className="px-0 w-full">
          {headerMenuList.map((item) => {
            return (
              <AccordionItem
                key={item.name}
                aria-label={item.name}
                title={item.name}
                classNames={{
                  trigger: "p-5 font-bold text-base text-[#1f283c]",
                  content: " py-0",
                }}
              >
                {item.children?.map((child) => {
                  return (
                    <motion.div
                      key={child.name}
                      className="text-sm p-5 font-normal text-[#1f283c]"
                      initial={{
                        backgroundColor: "rgba(255,255,255,0)",
                        scale: 1,
                      }}
                      whileTap={{
                        backgroundColor: "rgb(254,245,245,1)",
                        scale: 0.95,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {child.name}
                    </motion.div>
                  );
                })}
              </AccordionItem>
            );
          })}
        </Accordion>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
