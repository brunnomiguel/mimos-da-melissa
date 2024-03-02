import { colors } from "@/styles/colors";

import { FaArrowRight } from "react-icons/fa";

import { ProductSkeleton } from "@/components/Skeletons/ProductSkeleton";

export default function LoadingProducts({ title }: { title: string }) {
  return (
    <section className="w-full overflow-hidden pl-4 pr-4 relative">
      <div className="w-full max-w-1380 lg:ml-auto lg:mr-auto">
        <div className="mt-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold lg:text-3xl">{title}</h2>

          <div className="flex items-center justify-center gap-2 hover:opacity-80">
            Ver mais <FaArrowRight color={colors.text[900]} size="1rem" />
          </div>
        </div>

        <ul className="w-full flex items-baseline md:justify-between gap-3 px-1 pb-4 lg:gap-4 mt-2 mb-2 overflow-x-scroll overflow-y-hidden md:overflow-hidden">
          {Array.from({ length: 5 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
