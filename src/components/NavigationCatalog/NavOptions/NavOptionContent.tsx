import { ReactNode } from "react";

export function NavOptionContent({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-3">{children}</div>;
}
