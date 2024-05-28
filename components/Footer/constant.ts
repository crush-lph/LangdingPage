export type MenuItem = {
  name: string;
  children?: Array<MenuItem>;
  link?: string;
};

export const navList: Array<MenuItem> = [
  {
    name: "Features",
    children: [
      {
        name: "Top selling products",
      },
      {
        name: "Top growing creators",
      },
      {
        name: "Top selling shops",
      },
      {
        name: "Top performance videos",
      },
    ],
  },
  {
    name: "Resources",
    children: [
      {
        name: "Blog",
      },
      {
        name: "Update log",
      },
    ],
  },
  {
    name: "About us",
    children: [
      {
        name: "The FastMoss Team",
      },
    ],
  },
];

export type Media = {
  img: string;
  href: string;
  name: string;
};

export const socialMedias: Array<Media> = [
  {
    img: "FM_new_home_discord_v1.png",
    href: "https://discord.gg/w6vT2Q8nSa",
    name: "Discord",
  },
  {
    img: "FM_new_home_linkedin_v1.png",
    href: "https://www.linkedin.com/company/fastmosstiktok/mycompany/",
    name: "Linkedin",
  },
  {
    img: "FM_new_home_facebook_v1.png",
    href: "https://www.facebook.com/FastMoss",
    name: "Facebook",
  },
  {
    img: "FM_new_home_tiktok_v1.png",
    href: "https://www.tiktok.com/@fastmoss",
    name: "Tiktok",
  },
  {
    img: "FM_new_home_youtube_v1.png",
    href: "https://www.youtube.com/watch?v=O3fFCGA_toY",
    name: "Youtube",
  },
  {
    img: "FM_new_home_whatsup_v1.png",
    href: "https://api.whatsapp.com/send/?phone=12165836634",
    name: "Whatsapp",
  },
  {
    img: "FM_new_home_twitter_v1.png",
    href: "https://twitter.com/FFastData",
    name: "Twitter",
  },
];
