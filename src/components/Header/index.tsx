"use client";

import Link from "next/link";
import Logo from "../../../public/images/logos/logo.jpg";
import Image from "next/image";
import logoName from "../../../public/images/logos/logo-name.png";

import { useEffect, useState } from "react";

import { IoMenu } from "react-icons/io5";
import { FaCartPlus, FaTimes } from "react-icons/fa";

import Input from "../Input";
import DrawerMenu from "../DrawerMenu";

export default function Header() {
  const [smallView, setSmallView] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 667) {
        setSmallView(true);
      } else {
        setSmallView(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <header className="w-full h-24 pl-4 pr-4 flex items-center justify-between border-b-2 border-b-bb-color absolute top-0 left-0">
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
            <Input />

            <div className="flex cursor-pointer">
              <FaCartPlus size="2rem" color="#451E12" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
