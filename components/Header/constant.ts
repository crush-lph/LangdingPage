export interface TMenuItem {
  name?: string;
  path?: string;
  children?: Array<TMenuItem>;
}

export const headerMenuList: Array<TMenuItem> = [
  {
    name: "Product",
    path: "/",
    children: [
      {
        name: "product Search",
        path: "/",
      },
      {
        name: "Most promoted",
        path: "/",
      },
      {
        name: "Product Rank",
        path: "/",
      },
    ],
  },
  {
    name: "Creators",
    path: "/",
    children: [
      {
        name: "creator search",
        path: "/",
      },
      {
        name: "powder Rank",
        path: "/",
      },
      {
        name: "Ecommerce Rank",
        path: "/",
      },
      {
        name: "Verified Rank",
        path: "/",
      },
      {
        name: "Hot Rank",
        path: "/",
      },
    ],
  },
  {
    name: "Shops",
    path: "/",
    children: [
      {
        name: "shop search",
        path: "/",
      },
      {
        name: "shop Rank",
        path: "/",
      },
    ],
  },
  {
    name: "Videos",
    path: "/",
    children: [
      {
        name: "video search",
        path: "/",
      },
      {
        name: "popular video",
        path: "/",
      },
    ],
  },
  {
    name: "About us",
    path: "/",
    children: [
      {
        name: "products",
        path: "/",
      },
      {
        name: "products",
        path: "/",
      },
    ],
  },
  {
    name: "Resources",
    path: "/",
    children: [
      {
        name: "Blog",
        path: "/",
      },
      {
        name: "Update log",
        path: "/",
      },
    ],
  },
];
