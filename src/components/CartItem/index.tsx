import Image from "next/image";
import { ReactNode } from "react";

import imagem from "../../../public/image-exemple.png";

import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

import { colors } from "@/styles/colors";

import { currencyFormat } from "@/utils/currencyFormat";

export function CartItemContainer({ children }: { children: ReactNode }) {
  return (
    <li className="w-full max-w-96 flex items-center gap-3 p-2 bg-white shadow-default rounded-md mx-auto">
      {children}
    </li>
  );
}

export function CartItemImage({ src, alt }: { src?: string; alt?: string }) {
  return (
    <div className="w-3/12">
      <Image className="w-full h-full" src={imagem} alt="Imagem de exemplo" />
    </div>
  );
}

export function CartItemContent({ children }: { children: ReactNode }) {
  return (
    <div className="w-3/4 flex flex-col justify-center gap-1">{children}</div>
  );
}

export function CartItemContentTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <h4 className="text-lg md:text-xl font-semibold">{title}</h4>

      <div className="hover:opacity-80 cursor-pointer">
        <FaTrash size="1.25rem" fill={colors.pink[900]} />
      </div>
    </div>
  );
}

export function CartItemContentSize({ size }: { size?: string }) {
  return (
    <p className="text-lg">
      Tam: <span>M</span>
    </p>
  );
}

export function CartItemContentStock({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-2">{children}</div>
  );
}

export function CartItemContentStockPrice({ price }: { price: number }) {
  return (
    <p className="text-2xl font-semibold">{currencyFormat(String(price))}</p>
  );
}

export function CartItemContentStockQuantity() {
  return (
    <div className="flex items-center justify-between gap-2 bg-white shadow-default rounded-md px-2 py-1">
      <div className="cursor-pointer bg-pink-900 rounded-md p-1 hover:opacity-80">
        <FaMinus fill={colors.white} />
      </div>
      <span className="text-lg font-semibold">1</span>
      <div className="cursor-pointer bg-pink-900 rounded-md p-1 hover:opacity-80">
        <FaPlus fill={colors.white} />
      </div>
    </div>
  );
}

export const CartItem = {
  Container: CartItemContainer,
  ImageItem: CartItemImage,
  Content: {
    Container: CartItemContent,
    Title: CartItemContentTitle,
    Size: CartItemContentSize,
    Stock: {
      Container: CartItemContentStock,
      Price: CartItemContentStockPrice,
      Quantity: CartItemContentStockQuantity,
    },
  },
};
