"use client";

import Link from "next/link";
import Logo from "../../../public/images/logos/logo.jpg";
import Image from "next/image";
import logoName from "../../../public/images/logos/logo-name.png";
import DrawerMenu from "../DrawerMenu";

import { Input } from "../Input";
import { useHeader } from "./useHeader";

import { IoMenu } from "react-icons/io5";
import { FaCartPlus, FaSearch, FaTimes } from "react-icons/fa";

export default function Header() {
  const { smallView, drawerOpen, toggleDrawer } = useHeader();

  return (
    <header className="w-full h-24 pl-4 pr-4 flex items-center justify-between absolute top-0 left-0">
      {smallView ? (
        <div className="w-full flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center">
              <Image
                className="rounded-full"
                src={Logo}
                width={75}
                height={75}
                alt="Logo Mimos da Melissa"
              />
              <Image src={logoName} alt="Mimos da Melissa" width={150} />
            </div>
          </Link>
          <div>
            {drawerOpen ? (
              <FaTimes size="2rem" color="#fff" onClick={toggleDrawer} />
            ) : (
              <IoMenu size="2rem" color="#fff" onClick={toggleDrawer} />
            )}
          </div>

          {drawerOpen ? <DrawerMenu /> : null}
        </div>
      ) : (
        <div className="w-full ml-auto mr-auto max-w-screen-2xl flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center">
              <Image
                className="rounded-full"
                src={Logo}
                width={75}
                height={75}
                alt="Logo Mimos da Melissa"
              />
              <Image src={logoName} alt="Mimos da Melissa" width={180} />
            </div>
          </Link>
          <nav className="flex gap-6 items-center">
            <li className="list-none text-xl font-semibold hover:font-extrabold">
              <Link href="/shop/products">Nossos Produtos</Link>
            </li>
            <li className="list-none text-xl font-semibold hover:font-extrabold">
              <Link href="/">Sobre nós</Link>
            </li>
          </nav>
          <div className="flex items-center gap-3">
            <Input
              type="text"
              icon={FaSearch}
              placeholder="Encontrar algum produto"
            />

            <div className="flex cursor-pointer">
              <FaCartPlus size="2rem" color="#451E12" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
