import Image from "next/image";
import imageExample from "../../../public/image-exemple.png";

import { currencyFormat } from "@/utils/currencyFormat";
import { FaEye } from "react-icons/fa";

interface ProductProps {
  name: string;
  price: number;
  is_promotion: boolean;
  promotion_discount: number;
}

export function Product({
  name,
  price,
  is_promotion,
  promotion_discount,
}: ProductProps) {
  const pricePromotion = price - price * (promotion_discount / 100);

  return (
    <li className="w-44 p-2 bg-white shadow-default flex flex-col gap-2 rounded-lg lg:w-60">
      <Image
        className="w-full h-3/6"
        src={imageExample}
        alt="Imagem de exemplo"
      />

      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-lg leading-5">{name}</h4>

        {is_promotion ? (
          <p className="font-semibold text-base">
            de: <del>{currencyFormat(String(price))}</del>
          </p>
        ) : null}

        {is_promotion ? (
          <p className="font-bold text-xl">
            por: {currencyFormat(String(pricePromotion))}
          </p>
        ) : null}

        {!is_promotion ? (
          <p className="font-bold text-xl">{currencyFormat(String(price))}</p>
        ) : null}

        <div className="flex items-center gap-2">
          <button className="w-3/4 p-1 bg-pink-900 text-white font-semibold text-sm rounded-md cursor-pointer hover:opacity-70">
            COMPRAR
          </button>
          <button className="w-1/4 p-1 flex items-center justify-center bg-white text-pink-900 border-2 border-pink-900 font-semibold text-sm rounded-md cursor-pointer hover:opacity-70">
            <FaEye size="1rem" />
          </button>
        </div>
      </div>
    </li>
  );
}
