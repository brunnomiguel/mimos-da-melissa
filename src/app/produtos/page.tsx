"use client";

import { useState } from "react";

import { FaFilter } from "react-icons/fa";

import { Product } from "@/components/Product";
import { productData } from "@/utils/productData";

import { AsideModal } from "@/components/AsideProducts/AsideModal";
import { AsideProducts } from "@/components/AsideProducts";

import imageExample from "../../../public/image-exemple.png";

export default function Products() {
  const [openAside, setOpenAside] = useState(false);

  return (
    <div className="pb-10 min-h-80-vh border-b-2 border-b-text-900 border-opacity-50">
      <h1 className="w-full mt-6 mb-6 text-center font-bold text-3xl">
        Nossos Produtos
      </h1>

      <div className="w-full max-w-1380 ml-auto mr-auto flex flex-col md:flex-row gap-4 pl-4 pr-4">
        <div
          className="flex items-center justify-center gap-5 w-48 p-2 shadow-default rounded-lg mx-auto mb-5 cursor-pointer opacity-80 hover:opacity-100 md:hidden"
          onClick={() => setOpenAside(true)}
        >
          <p className="font-medium text-lg">Filtre opções</p>
          <FaFilter size="1.5rem" />
        </div>

        <AsideProducts />

        <ul className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {productData.map((product) => (
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
      </div>

      {openAside ? <AsideModal setOpenAside={setOpenAside} /> : null}
    </div>
  );
}
