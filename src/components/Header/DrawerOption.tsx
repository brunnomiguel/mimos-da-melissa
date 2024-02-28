import Link from "next/link";

import { ReactNode } from "react";

import { colors } from "@/styles/colors";

import { IconType } from "react-icons";

function DrawerOptionContainer({
  href,
  onClick = () => {},
  children,
}: {
  href: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <Link
      className="w-full flex items-center gap-2 shadow-shadow_white p-2 rounded-md opacity-80 hover:opacity-100 cursor-pointer"
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

function DrawerOptionIcon({ icon: Icon }: { icon: IconType }) {
  return (
    <div>
      <Icon size="1.5rem" color={colors.white} />
    </div>
  );
}

function DrawerOptionTitle({ children }: { children: ReactNode }) {
  return <p className="text-white font-medium text-lg">{children}</p>;
}

export const DrawerOption = {
  Container: DrawerOptionContainer,
  Icon: DrawerOptionIcon,
  Title: DrawerOptionTitle,
};
