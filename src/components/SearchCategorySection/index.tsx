"use client";

import { useLoading } from "@/hooks/useLoading";
import { CategorySlider } from "./CategorySlider";
import SkeletonCategory from "../Skeletons/SkeletonCategory";

export default function SearchCategorySection() {
  const { loading } = useLoading();

  return (
    <section className="w-full">
      <h3 className="mt-20 text-center font-semibold text-default-color text-4xl">
        Navegue em nossas principais categorias
      </h3>
      <div className="w-full max-w-screen-2xl ml-auto mr-auto mt-20 mb-20 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center gap-8">
            {Array.from({ length: 3 }, (_, index) => (
              <SkeletonCategory key={index} />
            ))}
          </div>
        ) : (
          <CategorySlider />
        )}
      </div>
    </section>
  );
}
