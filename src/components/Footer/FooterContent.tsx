import { ReactNode } from "react";

export function FooterContent({ children }: { children: ReactNode }) {
  return (
    <ul className="w-full max-w-1380 mr-auto ml-auto flex flex-wrap items-baseline justify-around gap-4">
      {children}
    </ul>
  );
}
