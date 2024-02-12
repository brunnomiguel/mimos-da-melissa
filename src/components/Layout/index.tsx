import { Header } from "../Header";
import { ReactNode } from "react";

import Footer from "../Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">{children}</main>

      <hr className="w-full h-1 bg-bb-color" />

      <Footer />
    </div>
  );
}
