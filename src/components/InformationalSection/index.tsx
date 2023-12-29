import InfoCard from "./InfoCard";

import { BiSolidTruck } from "react-icons/bi";
import { BsCreditCardFill } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function InformationalSection() {
  return (
    <section className="w-full max-w-screen-2xl ml-auto mr-auto mt-6 mb-6 p-4 gap-10 flex justify-center flex-wrap">
      <InfoCard
        icon={BsCreditCardFill}
        title="Parcele as suas compras"
        subtitle="Em até 03x sem juros"
      />

      <InfoCard
        icon={BiSolidTruck}
        title="Enviamos as suas compras"
        subtitle="Para todo o Brasil e exterior"
      />

      <InfoCard
        icon={AiOutlineWhatsApp}
        title="Dúvidas?"
        subtitle="Entre em contato!"
      />
    </section>
  );
}
