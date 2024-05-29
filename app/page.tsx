"use client";

import { Footer, Header } from "@/components";
import { CDN_PREFIX_PC } from "@/constants";
import { Button, Image } from "@nextui-org/react";
import { Children, FC, ReactNode, useEffect, useState } from "react";
import { HTMLMotionProps, motion, MotionConfig, Variants } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

const shopImgs: string[] = [
  `/acquco_logo_529.png`,
  `/Cider_logo_529.png`,
  `/Frame_logo_529.png`,
  `/Group_logo_529.png`,
  `/logoH5_logo_529.png`,
  `/MEOKY_logo _529.png`,
  `/wyze_white_logo_529.png`,
];

type ReasonModel = {
  name: string;
  job: string;
  evaluate: string;
  imgName: string;
};

const reasons: ReasonModel[] = [
  {
    name: "Viva Naturals",
    job: "Top Ranking US TikTok Shop",
    evaluate: `I want to contribute and encourage others to use FastMoss. It's a really awesome tool for creators who generated millions of sales for others we can find and samples for those creators as well. FastMoss is a game changer really`,
    imgName: `FM_new_home_reason1.png`,
  },
  {
    name: "Jeremy the Fun Hairstylist",
    job: "Top Content Creator in TikTok US",
    evaluate: `If you're a creator, you will love the list of viral products updated every single day on FastMoss, which makes it even easier to get connected with the right sellers.`,
    imgName: `FM_new_home_reason2.png`,
  },
  {
    name: "Samantha",
    job: "|UGC|TikTokShopCreator",
    evaluate: `It's like a mentor that understand exactly what i'm looking for as a TikTok shop creators, only does FastMoss guides me to the top selling products, but it also shows me the top affiliates for thoes products. It's kind of like having a backstage pass to success`,
    imgName: `FM_new_home_reason3.png`,
  },
];

const Clients = () => {
  return <></>;
};

interface MotionWrapProps extends HTMLMotionProps<"div"> {
  direction?: "left" | "right";
}

const SlowInWrap: FC<MotionWrapProps> = ({
  direction = "left",
  children,
  ...rest
}) => {
  return (
    <motion.div
      initial={{
        x: direction === "left" ? -100 : 100,
        opacity: 0.5,
        rotate: direction === "left" ? -30 : 30,
      }}
      whileInView={{
        x: 0,
        rotate: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

const SlowInHorizontal: FC<MotionWrapProps> = ({
  direction = "left",
  children,
  ...rest
}) => {
  return (
    <motion.div
      initial={{ x: direction === "left" ? -100 : 100, opacity: 0.5 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

const TextSlowUpWrap: FC<MotionWrapProps> = ({ children, ...rest }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

/**
 * start free trial
 */
const StartButton = () => {
  return (
    <Button
      color="primary"
      startContent={
        <div className="w-5 h-5 flex items-start">
          <Image
            src={CDN_PREFIX_PC + "/m_home_button_528.png"}
            width={19}
            disableSkeleton
            height={16}
            radius="none"
            alt="trial"
          ></Image>
        </div>
        // <ButtonIcon />
      }
      onClick={() => {
        console.log("123");
      }}
    >
      Start Free Trial
    </Button>
  );
};

/**
 * Get Start
 */
const GetStart = () => {
  return (
    <div className="bg-[#fef5f5] p-10 flex flex-col items-center">
      <div className="font-bold text-base">Get started with FastMoss today</div>

      <div className="text-center mt-2  mx-8 text-sm font-normal">
        Sign up now to get 3 days Basic plan for free!
      </div>

      <div className="text-center mt-5">
        <StartButton></StartButton>
      </div>
    </div>
  );
};

interface WrapProps {
  title: string;
  desc: string;
  imgSlot: ReactNode;
  buttonSlot: ReactNode;
}

const CardWrapper: FC<WrapProps> = ({ title, desc, imgSlot, buttonSlot }) => {
  return (
    <div className="bg-[#fafafa] px-4 py-5 rounded-2xl">
      <h3 className="mb-3 text-center">{title}</h3>

      <p className="text-center text-sm mx-4 font-normal text-[#1f283c] mb-8">
        {desc}
      </p>

      {imgSlot}

      <div className="text-center mt-6">{buttonSlot}</div>
    </div>
  );
};

const DoForU = () => {
  // top products
  const topProductRender = () => {
    return (
      <CardWrapper
        title="See Trending Products"
        desc="Find inspiration for your next product. Discover which products are
        going viral on TikTok Shop in any category."
        imgSlot={
          <div className="relative w-[345px] h-[188px] mx-auto">
            <Image
              src={CDN_PREFIX_PC + "/product_bg_main_528.png"}
              width={345}
              height={188}
              alt="Product"
              radius="none"
              loading="lazy"
            ></Image>

            <SlowInWrap className="absolute left-0 -top-[20px] w-[215px] h-[128px]">
              <Image
                removeWrapper
                // className="absolute left-0 -top-[20px] w-[215px] h-[128px]"
                src={CDN_PREFIX_PC + "/product_bg_left_528.png"}
                width={215}
                height={128}
                alt="Product"
                radius="none"
                loading="lazy"
              ></Image>
            </SlowInWrap>

            <SlowInWrap direction="right" className="absolute right-0 bottom-0">
              <Image
                removeWrapper
                src={CDN_PREFIX_PC + "/product_bg_right_528.png"}
                width={108}
                height={51}
                alt="Product"
                radius="none"
              ></Image>
            </SlowInWrap>
          </div>
        }
        buttonSlot={<Button color="primary">See Top Products</Button>}
      />
    );
  };

  // products
  const productRender = () => {
    return (
      <CardWrapper
        title="Research Any Product"
        desc="Explore historical sales data across over 50M products to see which creators and videos drove the most revenue."
        imgSlot={
          <div className="relative max-w-[350px] max-h-[272px] mx-auto pb-7">
            <SlowInHorizontal>
              <Image
                loading="lazy"
                src={CDN_PREFIX_PC + "/product2_bg_top_528.png"}
                width={334}
                height={68}
                alt="Product"
                radius="none"
              ></Image>
            </SlowInHorizontal>

            <SlowInHorizontal direction="right">
              <Image
                className="relative left-4"
                removeWrapper
                src={CDN_PREFIX_PC + "/product2_bg_bottom_528.png"}
                width={321}
                height={166}
                alt="Product"
                radius="none"
                loading="lazy"
              ></Image>
            </SlowInHorizontal>

            <SlowInHorizontal className="absolute left-0 bottom-0">
              <Image
                removeWrapper
                src={CDN_PREFIX_PC + "/product2_bg_bottomleft_528.png"}
                width={173}
                height={51}
                alt="Product"
                radius="none"
                loading="lazy"
              ></Image>
            </SlowInHorizontal>
          </div>
        }
        buttonSlot={<Button color="primary">Search Product</Button>}
      />
    );
  };

  // Top creators
  const creatorRender = () => {
    return (
      <CardWrapper
        title="Explore Creators"
        desc="Find the top performing creators in any category and see how many orders each of their videos have generated."
        imgSlot={
          <div className="relative max-w-[350px] max-h-[272px] mx-auto pb-6">
            <SlowInHorizontal>
              <Image
                src={CDN_PREFIX_PC + "/creator_bg_top_528.png"}
                width={334}
                height={118}
                alt="Creator"
                radius="none"
                loading="lazy"
              ></Image>
            </SlowInHorizontal>

            <SlowInHorizontal className="relative left-7" direction="right">
              <Image
                removeWrapper
                src={CDN_PREFIX_PC + "/creator_bg_bottom_528.png"}
                width={264}
                height={94}
                alt="Creator"
                radius="none"
                loading="lazy"
              ></Image>
            </SlowInHorizontal>

            <SlowInHorizontal className="absolute left-0 bottom-0">
              <Image
                removeWrapper
                src={CDN_PREFIX_PC + "/creator_bg_bl_528.png"}
                width={66}
                height={66}
                alt="Creator"
                radius="none"
                loading="lazy"
              ></Image>
            </SlowInHorizontal>
          </div>
        }
        buttonSlot={<Button color="primary">See Top Creators</Button>}
      />
    );
  };

  const videoRender = () => {
    return (
      <CardWrapper
        title="See which videos sell"
        desc="View and learn from shoppable videos that are driving the most sales on TikTok Shop."
        imgSlot={
          <div className="relative max-w-[350px] max-h-[350px] mx-auto pb-10">
            <SlowInHorizontal>
              <Image
                src={CDN_PREFIX_PC + "/video_bg_top_528.png"}
                width={339}
                height={127}
                removeWrapper
                alt="Video"
                radius="none"
                loading="lazy"
              ></Image>
            </SlowInHorizontal>

            <SlowInHorizontal className="relative left-4" direction="right">
              <Image
                removeWrapper
                src={CDN_PREFIX_PC + "/video_bg_bottom_528.png"}
                width={300}
                height={182}
                alt="Video"
                radius="none"
                loading="lazy"
              ></Image>
            </SlowInHorizontal>

            <SlowInWrap className="absolute left-0 bottom-[60px]">
              <Image
                removeWrapper
                src={CDN_PREFIX_PC + "/video_vg_lc_528.png"}
                width={194}
                height={48}
                alt="Video"
                radius="none"
                loading="lazy"
              ></Image>
            </SlowInWrap>

            <SlowInWrap className="absolute right-0 bottom-0" direction="right">
              <Image
                removeWrapper
                src={CDN_PREFIX_PC + "/video_bg_br_528.png"}
                width={142}
                height={64}
                alt="Video"
                radius="none"
                loading="lazy"
              ></Image>
            </SlowInWrap>
          </div>
        }
        buttonSlot={<Button color="primary">See Top Videos</Button>}
      />
    );
  };

  const shopRender = () => {
    return (
      <CardWrapper
        title="Track Competitors"
        desc="See which products your competitors are selling. Monitor sales, shoppable videos and creator affiliations for any shop on TikTok."
        imgSlot={
          <div className="relative max-w-[350px] max-h-[272px] mx-auto ">
            <SlowInWrap>
              <Image
                src={CDN_PREFIX_PC + "/shop_bg-top_528.png"}
                width={349}
                height={129}
                alt="Shop"
                radius="none"
                loading="lazy"
              ></Image>
            </SlowInWrap>

            <SlowInWrap direction="right">
              <Image
                removeWrapper
                src={CDN_PREFIX_PC + "/shop_bg_bottom_528.png"}
                width={355}
                height={88}
                alt="Shop"
                radius="none"
                loading="lazy"
              ></Image>
            </SlowInWrap>
          </div>
        }
        buttonSlot={<Button color="primary">Search Shops</Button>}
      />
    );
  };

  return (
    <div className="py-10 px-3 bg-white">
      <h3 className="mb-3 text-center">What can FastMoss do for you?</h3>

      <div className="flex flex-col gap-3">
        {topProductRender()}

        {productRender()}

        {creatorRender()}

        {videoRender()}

        {shopRender()}
      </div>
    </div>
  );
};

const DisCord = () => {
  return (
    <div className="relative w-full">
      <Image
        className="w-full"
        width={390}
        height={252}
        src={CDN_PREFIX_PC + "/discord_background_240528.png"}
        alt="Discord"
        radius="none"
      ></Image>
      <div className="z-10 absolute bottom-4 left-0 right-0 text-center">
        <Button color="primary">Join now</Button>
      </div>
    </div>
  );
};

export default function Home() {
  // Swiper
  const renderSwiper = () => {
    return <>Swiper</>;
  };

  const renderHeadView = () => {
    return (
      <div className="py-10 w-full px-4 bg-liner-gradient-home">
        <TextSlowUpWrap>
          <h1 className="text-center font-bold text-[26px] px-8 mb-6 mt-10">
            All the data you need to start and grow your TikTok Shop
          </h1>
        </TextSlowUpWrap>

        <TextSlowUpWrap>
          <p className="font-normal text-sm text-center mb-4">
            See which products, creators and videos are generating the most
            sales in any category with{" "}
            <span className="text-vi font-bold"> 60M+ </span> products sales
            data on FastMoss.
          </p>
        </TextSlowUpWrap>

        {/* SearchBar */}
        <TextSlowUpWrap
          whileTap={{ scale: 0.96 }}
          onClick={() => {
            console.log("open the search page");
          }}
          className="mb-[100px] flex cursor-pointer items-center border-2 border-solid border-vi py-5 pl-4 pr-2 rounded-xl bg-white"
        >
          {/* TODO: */}
          <div className="mr-2">
            <Image
              src={CDN_PREFIX_PC + "/searchIcon_m_home_528.png"}
              width={12}
              height={12}
              alt="search"
              radius="none"
            />
          </div>
          <span className="text-oe text-xs font-medium text-[#99A8BA]">
            Search for any product / creator / shop on TikTok
          </span>
        </TextSlowUpWrap>

        <TextSlowUpWrap className="text-center mb-6">
          <StartButton></StartButton>
        </TextSlowUpWrap>

        <TextSlowUpWrap className="text-base font-bold text-center px-8 mb-5">
          Trusted by over <span className="text-vi"> 30,000 </span> TikTok
          Sellers and Agencies :
        </TextSlowUpWrap>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-40px),transparent_100%)]">
          <ul className="bg-opacity-0 flex items-center [&_li]:mx-[24px] [&_img]:max-w-none animate-infinite-scroll">
            {shopImgs.map((img: string, idx: number) => (
              <li key={idx}>
                <Image
                  // className="mix-blend-multiply"
                  width={104}
                  height={37}
                  src={`${CDN_PREFIX_PC}${img}`}
                  alt={img}
                  radius="none"
                />
              </li>
            ))}
          </ul>
          <ul
            className="flex  items-center [&_li]:mx-[24px] [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            {shopImgs.map((img: string, idx: number) => (
              <li key={idx}>
                <Image
                  // className="mix-blend-multiply"
                  width={104}
                  height={37}
                  src={`${CDN_PREFIX_PC}${img}`}
                  alt={img}
                  radius="none"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header></Header>
      <main>
        {renderHeadView()}

        {/* do for u */}
        <DoForU />

        {/* discord */}
        <DisCord />

        {/* customer swiper */}
        {renderSwiper()}

        {/* get start */}
        <GetStart />
      </main>
      <Footer></Footer>
    </>
  );
}
