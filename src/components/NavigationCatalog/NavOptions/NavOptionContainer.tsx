import { ReactNode } from "react";

export function NavOptionContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-90 h-26 pl-4 pr-4 flex flex-col gap-2 justify-center bg-white shadow-default rounded-xl">
      {children}
    </div>
  );
}
