import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NextUIProvider } from "@nextui-org/react";
import classNames from "classnames";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FastMoss",
  description: "FastMoss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(montserrat.className, "light")}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
