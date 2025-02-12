import type { Metadata } from "next";
import { Roboto, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-extra",
})

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"]
})

export const metadata: Metadata = {
  title: "IT сфера",
  description: "Молодежный портал услуг",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`bg-[url(/images/index/main-bg.jpg)] ${roboto.variable} ${spaceGrotesk.variable}`}>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
