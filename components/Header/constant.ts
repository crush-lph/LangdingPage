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
        name: "Product Search",
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
        name: "Creator Search",
        path: "/",
      },
      {
        name: "Powder Rank",
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
        name: "Shop Search",
        path: "/",
      },
      {
        name: "Shop Rank",
        path: "/",
      },
    ],
  },
  {
    name: "Videos",
    path: "/",
    children: [
      {
        name: "Video Search",
        path: "/",
      },
      {
        name: "Popular Video",
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
