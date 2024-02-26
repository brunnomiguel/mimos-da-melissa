import { ReactNode } from "react";

export function FooterItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex flex-col items-center md:items-start">{children}</li>
  );
}
