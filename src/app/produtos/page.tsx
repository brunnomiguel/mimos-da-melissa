import { Product } from "@/components/Product";
import { AsideToggle } from "@/components/AsideToggle";
import { AsideProducts } from "@/components/AsideProducts";

import { productData } from "@/utils/productData";

import imageExample from "../../../public/image-exemple.png";

export default function Products() {
  return (
    <div className="pb-10 min-h-80-vh border-b-2 border-b-text-900 border-opacity-50">
      <h1 className="w-full mt-6 mb-6 text-center font-bold text-3xl">
        Nossos Produtos
      </h1>

      <div className="w-full max-w-1380 ml-auto mr-auto flex flex-col md:flex-row gap-4 pl-4 pr-4">
        <AsideToggle />

        <AsideProducts />

        <ul className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {productData.map((product) => (
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
    </div>
  );
}
