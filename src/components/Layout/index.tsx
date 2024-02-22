import { Fragment, ReactNode } from "react";

import { Header } from "../Header";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Header />

      <main className="flex-1">{children}</main>

      <footer>Sou o Footer</footer>
    </Fragment>
  );
}
