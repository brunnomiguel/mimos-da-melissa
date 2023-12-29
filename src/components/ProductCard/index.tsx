"use client";

import Image from "next/image";
import ImageExemple from "../../../public/images/image-exemple.png";

import { useRouter } from "next/navigation";

interface ProductCardProps {
  release?: boolean;
}

export default function ProductCard({ release }: ProductCardProps) {
  const router = useRouter();

  return (
    <li
      className={`bg-white shadow-3xl ${
        release && "w-72"
      } h-full rounded-xl flex flex-col`}
    >
      <Image
        src={ImageExemple}
        alt="Imagem de exemplo"
        width={288}
        height={200}
        className="w-full"
      />
      <div className={`flex ${release && "w-72"} flex-col p-4 gap-3`}>
        <h4 className="text-lg font-semibold">Laço princesa</h4>
        <p className="text-lg font-semibold text-price-color">R$ 30,00</p>
        <button
          className="w-full h-10 bg-text_color rounded-md text-xl text-white font-semibold hover:opacity-70"
          onClick={() =>
            router.push(`/shop/products/details/${1}`, { scroll: false })
          }
        >
          Detalhes
        </button>
        <button className="w-full h-10 bg-price-color rounded-md text-xl text-white font-semibold hover:opacity-70">
          Comprar
        </button>
      </div>
    </li>
  );
}
