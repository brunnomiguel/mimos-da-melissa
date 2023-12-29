import Input from "../Input";
import CardMenu from "./CardMenu";

import { FaBagShopping } from "react-icons/fa6";
import { FaCartPlus, FaExclamation, FaSignOutAlt } from "react-icons/fa";

export default function DrawerMenu() {
  return (
    <div
      className={`fixed top-24 w-full p-5 inset-0 bg-bg_main_color transition-opacity flex flex-col justify-between`}
    >
      <div className="flex flex-col w-full gap-4">
        <Input />

        <CardMenu icon={FaCartPlus} text="Seu Carrinho" />
        <CardMenu icon={FaBagShopping} text="Produtos Disponíveis" />
        <CardMenu icon={FaExclamation} text="Sobre nós" />
      </div>

      <CardMenu icon={FaSignOutAlt} text="Sair" />
    </div>
  );
}
