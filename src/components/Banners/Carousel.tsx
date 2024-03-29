"use client";

import Image, { StaticImageData } from "next/image";

import { colors } from "@/styles/colors";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { useCarousel } from "@/hooks/useCarousel";

import { NavigationIcon } from "../NavigationIcon";

interface Image {
  image: StaticImageData;
  name: string;
}

interface CarouselProps {
  images: Image[];
}

export function Carousel({ images }: CarouselProps) {
  const { prevSlide, nextSlide, current } = useCarousel({ images });

  return (
    <div className="w-full banner shadow-blur relative pl-4 pr-4">
      <NavigationIcon
        direction="left-3"
        bgColor="bg-pink-900"
        shadow="shadow-shadow_white"
        onClick={prevSlide}
      >
        <FaArrowLeft color={colors.white} size="1.5rem" />
      </NavigationIcon>

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

      <NavigationIcon
        direction="right-3"
        bgColor="bg-pink-900"
        shadow="shadow-shadow_white"
        onClick={nextSlide}
      >
        <FaArrowRight color={colors.white} size="1.5rem" />
      </NavigationIcon>
    </div>
  );
}
