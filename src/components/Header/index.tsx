import { colors } from "@/styles/colors";
import { IoMdMenu } from "react-icons/io";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

import logo from "../../../public/logo-header.png";
import Image from "next/image";

import { Input } from "../Input";

import { Fragment } from "react";

export function Header() {
  return (
    <Fragment>
      <header className="w-full h-26 pl-6 pr-6 gap-4 bg-pink-900 flex items-center justify-between mb-14 md:mb-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 cursor-pointer hover:opacity-75">
            <IoMdMenu size="2.5rem" fill={colors.white} />
          </div>
          <div className="w-40 h-20 cursor-pointer hidden md:flex">
            <Image
              className="w-full h-full rounded-xl"
              src={logo}
              alt="Logo Mimos da Melissa"
            />
          </div>
        </div>

        <div className="flex w-40 h-20 -mb-16 md:hidden">
          <Image
            className="w-full h-full rounded-xl"
            src={logo}
            alt="Logo Mimos da Melissa"
          />
        </div>

        <div className="hidden md:flex">
          <Input>
            <Input.Select name="filter-mimo" id="filter-mimo">
              <option value="todos">Todos</option>
              <option value="lacos-basicos">Básicos</option>
              <option value="faixas-rn">Faixinhas RN</option>
              <option value="tiaras">Tiaras</option>
              <option value="apliques">Laço com Aplique</option>
              <option value="aramados">Aramados</option>
            </Input.Select>
            <Input.Field placeholder="Pesquisar mimo..." />
            <div className="w-8 h-8 cursor-pointer flex items-center justify-center bg-white">
              <FaSearch size="1.75rem" />
            </div>
          </Input>
        </div>

        <div className="w-10 h-10 cursor-pointer relative hover:opacity-75">
          <span className="w-6 h-6 -top-3 -right-2 bg-white rounded-full absolute flex items-center justify-center font-semibold">
            5
          </span>
          <FaShoppingCart size="2.5rem" fill={colors.white} />
        </div>
      </header>

      <div className="pl-4 pr-4 mb-8 flex md:hidden">
        <Input>
          <Input.Select name="filter-mimo" id="filter-mimo">
            <option value="todos">Todos</option>
            <option value="lacos-basicos">Básicos</option>
            <option value="faixas-rn">Faixinhas RN</option>
            <option value="tiaras">Tiaras</option>
            <option value="apliques">Laço com Aplique</option>
            <option value="aramados">Aramados</option>
          </Input.Select>
          <Input.Field placeholder="Pesquisar mimo..." />
          <div className="w-8 h-8 cursor-pointer flex items-center justify-center bg-white">
            <FaSearch size="1.75rem" />
          </div>
        </Input>
      </div>
    </Fragment>
  );
}
