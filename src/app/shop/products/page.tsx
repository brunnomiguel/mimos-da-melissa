"use client";

import ProductCard from "@/components/ProductCard";
import SkeletonCardProduct from "@/components/SkeletonCardProduct";

import { useLoading } from "@/hooks/useLoading";

export default function Products() {
  const { loading } = useLoading();

  return (
    <div className="mt-8 w-full max-w-screen-2xl ml-auto mr-auto">
      <h2 className="mt-6 mb-6 text-center text-4xl font-semibold">
        Nosso Catálogo
      </h2>
      <ul className="w-full max-w-screen-2xl ml-auto mr-auto p-4 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {loading
          ? Array.from({ length: 10 }, (_, index) => (
              <SkeletonCardProduct key={index} />
            ))
          : Array.from({ length: 20 }, (_, index) => (
              <ProductCard key={index} />
            ))}
      </ul>
    </div>
  );
}
