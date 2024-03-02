import Link from "next/link";

import { colors } from "@/styles/colors";

import { productData } from "@/utils/productData";

import { FaArrowRight } from "react-icons/fa";

import { Product } from "../Product";

import imageExample from "../../../public/image-exemple.png";
import { ProductSkeleton } from "../Skeletons/ProductSkeleton";

export function Highlights() {
  return (
    <section className="w-full overflow-hidden pl-4 pr-4 relative">
      <div className="w-full max-w-1380 lg:ml-auto lg:mr-auto">
        <div className="mt-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold lg:text-3xl">Destaques</h2>

          <Link
            className="flex items-center justify-center gap-2 hover:opacity-80"
            href="/produtos"
          >
            Ver mais <FaArrowRight color={colors.text[900]} size="1rem" />
          </Link>
        </div>

        <ul className="w-full flex items-baseline md:justify-between gap-3 px-1 pb-4 lg:gap-4 mt-2 mb-2 overflow-x-scroll overflow-y-hidden md:overflow-hidden">
          {productData.slice(0, 5).map((product) => (
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
      </div>
    </section>
  );
}
