import Carousel from "./Carousel";

import bannerOne from "../../../public/images/banners/banner-1.png";
import bannerTwo from "../../../public/images/banners/banner-2.jpg";
import bannerThree from "../../../public/images/banners/banner-3.png";

import { StaticImageData } from "next/image";

interface Image {
  image: StaticImageData;
  name: string;
}

const images: Image[] = [
  { image: bannerOne, name: "Banner inicial de boas vindas" },
  { image: bannerTwo, name: "Banner com informacoes" },
  { image: bannerThree, name: "Banner com informações sobre pagamento" },
];

export default function TopBanners() {
  return (
    <section>
      {images.length > 0 ? (
        <Carousel images={images} />
      ) : (
        <p>Carregando banners...</p>
      )}
    </section>
  );
}
