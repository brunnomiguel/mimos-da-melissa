"use client";

import Link from "next/link";

import imageExample from "../../../public/image-exemple.png";

import { colors } from "@/styles/colors";

import { Product } from "../Product";

import { FaArrowRight } from "react-icons/fa";

import { productData } from "@/utils/productData";

export function Catalog() {
  return (
    <section className="mt-6 w-full overflow-hidden pl-4 pr-4 relative">
      <div className="w-full max-w-1380 lg:mx-auto pb-2">
        <h2 className="text-2xl font-semibold lg:text-3xl text-center my-4">
          Catálogo
        </h2>

        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 pb-4 lg:gap-4 my-2 justify-items-center">
          {productData.map((product) => (
            <Product.Container key={product.id}>
              <Product.ContentImage src={imageExample} alt={product.name}>
                <Product.ContentFavoriteIcon />
                <Product.ContentSale discount={product.promotion_discount} />
              </Product.ContentImage>
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

        <Link
          className="w-52 mx-auto flex items-center justify-center gap-2 hover:opacity-80 bg-white shadow-default p-2"
          href="/produtos"
        >
          Ver mais <FaArrowRight color={colors.text[900]} size="1rem" />
        </Link>
      </div>
    </section>
  );
}
