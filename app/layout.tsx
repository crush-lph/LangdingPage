import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NextUIProvider } from "@nextui-org/react";
import classNames from "classnames";
import HeadScript from "./HeadScript";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "FastMoss | TikTok Shop Analytics Tool for Viral Product and Creator Research",
  description:
    "See which products, creators and shoppable videos are going viral on TikTok. Used by over 700,000 TikTok Shop sellers to research sales data for any product.",
  keywords:
    "FastMoss, TikTok data analysis, TikTok Shop Analytics, TikTok e-commerce, TikTok product, TikTok creator, TikTok shop, TikTok operation, TikTok analytics Tool, TikTok ads",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        href: "/favicon.svg",
      },
    ],
  },
  viewport:
    "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <HeadScript />
      <body className={classNames(montserrat.className, "light")}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
