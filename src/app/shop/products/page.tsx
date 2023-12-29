import ProductCard from "@/components/ProductCard";

export default function Products() {
  return (
    <div className="mt-32 w-full max-w-screen-2xl ml-auto mr-auto">
      <h2 className="mt-6 mb-6 text-center text-4xl font-semibold">
        Nosso Catálogo
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
    </div>
  );
}
