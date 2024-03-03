import { EmptyCart } from "@/components/EmptyCart";

import { CartItem } from "@/components/CartItem";

export default function Cart() {
  return (
    <div className="pb-10 min-h-80-vh border-b-2 border-b-text-900 border-opacity-50 px-4">
      <EmptyCart />

      <div className="">
        <h1 className="w-full mt-6 mb-6 text-center font-bold text-3xl">
          Carrinho de compras
        </h1>

        <ul className="flex flex-col gap-3">
          {Array.from({ length: 4 }, (_, index) => (
            <CartItem.Container key={index}>
              <CartItem.ImageItem />
              <CartItem.Content.Container>
                <CartItem.Content.Title title="Nome do produto grande" />
                <CartItem.Content.Size />
                <CartItem.Content.Stock.Container>
                  <CartItem.Content.Stock.Price price={35} />
                  <CartItem.Content.Stock.Quantity />
                </CartItem.Content.Stock.Container>
              </CartItem.Content.Container>
            </CartItem.Container>
          ))}
        </ul>

        <div className="w-full max-w-96 mx-auto mt-6 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2 py-1 border-b-2 border-b-gray-300">
            <p className="text-lg">Subtotal:</p>
            <p className="text-lg font-semibold">R$ 120,00</p>
          </div>
          <div className="flex items-center justify-between gap-2 py-1 border-b-2 border-b-gray-300">
            <p className="text-lg">Desconto:</p>
            <p className="text-lg font-semibold">R$ 12,50</p>
          </div>
          <div className="flex items-center justify-between gap-2 py-1 border-b-2 border-b-gray-300">
            <p className="text-lg">Total</p>
            <p className="text-lg font-semibold">R$ 107,50</p>
          </div>

          <button className="w-full max-w-80 h-12 mt-4 mx-auto bg-pink-900 rounded-md text-white font-semibold hover:opacity-80 cursor-pointer">
            PROSSEGUIR PARA CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
