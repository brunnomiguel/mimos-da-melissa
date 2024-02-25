import { ProductData } from "@/@types/products";
import { useEffect, useState } from "react";

export const useCarouselProducts = (
  products: ProductData[],
  slidesToShow: number
) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesOffset, setSlidesOffset] = useState(0); // offset para o início dos slides

  const totalSlides = products.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);

    if (currentSlide === totalSlides - slidesToShow) {
      // Se estiver no último grupo de slides, volta para o início
      setSlidesOffset(0);
    } else if (currentSlide === slidesOffset + slidesToShow - 1) {
      // Se o próximo slide ultrapassar o limite do grupo atual, avança o offset
      setSlidesOffset((prevOffset) => prevOffset + 1);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
    if (currentSlide === 0) {
      // Se estiver no início, volta para o último grupo de slides
      setSlidesOffset(totalSlides - slidesToShow);
    } else if (currentSlide === slidesOffset) {
      // Se o slide atual for o primeiro do grupo atual, retrocede o offset
      setSlidesOffset((prevOffset) => Math.max(0, prevOffset - 1));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 8000);
    return () => clearTimeout(timer);

    // eslint-disable-next-line
  }, [currentSlide]);

  return {
    nextSlide,
    prevSlide,
    currentSlide,
    slidesOffset,
  };
};
