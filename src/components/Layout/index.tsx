import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <hr className="w-full h-4 mt-20 border-b-2 border-b-bb-color" />

      <main className="flex-1">{children}</main>

      <hr className="w-full h-4 border-b-2 border-b-bb-color" />

      <Footer />
    </div>
  );
}
