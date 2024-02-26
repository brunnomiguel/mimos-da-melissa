import { Fragment, ReactNode } from "react";

import { Header } from "../Header";
import { Footer } from "../Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </Fragment>
  );
}
