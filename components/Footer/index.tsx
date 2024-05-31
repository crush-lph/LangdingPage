"use client";

import React, { FC, ReactNode } from "react";
import { navList, socialMedias } from "./constant";
import type { MenuItem } from "./constant";
import { CDN_PREFIX_PC } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

// 导航
const FooterNav: FC<{ menu: Array<MenuItem> }> = ({ menu }) => {
  /**
   * 菜单点击事件
   * @param item 菜单项
   */
  const handleClick = (item: MenuItem) => {
    console.log(item);
  };

  return (
    <div className="my-8">
      {menu?.map((item) => {
        return (
          <div key={item.name}>
            <motion.div
              className="select-none px-4 cursor-pointer font-bold text-sm py-3"
              onClick={() => {
                handleClick(item);
              }}
              initial={{
                backgroundColor: "rgba(255,255,255,1)",
                scale: 1,
              }}
              whileTap={{
                backgroundColor: "rgb(254,245,245,1)",
                scale: 0.95,
              }}
              transition={{ duration: 0.3 }}
            >
              {item.name}
            </motion.div>

            <>
              {item.children?.map((item) => {
                return (
                  <motion.div
                    initial={{
                      backgroundColor: "rgba(255,255,255,1)",
                      scale: 1,
                    }}
                    whileTap={{
                      backgroundColor: "rgb(254,245,245,1)",
                      scale: 0.95,
                      radius: 12,
                    }}
                    className="select-none px-4 cursor-pointer  font-thin text-sm py-3 text-[#1F283C]"
                    key={item.name}
                    onClick={() => {
                      handleClick(item);
                    }}
                  >
                    {item.name}
                  </motion.div>
                );
              })}
            </>
          </div>
        );
      })}
    </div>
  );
};

// 社媒账号
const SocialMedia = () => {
  return (
    <div className="mx-4 py-8 border-0 border-t-2 border-solid border-[#e8f2fe]">
      <div className="mb-3 font-bold">Follow us</div>
      <div className="flex justify-between">
        {socialMedias?.map((socialMedia) => {
          return (
            <a key={socialMedia.img} href={socialMedia.href}>
              <Image
                width={40}
                height={40}
                src={CDN_PREFIX_PC + "/" + socialMedia.img}
                alt={socialMedia.name}
              ></Image>
            </a>
          );
        })}
      </div>
    </div>
  );
};

// 品牌介绍
const Introduce = () => {
  return (
    <div className="px-4">
      <Image
        className="mb-4"
        width={101}
        height={29}
        src={`${CDN_PREFIX_PC}/FM_new_home_LOGO.png`}
        alt="FastMoss"
      ></Image>
      <p className="text-sm ">
        FastMoss offers the TikTok data analytics service and is committed to
        becoming the most complete and excellent data analytics tool in the
        global market.
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <Introduce />

      <FooterNav menu={navList} />
      <SocialMedia />
    </footer>
  );
};

export default Footer;
