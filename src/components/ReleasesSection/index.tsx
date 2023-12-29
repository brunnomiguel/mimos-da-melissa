import ProductCard from "../ProductCard";

import "./styles.css";

export default function ReleasesSection() {
  return (
    <section className="w-full">
      <h2 className="mt-6 mb-6 text-center text-4xl font-semibold">
        Lançamentos
      </h2>
      <ul className="w-full max-w-screen-2xl ml-auto mr-auto p-4 gap-10 flex items-center overflow-x-auto overflow-y-hidden scroll-y">
        <ProductCard release />
        <ProductCard release />
        <ProductCard release />
        <ProductCard release />
        <ProductCard release />
      </ul>
    </section>
  );
}
