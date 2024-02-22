"use client";

import { colors } from "@/styles/colors";
import { IoMdMenu } from "react-icons/io";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

import logo from "../../../public/logo-header.png";
import Image from "next/image";

import { Input } from "../Input";

import { Fragment, useEffect, useState } from "react";

export function Header() {
  const [smallView, setSmallView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSmallView(true);
      } else {
        setSmallView(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <Fragment>
      <header
        className={`w-full h-26 pl-6 pr-6 gap-4 bg-pink-900 flex items-center justify-between ${
          smallView && "mb-8"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 cursor-pointer hover:opacity-75">
            <IoMdMenu size="2.5rem" fill={colors.white} />
          </div>
          {!smallView ? (
            <div className="w-40 h-20 cursor-pointer">
              <Image
                className="w-full h-full rounded-xl"
                src={logo}
                alt="Logo Mimos da Melissa"
              />
            </div>
          ) : null}
        </div>

        {smallView ? (
          <div className="w-40 h-20 -mb-16 cursor-pointer">
            <Image
              className="w-full h-full rounded-xl"
              src={logo}
              alt="Logo Mimos da Melissa"
            />
          </div>
        ) : null}

        {!smallView ? (
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
        ) : null}

        <div className="w-10 h-10 cursor-pointer relative hover:opacity-75">
          <span className="w-6 h-6 -top-3 -right-2 bg-white rounded-full absolute flex items-center justify-center font-semibold">
            5
          </span>
          <FaShoppingCart size="2.5rem" fill={colors.white} />
        </div>
      </header>

      {smallView ? (
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
      ) : null}
    </Fragment>
  );
}
