import "@/styles/globals.css";
import { Metadata } from "next";

import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Footer from "@/components/footer";
import ButtonSelector from "@/components/buttons-selector";


export const metadata: Metadata = {
  title: "codeCampus",
  description: "Project done during the bootcamp, rewrite with NextJS and NextUI",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {/* <div className="relative flex flex-col h-screen"> */}
            <Navbar />
            <ButtonSelector />
            <main className=" mx-auto max-w-7xl pt-16 px-6">
              {children}
            </main>
            <Footer />
          {/* </div> */}
        </Providers>
      </body>
    </html>
  );
}
