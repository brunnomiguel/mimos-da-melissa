import Image from "next/image";
import example from "../../../public/image-exemple.png";

interface CardProps {
  text: string;
}

export function Card({ text }: CardProps) {
  return (
    <li className="w-28 md:w-52 p-2 md:p-3 bg-white shadow-default rounded-xl">
      <div className="w-full">
        <Image
          className="w-full h-full"
          src={example}
          alt="Imagem de exemplo"
        />
      </div>
      <h3 className="w-24 md:w-full mt-1 text-center font-semibold text-sm md:text-lg">
        {text}
      </h3>
    </li>
  );
}
