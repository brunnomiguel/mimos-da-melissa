"use client";

import Image, { StaticImageData } from "next/image";

import { colors } from "@/styles/colors";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { useCarousel } from "@/hooks/useCarousel";

interface Image {
  image: StaticImageData;
  name: string;
}

interface CarouselProps {
  images: Image[];
}

const classNames = {
  contentIcon:
    "flex items-center justify-center cursor-pointer w-10 h-10 md:w-16 md:h-16 absolute top-1/2 opacity-80 hover:opacity-100 bg-pink-900 rounded-full shadow-shadow_white",
};

export function Carousel({ images }: CarouselProps) {
  const { prevSlide, nextSlide, current } = useCarousel({ images });

  return (
    <div className="w-full banner shadow-blur overflow-hidden relative pl-4 pr-4">
      <div className={`${classNames.contentIcon} left-3`} onClick={prevSlide}>
        <FaArrowLeft color={colors.white} size="1.5rem" />
      </div>

      <div className="w-full mt-0">
        {images.map((image, index) => (
          <div
            className={`max-w-1380 ml-auto mr-auto ${
              index === current ? "block" : "hidden"
            }`}
            key={index}
          >
            <Image
              className="w-full max-h-600 rounded-2xl"
              src={image.image}
              alt={image.name}
              priority={true}
            />
          </div>
        ))}
      </div>

      <div className={`${classNames.contentIcon} right-3`} onClick={nextSlide}>
        <FaArrowRight color={colors.white} size="1.5rem" />
      </div>
    </div>
  );
}
