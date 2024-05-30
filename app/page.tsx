"use client";

import { Footer, Header } from "@/components";
import { CDN_PREFIX_PC } from "@/constants";
import { Button, Chip, Image } from "@nextui-org/react";
import { Children, FC, ReactNode, useEffect, useState } from "react";
import { HTMLMotionProps, motion, MotionConfig, Variants } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const shopImgs: string[] = [
  `/logo1_24529.png`,
  `/logo2_24529.png`,
  `/logo3_24529.png`,
  `/logo4_24529.png`,
  `/logo5_24529.png`,
  `/logo6_24529.png`,
  `/logo7_24529.png`,
];

type ReasonModel = {
  name: string;
  job: string;
  evaluate: string;
  imgName: string;
};

/* eslint-disable react/no-unescaped-entities */
const reasons: ReasonModel[] = [
  {
    name: "Viva Naturals",
    job: "Top Ranking US TikTok Shop",
    evaluate: `I want to contribute and encourage others to use FastMoss. It's a really awesome tool for creators who generated millions of sales for others we can find and samples for those creators as well. FastMoss is a game changer really`,
    imgName: `swiper_3_2_530.png`,
  },
  {
    name: "Jeremy the Fun Hairstylist",
    job: "Top Content Creator in TikTok US",
    evaluate: `If you're a creator, you will love the list of viral products updated every single day on FastMoss, which makes it even easier to get connected with the right sellers.`,
    imgName: `swiper_1_2_530.png`,
  },
  {
    name: "Samantha",
    job: "|UGC|TikTokShopCreator",
    evaluate: `It's like a mentor that understand exactly what i'm looking for as a TikTok shop creators, only does FastMoss guides me to the top selling products, but it also shows me the top affiliates for thoes products. It's kind of like having a backstage pass to success`,
    imgName: `swiper_2_2_530.png`,
  },
];
/* eslint-enable react/no-unescaped-entities */

const ClientsSwiper = () => {
  return (
    <div className="py-8">
      <TextSlowUpWrap>
        <h2 className="mb-5 text-base font-bold text-center">
          Here's why the clients love FastMoss
          {/* eslint-disable-line react/no-unescaped-entities */}
        </h2>
      </TextSlowUpWrap>
      <Swiper
        initialSlide={0}
        navigation={{
          prevEl: ".reasons_prev_el",
          nextEl: ".reasons_next_el",
        }}
        pagination={{
          clickable: true,
          el: ".reasons_pagination",
        }}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        spaceBetween={12}
        modules={[Navigation, Autoplay, Pagination]}
        className="relative overflow-visible w-full"
        autoHeight
      >
        {reasons.map((item: ReasonModel, idx: number) => (
          <SwiperSlide
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
            className="!w-[65%]"
          >
            <div className="flex flex-col items-center my-4 py-4 w-full h-full px-3 rounded-2xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)]">
              <div className="relative md:mr-[33px] max-md:self-center">
                <Image
                  width={88}
                  height={88}
                  src={`${CDN_PREFIX_PC}/${item.imgName}`}
                  alt={item.imgName}
                />
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-center text-sm  font-bold">{item.name}</h3>
                <Chip
                  classNames={{
                    base: "bg-[#99a8ba] mx-auto my-2",
                    content: "text-white font-semibold text-xs",
                  }}
                >
                  {item.job}
                </Chip>
                <p className="font-normal text-sm text-center">
                  {item.evaluate}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* 分页器 */}

        {/* 切换按键 */}
        <div className="flex justify-center items-center gap-3 mt-5 ">
          <div className="relative z-20 cursor-pointer  flex items-center justify-center reasons_prev_el">
            <Image
              src={CDN_PREFIX_PC + "/swiper_prev_icon_530.png"}
              alt="next"
              width={28}
              height={13}
            />
          </div>
          <div className="relative z-20 cursor-pointer  flex items-center justify-center reasons_next_el">
            <Image
              src={CDN_PREFIX_PC + "/swiper_next_icon_530.png"}
              alt="next"
              width={28}
              height={13}
            />
          </div>
        </div>
      </Swiper>
    </div>
  );
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
      initial={{ y: 20, opacity: 0, scale: 0.9 }}
      whileInView={{
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      // viewport={{ once: true }}
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
    <div className="relative bg-[#fef5f5] p-10 flex flex-col items-center">
      <TextSlowUpWrap className="font-bold text-base">
        <h3>Get started with FastMoss today</h3>
      </TextSlowUpWrap>

      <TextSlowUpWrap className="text-center mt-2  mx-8 text-sm font-normal">
        Sign up now to get 3 days Basic plan for free!
      </TextSlowUpWrap>

      <TextSlowUpWrap
        initial={{ y: 20, opacity: 0, scale: 0.9 }}
        whileInView={{
          y: 0,
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        className="text-center mt-5"
      >
        <StartButton></StartButton>
      </TextSlowUpWrap>
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
      <TextSlowUpWrap>
        <h2 className="mb-3 text-center font-bold text-base">{title}</h2>
      </TextSlowUpWrap>

      <TextSlowUpWrap>
        <p className="text-center text-sm mx-4 font-normal text-[#1f283c] mb-8">
          {desc}
        </p>
      </TextSlowUpWrap>

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
          <div className="relative max-w-[350px]  max-h-[272px] mx-auto ">
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

            <SlowInWrap direction="right" className="relative -left-3">
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
    <div className="relative w-full mx-auto">
      <div className="w-[390px] h-[252px] mx-auto">
        <Image
          className="w-full"
          width={390}
          height={252}
          src={CDN_PREFIX_PC + "/discord_background_240528.png"}
          alt="Discord"
          radius="none"
        ></Image>
        <div className="z-10 absolute bottom-4 left-0 right-0 text-center">
          <Button
            startContent={
              <div className="w-5 h-5 flex items-start">
                <Image
                  src={CDN_PREFIX_PC + "/discord_icon_530.png"}
                  width={30}
                  disableSkeleton
                  height={30}
                  radius="none"
                  alt="trial"
                ></Image>
              </div>
            }
            color="primary"
          >
            Join now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const renderHeadView = () => {
    return (
      <div className="py-10 w-full px-4 bg-liner-gradient-home">
        <h1 className="text-center font-bold text-[26px] px-8 mb-6 mt-10">
          All the data you need to start and grow your TikTok Shop
        </h1>

        <p className="font-normal text-sm text-center mb-4">
          See which products, creators and videos are generating the most sales
          in any category with <span className="text-vi font-bold"> 60M+ </span>{" "}
          products sales data on FastMoss.
        </p>

        {/* SearchBar */}
        <motion.div
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
        </motion.div>

        <div className="text-center mb-6">
          <StartButton></StartButton>
        </div>

        <h2 className="text-base font-bold text-center px-8 mb-5">
          Trusted by over <span className="text-vi"> 30,000 </span> TikTok
          Sellers and Agencies :
        </h2>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-40px),transparent_100%)]">
          <ul className="bg-opacity-0 flex items-center [&_li]:mx-[12px] [&_img]:max-w-none animate-infinite-scroll">
            {shopImgs.map((img: string, idx: number) => (
              <li key={idx}>
                <Image
                  // className="mix-blend-multiply"
                  width={72}
                  height={24}
                  src={`${CDN_PREFIX_PC}${img}`}
                  alt={img}
                  radius="none"
                />
              </li>
            ))}
          </ul>
          <ul
            className="flex  items-center [&_li]:mx-[12px] [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            {shopImgs.map((img: string, idx: number) => (
              <li key={idx}>
                <Image
                  // className="mix-blend-multiply"
                  width={72}
                  height={24}
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
      <main className={`mx-auto w-full `}>
        {renderHeadView()}

        {/* do for u */}
        <DoForU />

        {/* discord */}
        <DisCord />

        {/* clients swiper */}
        <ClientsSwiper></ClientsSwiper>

        {/* get start */}
        <GetStart />
      </main>
      <Footer></Footer>
    </>
  );
}
