"use client";

import {
  Input,
  Navbar,
  Button,
  NavbarItem,
  NavbarContent,
  NavbarMenuToggle,
} from "@nextui-org/react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { menuIcons } from "../../utils/icons";
import { NavbarMenu } from "./NavbarMenu";

import logoHeader from "../../../public/images/logos/logo-header.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routes = useRouter();

  return (
    <Navbar
      className="w-full h-24"
      maxWidth="full"
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="rounded-xl border-2 border-solid border-bg_form_color pl-2 pr-2 h-14 cursor-pointer">
        <Button
          className="bg-transparent w-full h-full"
          as={NavbarMenuToggle}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="w-full" justify="center">
        <Image
          className="rounded-2xl w-52 h-14 cursor-pointer"
          src={logoHeader}
          alt="Logo Mimos da Melissa"
          onClick={() => routes.push("/")}
        />

        <Input
          className="drop-shadow-input-default text-default-color placeholder:text-default-color w-full"
          size="sm"
          type="search"
          placeholder="Pesquise algo..."
          startContent={menuIcons.search}
        />

        <NavbarContent className="gap-0">
          <Button
            className="font-semibold text-default-color bg-transparent rounded-tr-none rounded-br-none border-2 border-solid border-price-color hover:bg-price-color hover:text-white"
            as={Link}
            href="/signin"
          >
            Entrar
          </Button>
          <Button
            className="bg-price-color text-white font-semibold rounded-tl-none rounded-bl-none"
            as={Link}
            href="/signup"
          >
            Criar Conta
          </Button>
        </NavbarContent>

        <NavbarItem>
          <Button
            className="w-12 text-center font-semibold text-text_color text-lg hover:opacity-80 bg-transparent whitespace-normal leading-4"
            as={Link}
            href="#"
          >
            Meus Pedidos
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button
            className="bg-transparent text-base font-semibold text-text_color"
            startContent={menuIcons.cart}
          >
            Carrinho{" "}
            <span className="font-bold text-2xl text-price-color">5</span>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu />
    </Navbar>
  );
}
