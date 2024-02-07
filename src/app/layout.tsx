import "./globals.css";

import Layout from "@/components/Layout";

import { Poppins } from "next/font/google";
import { Providers } from "@/contexts";

import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

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
        className={`${poppins.className} w-full min-h-screen bg-bg_main_color text-text_color`}
      >
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
