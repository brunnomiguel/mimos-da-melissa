"use client";

import { useLayoutEffect, useState } from "react";

import { colors } from "@/styles/colors";

import { productData } from "@/utils/productData";

import { useCarouselProducts } from "@/hooks/useCarouselProducts";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Product } from "../Product";

const classNames = {
  contentIcon:
    "flex items-center justify-center cursor-pointer w-10 h-10 md:w-16 md:h-16 absolute top-1/2 opacity-80 hover:opacity-100 bg-white rounded-full shadow-default",
};

export function Highlights() {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useLayoutEffect(() => {
    function updateSlidesToShow() {
      if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(5);
      }
    }

    window.addEventListener("resize", updateSlidesToShow);
    updateSlidesToShow(); // Chama a função inicialmente para definir os slides corretos
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const { prevSlide, nextSlide, slidesOffset } = useCarouselProducts({
    products: productData,
    slidesToShow,
  });

  return (
    <div className="w-full overflow-hidden pl-4 pr-4 relative">
      <h2 className="pl-4 mt-2 text-center text-2xl font-semibold lg:text-3xl lg:mb-4">
        Destaques
      </h2>

      <div className="w-full max-w-1380 lg:ml-auto lg:mr-auto">
        <div className={`${classNames.contentIcon} left-3`} onClick={prevSlide}>
          <FaArrowLeft color={colors.text[900]} size="1.5rem" />
        </div>

        <ul className="w-full flex items-baseline gap-3 md:gap-4 lg:gap-10 mt-2 mb-2">
          {productData
            .slice(slidesOffset, slidesOffset + slidesToShow)
            .map((product) => (
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
                is_promotion={product.is_promotion}
                promotion_discount={product.promotion_discount}
              />
            ))}
        </ul>

        <div
          className={`${classNames.contentIcon} right-3`}
          onClick={nextSlide}
        >
          <FaArrowRight color={colors.text[900]} size="1.5rem" />
        </div>
      </div>
    </div>
  );
}
