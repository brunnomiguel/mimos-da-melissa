import { ReactNode } from "react";

export function ProductContainer({ children }: { children: ReactNode }) {
  return (
    <li className="w-full max-w-60 p-2 bg-white shadow-default flex flex-col gap-2 rounded-lg">
      {children}
    </li>
  );
}
