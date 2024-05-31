"use client";
import { CDN_PREFIX_PC } from "@/constants";
import { jump } from "@/utils/jump";
import { Input, Image } from "@nextui-org/react";
import { log } from "console";
import React, {
  FC,
  LegacyRef,
  ReactNode,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ItemProps {
  label: ReactNode;
  name: ReactNode;
  onClick?: () => void;
}
const CardItem: FC<ItemProps> = (props) => {
  const { label, name, onClick } = props;

  return (
    <div
      className="flex flex-col rounded-xl p-3 bg-white "
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      <div className="font-bold text-base text-center text-[#1f283c]">
        {name}
      </div>
      <div className="font-semibold text-xs text-center text-[#1f283c]">
        {label}
      </div>
    </div>
  );
};

const trendingList = [
  { label: "Product", name: "Health", path: "/" },
  { label: "Halara", name: "Creator", path: "/" },
  { label: "Milamiamor", name: "Shop", path: "/" },
  { label: "#fyp", name: "Video", path: "/" },
];

const list = {
  hidden: {
    height: 0,
    opacity: 0,
    transformOrigin: "top",
  },
  show: {
    opacity: 1,
    height: `calc(100vh - var(--navbar-height) - 1px)`,
    transformOrigin: "top",
  },
};

interface SearchProps {
  open: boolean;
  onClose?: () => void;
}

const SearchPanel: FC<SearchProps> = (props) => {
  const { open, onClose } = props;
  const [searchValue, setSearchValue] = useState<string>("");
  const ref = createRef<HTMLDivElement>();
  const [unMount, setUnmount] = useState<boolean>(false);

  const handleItemClick = (path: string) => {
    jump(path);
  };

  const close = () => {
    onClose?.();
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close();
      }
    };
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  console.log(unMount);

  if (unMount) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{
          height: 0,
          // opacity: 0,
          transformOrigin: "top",
        }}
        variants={list}
        exit="hidden"
        onAnimationComplete={(type) => {
          if (type === "hidden" && open) {
            setUnmount(true);
          }
        }}
        animate={open ? "show" : "hidden"}
        style={{
          // @ts-ignore
          "--navbar-height": "4rem",
          height: `calc(100vh - var(--navbar-height) - 1px)`,
        }}
        onClick={(e) => {
          // setOpen(false);
          close();
        }}
        className="px-3 flex flex-col fixed z-20 max-w-full top-[var(--navbar-height)] inset-x-0 bottom-0 w-screen overflow-y-auto backdrop-blur-md"
      >
        <Input
          className="mt-5"
          fullWidth
          autoFocus
          value={searchValue}
          onSubmit={(e) => {
            console.log("submit");
          }}
          onValueChange={setSearchValue}
          startContent={
            <Image
              src={CDN_PREFIX_PC + "/searchIcon_m_home_528.png"}
              width={12}
              height={12}
              alt="search"
              radius="none"
            />
          }
          classNames={{
            base: "",
            inputWrapper: "!bg-white border border-solid border-vi",
            input: "text-gray font-normal text-xs",
          }}
          placeholder="Search for any product / creator / shop on TikTok"
        ></Input>

        <div className="py-4">🔥Trending</div>

        <div className="grid gap-[10px] grid-cols-2">
          {trendingList?.map((item) => {
            return (
              <CardItem
                key={item.label}
                label={item.label}
                name={item.name}
                onClick={() => {
                  // jump(item.path);
                }}
              ></CardItem>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchPanel;
