"use client";

import { colors } from "@/styles/colors";

import { productData } from "@/utils/productData";

import { useResize } from "@/hooks/useResize";
import { useCarouselProducts } from "@/hooks/useCarouselProducts";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Product } from "../Product";
import { NavigationIcon } from "../NavigationIcon";

import imageExample from "../../../public/image-exemple.png";

export function Highlights() {
  const { slidesToShow } = useResize();

  const { prevSlide, nextSlide, slidesOffset } = useCarouselProducts(
    productData,
    slidesToShow
  );

  return (
    <section className="w-full overflow-hidden pl-4 pr-4 relative">
      <h2 className="pl-4 mt-4 lg:mb-4 text-center text-2xl font-semibold lg:text-3xl">
        Destaques
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
          {productData
            .slice(slidesOffset, slidesOffset + slidesToShow)
            .map((product) => (
              <Product.Container key={product.id}>
                <Product.ContentImage src={imageExample} alt={product.name} />
                <Product.ContentInfo>
                  <Product.ContentInfoTitle title={product.name} />
                  <Product.ContentInfoPrice
                    price={product.price}
                    is_promotion={product.is_promotion}
                    promotion_discount={product.promotion_discount}
                  />
                  <Product.ContentInfoButtons />
                </Product.ContentInfo>
              </Product.Container>
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
