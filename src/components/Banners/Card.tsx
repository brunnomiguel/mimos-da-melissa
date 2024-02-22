import Image from "next/image";

import imageBanner from "../../../public/capa-banner.png";

export function Card() {
  return (
    <div className="w-full banner flex items-center justify-center shadow-blur">
      <div className="flex flex-col justify-center gap-4 p-20">
        <h4 className="text-2xl font-semibold">MIMOS DA MELISSA</h4>
        <h1 className="text-3xl font-bold w-full max-w-700">
          LAÇOS FEITOS COM AMOR E COM TOTAL DEDICAÇÃO AOS DETALHES
        </h1>
        <div className="w-44 h-28 rounded-2xl flex flex-col items-center justify-center gap-2 bg-pink-800 shadow-shadow_white">
          <span className="text-white font-medium text-xl">ATÉ</span>
          <div className="flex items-center gap-2">
            <p className="text-white font-medium text-4xl">30%</p>
            <span className="text-white font-medium text-xl">OFF</span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-500">
        <Image
          className="w-full h-full -mb-12"
          src={imageBanner}
          alt="Imagem de capa representando Mimos da Melissa"
        />
      </div>
    </div>
  );
}
