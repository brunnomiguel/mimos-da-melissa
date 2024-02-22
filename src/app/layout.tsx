import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/Layout";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Mimos da Melissa",
  description: "E-commerce de Laços Personalizados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-white w-full text-text-900`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
