import { Dispatch, SetStateAction } from "react";

import {
  AsideSearchProductContent,
  AsideSearchProductItem,
} from "./AsideSearchProduct";

import { FaTimes } from "react-icons/fa";

import Image from "next/image";
import logo from "../../../public/logo-header.png";

type ModalAsideProps = {
  setOpenAside: Dispatch<SetStateAction<boolean>>;
};

export function AsideModal({ setOpenAside }: ModalAsideProps) {
  return (
    <div className="w-full h-full bg-white fixed top-0 left-0 z-10">
      <div className="w-full h-20 p-4 border-b-2 border-b-text-900 flex items-center justify-between">
        <div className="w-32 h-16 cursor-pointer">
          <Image
            className="w-full h-full rounded-xl"
            src={logo}
            alt="Logo Mimos da Melissa"
          />
        </div>
        <div
          className="cursor-pointer opacity-80 hover:opacity-100"
          onClick={() => setOpenAside(false)}
        >
          <FaTimes size="1.5rem" />
        </div>
      </div>
      <div className="mt-4 px-4">
        <h4 className="font-semibold text-lg mb-4">Pesquisar por categoria</h4>

        <AsideSearchProductContent>
          <AsideSearchProductItem>Laços com aplique</AsideSearchProductItem>
          <AsideSearchProductItem>Laços básicos</AsideSearchProductItem>
          <AsideSearchProductItem>Tiaras com aplique</AsideSearchProductItem>
          <AsideSearchProductItem>Tiaras simples</AsideSearchProductItem>
          <AsideSearchProductItem>Aramados</AsideSearchProductItem>
          <AsideSearchProductItem>Para Batizados</AsideSearchProductItem>
        </AsideSearchProductContent>

        <h4 className="font-semibold text-lg mt-4 mb-4">Ordenar</h4>

        <AsideSearchProductContent>
          <AsideSearchProductItem>Menor Preço</AsideSearchProductItem>
          <AsideSearchProductItem>Maior Preço</AsideSearchProductItem>
          <AsideSearchProductItem>A a Z</AsideSearchProductItem>
        </AsideSearchProductContent>
      </div>
    </div>
  );
}
