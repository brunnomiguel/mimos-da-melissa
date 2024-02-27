import { productData } from "@/utils/productData";

import {
  AsideSearchProductContent,
  AsideSearchProductItem,
} from "./AsideSearchProduct";

export function AsideProducts() {
  return (
    <aside className="w-full md:w-3/12 h-full p-4 shadow-default rounded-xl hidden md:block">
      <h3 className="text-2xl font-semibold">Catálogo completo</h3>
      <span className="font-medium text-base">{productData.length} itens</span>

      <div className="mt-4">
        <h4 className="font-semibold text-lg mb-4">Pesquisar por categoria</h4>

        <AsideSearchProductContent>
          <AsideSearchProductItem>Laços com aplique</AsideSearchProductItem>
          <AsideSearchProductItem>Laços básicos</AsideSearchProductItem>
          <AsideSearchProductItem>Tiaras com aplique</AsideSearchProductItem>
          <AsideSearchProductItem>Tiaras simples</AsideSearchProductItem>
          <AsideSearchProductItem>Aramados</AsideSearchProductItem>
          <AsideSearchProductItem>Para Batizados</AsideSearchProductItem>
        </AsideSearchProductContent>

        <h4 className="font-semibold text-lg mt-4 mb-4">Ordenar</h4>

        <AsideSearchProductContent>
          <AsideSearchProductItem>Menor Preço</AsideSearchProductItem>
          <AsideSearchProductItem>Maior Preço</AsideSearchProductItem>
          <AsideSearchProductItem>A a Z</AsideSearchProductItem>
        </AsideSearchProductContent>
      </div>
    </aside>
  );
}
