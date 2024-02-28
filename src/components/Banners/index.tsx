import { Carousel } from "./Carousel";

import bannerBoasVindas from "../../../public/home-boas-vindas.png";
import bannerPascoa from "../../../public/home-pascoa.png";
import bannerHomePrazos from "../../../public/home-prazos.png";

import { StaticImageData } from "next/image";

interface Image {
  image: StaticImageData;
  name: string;
}

const images: Image[] = [
  { image: bannerBoasVindas, name: "Banner de Boas Vindas" },
  { image: bannerPascoa, name: "Banner Tema Páscoa" },
  { image: bannerHomePrazos, name: "Banner Prazos de envio" },
];

export function TopBanners() {
  return <Carousel images={images} />;
}
