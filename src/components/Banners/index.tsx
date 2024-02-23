import { Carousel } from "./Carousel";

import bannerOne from "../../../public/home-pascoa.png";
import bannerTwo from "../../../public/home-bem-vindo.png";
import bannerThree from "../../../public/home-pascoa.png";

import { StaticImageData } from "next/image";

interface Image {
  image: StaticImageData;
  name: string;
}

const images: Image[] = [
  { image: bannerOne, name: "Banner Tema Páscoa" },
  { image: bannerTwo, name: "Banner Tema Páscoa 1" },
  { image: bannerThree, name: "Banner Tema Páscoa 2" },
];

export function TopBanners() {
  return <Carousel images={images} />;
}
