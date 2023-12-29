import ProductCard from "../ProductCard";

import { CgArrowTopRight } from "react-icons/cg";

export default function CatalogSection() {
  return (
    <section className="w-full">
      <h2 className="mt-6 mb-6 text-center text-4xl font-semibold">Catálogo</h2>
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
      <button className="w-64 h-14 mt-4 ml-auto mr-auto bg-price-color text-white flex items-center justify-center rounded-lg text-xl font-semibold hover:opacity-70">
        Ver mais <CgArrowTopRight size="2rem" color="#fff" />
      </button>
    </section>
  );
}
