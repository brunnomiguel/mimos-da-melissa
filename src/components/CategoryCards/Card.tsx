import Image from "next/image";

import example from "../../../public/image-exemple.png";

import { ReactNode } from "react";

function CardContainer({ children }: { children: ReactNode }) {
  return (
    <li className="w-24 md:w-full p-2 bg-white shadow-default rounded-md">
      {children}
    </li>
  );
}

function CardImage({ src, alt }: { src?: string; alt?: string }) {
  return (
    <div className="w-full">
      <Image className="w-full h-full" src={example} alt="Imagem de exemplo" />
    </div>
  );
}

function CardText({ text }: { text: string }) {
  return (
    <h3 className="w-20 md:w-full mt-1 text-center font-semibold text-xs md:text-base">
      {text}
    </h3>
  );
}

export const Card = {
  Container: CardContainer,
  Image: CardImage,
  Text: CardText,
};
