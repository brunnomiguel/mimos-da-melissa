"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { menuIcons } from "@/utils/icons";

import ProductCard from "../ProductCard";

export default function CatalogSection() {
  const router = useRouter();

  return (
    <section className="w-full pt-14 pb-14 bg-bg_form_color">
      <h2 className="mb-8 text-center text-4xl font-semibold">
        Produtos Recentes
      </h2>

      <ul className="w-full max-w-screen-2xl ml-auto mr-auto p-4 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>

      <Button
        className="w-64 h-14 mt-4 ml-auto mr-auto bg-price-color text-white flex items-center justify-center rounded-lg text-xl font-semibold"
        endContent={menuIcons.arrowTopRight}
        onClick={() => router.push("/shop/products")}
      >
        Ver mais
      </Button>
    </section>
  );
}
