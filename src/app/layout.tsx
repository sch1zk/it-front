import type { Metadata } from "next";
import { IBM_Plex_Sans, Roboto, Space_Grotesk } from "next/font/google";
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

const ibm = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-ibm",
  weight: ["100", "200", "300", "400", "500", "600", "700"]
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
      <body className={`bg-[url(/images/index/main-bg.jpg)] ${ibm.variable}`}>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
