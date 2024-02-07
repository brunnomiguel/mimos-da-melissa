import ProductCard from "../ProductCard";

export default function ReleasesSection() {
  return (
    <section className="w-full">
      <h2 className="mt-6 mb-6 text-center text-4xl font-semibold">
        Lançamentos
      </h2>

      <div className="relative w-full max-w-screen-2xl ml-auto mr-auto overflow-hidden">
        <div className="flex gap-4 overflow-x-auto overflow-y-hidden scroll-x-unique">
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className={`w-72 h-full flex-shrink-0`}>
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
