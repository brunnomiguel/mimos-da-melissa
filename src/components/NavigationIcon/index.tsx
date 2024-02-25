import { ReactNode } from "react";

interface NavigationIconProps {
  shadow: string;
  bgColor: string;
  direction: string;
  children: ReactNode;
  onClick: () => void;
}

export function NavigationIcon({
  children,
  shadow,
  bgColor,
  direction,
  onClick = () => {},
}: NavigationIconProps) {
  return (
    <div
      className={`flex items-center justify-center cursor-pointer w-10 h-10 md:w-16 md:h-16 absolute top-1/2 opacity-80 hover:opacity-100 rounded-full ${bgColor} ${direction} ${shadow}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
