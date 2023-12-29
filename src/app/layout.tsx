import Layout from "@/components/Layout";
import "./globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mimos da Melissa",
  description: "E-commerce de laços personalizados",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} w-full min-h-screen bg-bg_main_color text-text_color`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
