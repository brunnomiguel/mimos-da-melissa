"use client";

import { useEffect, useState } from "react";

import Image, { StaticImageData } from "next/image";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Image {
  image: StaticImageData;
  name: string;
}

interface CarouselProps {
  images: Image[];
}

export default function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [smallView, setSmallView] = useState(false);

  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 667) {
        setSmallView(true);
      } else {
        setSmallView(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timer);

    // eslint-disable-next-line
  }, [current]);

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className="w-full m-auto overflow-hidden relative bg-banner">
      <div
        className="cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 pl-10 opacity-60 hover:opacity-100"
        onClick={prevSlide}
      >
        <FaArrowLeft color="#F10C5F" size={smallView ? "1.5rem" : "2.5rem"} />
      </div>

      <div className="flex w-full max-w-screen-2xl ml-auto mr-auto">
        {images.map((image, index) => (
          <Image
            className={`${
              index === current ? "block" : "hidden"
            } w-full h-auto`}
            key={index}
            src={image.image}
            alt={image.name}
            priority={true}
          />
        ))}
      </div>

      <div
        className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 pr-10 opacity-60 hover:opacity-100"
        onClick={nextSlide}
      >
        <FaArrowRight color="#F10C5F" size={smallView ? "1.5rem" : "2.5rem"} />
      </div>
    </div>
  );
}
