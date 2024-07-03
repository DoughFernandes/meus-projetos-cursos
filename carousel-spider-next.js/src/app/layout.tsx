import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Home from "./page";
import Header from "@/components/Header";

import "@/styles/global.scss"

// -----------------------------------

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spider-Universe",
  description: "Um carrosel para apresentar alguns personagens do vasto universo de spider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
