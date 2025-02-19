import type { Metadata } from "next";
import { Dela_Gothic_One, IBM_Plex_Sans } from "next/font/google";
import "@/styles/globals.css";
import IndexHeader from "@/components/IndexHeader";
import IndexFooter from "@/components/IndexFooter";
import useAuth from "@/hooks/useAuth";

const ibm = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
})

const dela = Dela_Gothic_One({
  subsets: ["latin", "cyrillic"],
  variable: "--font-dela",
  weight: "400"
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
  // const isAuthenticated = useAuth();

  return (
    <html lang="ru">
      {/* <body className={`bg-[url(/images/index/main-bg.jpg)] ${ibm.className} ${dela.variable}`}> */}
      <body className={`noise-overlay ${ibm.className} ${dela.variable}`}>
        {/* <Header/>
        <main>{children}</main>
        <Footer/> */}
        {children}
      </body>
    </html>
  );
}
