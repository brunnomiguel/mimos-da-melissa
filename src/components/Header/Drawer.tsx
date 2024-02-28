"use client";

import { colors } from "@/styles/colors";
import { useState } from "react";

import {
  FaHome,
  FaInfo,
  FaTimes,
  FaHeart,
  FaShoppingCart,
  FaShoppingBasket,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { GrCatalog } from "react-icons/gr";

import { DrawerOption } from "./DrawerOption";

export function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="w-10 h-10 cursor-pointer hover:opacity-75"
        onClick={toggleDrawer}
      >
        {isOpen ? (
          <FaTimes size="2rem" fill={colors.white} />
        ) : (
          <IoMdMenu size="2.5rem" fill={colors.white} />
        )}
      </div>

      {isOpen ? (
        <div className="w-full max-w-90 p-6 h-full fixed z-50 left-0 top-0 md:top-[100px] bg-pink-900 flex flex-col gap-2">
          <div className="flex items-center justify-between md:hidden">
            <div
              className="w-10 h-10 cursor-pointer hover:opacity-75"
              onClick={toggleDrawer}
            >
              <FaTimes size="2rem" fill={colors.white} />
            </div>

            <h4 className="text-white font-semibold text-lg">
              Mimos da Melissa
            </h4>
          </div>

          <DrawerOption.Container href="/" onClick={toggleDrawer}>
            <DrawerOption.Icon icon={FaHome} />
            <DrawerOption.Title>Inicio</DrawerOption.Title>
          </DrawerOption.Container>

          <DrawerOption.Container href="/produtos" onClick={toggleDrawer}>
            <DrawerOption.Icon icon={GrCatalog} />
            <DrawerOption.Title>Catálogo</DrawerOption.Title>
          </DrawerOption.Container>

          <DrawerOption.Container href="/sobre" onClick={toggleDrawer}>
            <DrawerOption.Icon icon={FaInfo} />
            <DrawerOption.Title>Sobre nós</DrawerOption.Title>
          </DrawerOption.Container>

          <DrawerOption.Container href="/pedidos" onClick={toggleDrawer}>
            <DrawerOption.Icon icon={FaShoppingBasket} />
            <DrawerOption.Title>Pedidos</DrawerOption.Title>
          </DrawerOption.Container>

          <DrawerOption.Container href="carrinho" onClick={toggleDrawer}>
            <DrawerOption.Icon icon={FaShoppingCart} />
            <DrawerOption.Title>Carrinho</DrawerOption.Title>
          </DrawerOption.Container>

          <DrawerOption.Container href="favoritos" onClick={toggleDrawer}>
            <DrawerOption.Icon icon={FaHeart} />
            <DrawerOption.Title>Favoritos</DrawerOption.Title>
          </DrawerOption.Container>

          <DrawerOption.Container href="configuracoes" onClick={toggleDrawer}>
            <DrawerOption.Icon icon={FaGear} />
            <DrawerOption.Title>Configurações</DrawerOption.Title>
          </DrawerOption.Container>

          <DrawerOption.Container href="/login" onClick={toggleDrawer}>
            <DrawerOption.Icon icon={FiLogIn} />
            <DrawerOption.Title>Faça Login</DrawerOption.Title>
          </DrawerOption.Container>
        </div>
      ) : null}
    </div>
  );
}
