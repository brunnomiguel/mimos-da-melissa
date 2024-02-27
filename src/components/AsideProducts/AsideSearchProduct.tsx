import { ReactNode } from "react";

export function AsideSearchProductContent({
  children,
}: {
  children: ReactNode;
}) {
  return <ul className="flex flex-col gap-2">{children}</ul>;
}

export function AsideSearchProductItem({ children }: { children: ReactNode }) {
  return (
    <li className="list-none w-full p-2 rounded-md shadow-default opacity-80 hover:opacity-100 cursor-pointer">
      {children}
    </li>
  );
}
