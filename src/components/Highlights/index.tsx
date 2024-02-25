"use client";

import { colors } from "@/styles/colors";

import { classNames } from "@/utils/classNamesIcon";
import { productData } from "@/utils/productData";

import { useResize } from "@/hooks/useResize";
import { useCarouselProducts } from "@/hooks/useCarouselProducts";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Product } from "../Product";

export function Highlights() {
  const { slidesToShow } = useResize();

  const { prevSlide, nextSlide, slidesOffset } = useCarouselProducts(
    productData,
    slidesToShow
  );

  return (
    <section className="w-full overflow-hidden pl-4 pr-4 relative">
      <h2 className="pl-4 mt-2 text-center text-2xl font-semibold lg:text-3xl lg:mb-4">
        Destaques
      </h2>

      <div className="w-full max-w-1380 lg:ml-auto lg:mr-auto">
        <div
          className={`${classNames.contentIcon} left-3 bg-white shadow-default`}
          onClick={prevSlide}
        >
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
          className={`${classNames.contentIcon} right-3 bg-white shadow-default`}
          onClick={nextSlide}
        >
          <FaArrowRight color={colors.text[900]} size="1.5rem" />
        </div>
      </div>
    </section>
  );
}