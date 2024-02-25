"use client";

import { useResize } from "@/hooks/useResize";
import { useCarouselProducts } from "@/hooks/useCarouselProducts";

import { colors } from "@/styles/colors";

import { Product } from "../Product";

import { productData } from "@/utils/productData";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { NavigationIcon } from "../NavigationIcon";

export function Promotions() {
  const { slidesToShow } = useResize();

  const productsOnSale = productData.filter(
    (product) => product.is_promotion === true
  );

  const { prevSlide, nextSlide, slidesOffset } = useCarouselProducts(
    productsOnSale,
    slidesToShow
  );

  return (
    <section className="mt-6 w-full overflow-hidden pl-4 pr-4 relative">
      <h2 className="pl-4 mt-4 mb-4 text-center text-2xl font-semibold lg:text-3xl">
        Promoções
      </h2>

      <div className="w-full max-w-1380 lg:ml-auto lg:mr-auto">
        <NavigationIcon
          direction="left-3"
          bgColor="bg-white"
          shadow="shadow-default"
          onClick={prevSlide}
        >
          <FaArrowLeft color={colors.text[900]} size="1.5rem" />
        </NavigationIcon>

        <ul className="w-full flex items-baseline gap-3 md:gap-4 lg:gap-10 mt-2 mb-2">
          {productsOnSale
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

        <NavigationIcon
          direction="right-3"
          bgColor="bg-white"
          shadow="shadow-default"
          onClick={nextSlide}
        >
          <FaArrowRight color={colors.text[900]} size="1.5rem" />
        </NavigationIcon>
      </div>
    </section>
  );
}
