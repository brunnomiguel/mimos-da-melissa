import { menuIcons } from "@/utils/icons";
import { ReactNode } from "react";

export interface MenuItemsType {
  icon: ReactNode;
  pathname: string;
  textLink: string;
}

export const menuItems: MenuItemsType[] = [
  {
    pathname: "/",
    icon: menuIcons.dashboard,
    textLink: "Página Inicial",
  },
  {
    pathname: "/shop/products",
    icon: menuIcons.shop,
    textLink: "Ver todos os produtos",
  },
  {
    pathname: "/about",
    icon: menuIcons.about,
    textLink: "Sobre nós",
  },
  {
    pathname: "/requests",
    icon: menuIcons.request,
    textLink: "Meus Pedidos",
  },
  {
    pathname: "/cart",
    icon: menuIcons.cart,
    textLink: "Carrinho",
  },
  {
    pathname: "/signin",
    icon: menuIcons.signIn,
    textLink: "Faça Login",
  },
];
