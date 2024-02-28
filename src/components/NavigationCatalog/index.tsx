import { colors } from "@/styles/colors";

import {
  FaTruck,
  FaWhatsapp,
  FaCreditCard,
  FaArrowRight,
} from "react-icons/fa";

import { NavOption } from "./NavOptions";
import Link from "next/link";

export function NavigationCatalog() {
  return (
    <section className="w-full banner shadow-blur px-4 py-10 mt-8">
      <div className="w-full h-full max-w-1380 mr-auto ml-auto mb-8 flex flex-wrap items-center justify-center gap-3 md:flex-row md:justify-around">
        <NavOption.Container>
          <NavOption.Content>
            <NavOption.Icon icon={FaCreditCard} />
            <NavOption.Title title="PARCELE SUAS COMPRAS" />
          </NavOption.Content>
          <NavOption.Text text="Em até 3x sem juros, para compras acima de R$ 200,00" />
        </NavOption.Container>

        <NavOption.Container>
          <NavOption.Content>
            <NavOption.Icon icon={FaTruck} />
            <NavOption.Title title="ENVIAMOS SUAS COMPRAS" />
          </NavOption.Content>
          <NavOption.Text text="Para todo o Brasil e Exterior" />
        </NavOption.Container>

        <NavOption.Container>
          <NavOption.Content>
            <NavOption.Icon icon={FaWhatsapp} />
            <NavOption.Title title="DÚVIDAS?" />
          </NavOption.Content>
          <NavOption.Text text="Fale conosco!" />
        </NavOption.Container>
      </div>

      <div className="w-full h-full max-w-1380 mr-auto ml-auto flex flex-col items-center justify-center gap-8">
        <h2 className="text-white font-semibold text-4xl text-center">
          Conheça o nosso catálogo
        </h2>

        <Link
          className="w-60 h-14 flex items-center justify-center gap-3 bg-white font-semibold text-xl rounded-lg shadow-default cursor-pointer hover:opacity-75"
          href="/produtos"
        >
          VER TUDO <FaArrowRight color={colors.text[900]} size="1.5rem" />
        </Link>
      </div>
    </section>
  );
}
