"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, NavbarMenu as Menu, NavbarMenuItem } from "@nextui-org/react";

import { MenuItemsType, menuItems } from "./headerMenuItems";

export function NavbarMenu() {
  const routes = useRouter();

  return (
    <Menu className="w-96 pt-8 top-24 gap-4">
      {menuItems.map((item: MenuItemsType) => {
        return (
          <NavbarMenuItem
            className="pb-2 flex items-center justify-center border-b-1 border-solid border-price-color hover:border-b-2"
            key={item.textLink}
            onClick={() => routes.push(item.pathname)}
          >
            <Button
              className="w-8 h-8 bg-transparent"
              startContent={item.icon}
            />
            <Link className="w-full font-semibold" href="#">
              {item.textLink}
            </Link>
          </NavbarMenuItem>
        );
      })}
    </Menu>
  );
}
