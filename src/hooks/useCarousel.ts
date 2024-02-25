import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface Image {
  image: StaticImageData;
  name: string;
}

interface CarouselProps {
  images: Image[];
}

export const useCarousel = ({ images }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 10000);
    return () => clearTimeout(timer);

    // eslint-disable-next-line
  }, [current]);

  return {
    nextSlide,
    prevSlide,
    current,
  };
};
