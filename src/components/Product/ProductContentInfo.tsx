import { Fragment, ReactNode } from "react";

import { currencyFormat } from "@/utils/currencyFormat";

import { FaEye } from "react-icons/fa";

type ProductContentInfoPriceProps = {
  price: number;
  is_promotion: boolean;
  promotion_discount: number;
};

export function ProductContentInfo({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

export function ProductContentInfoTitle({ title }: { title: string }) {
  return <h4 className="font-semibold text-lg leading-5">{title}</h4>;
}

export function ProductContentInfoPrice({
  price,
  is_promotion,
  promotion_discount,
}: ProductContentInfoPriceProps) {
  const pricePromotion = price - price * (promotion_discount / 100);

  return (
    <Fragment>
      {is_promotion ? (
        <p className="font-semibold text-base">
          de: <del>{currencyFormat(String(price))}</del>
        </p>
      ) : null}

      {is_promotion ? (
        <p className="font-bold text-xl">
          por: {currencyFormat(String(pricePromotion))}
        </p>
      ) : null}

      {!is_promotion ? (
        <p className="font-bold text-xl">{currencyFormat(String(price))}</p>
      ) : null}
    </Fragment>
  );
}

export function ProductContentInfoButtons() {
  return (
    <div className="flex items-center gap-2">
      <button className="w-3/4 p-1 bg-pink-900 text-white font-semibold text-sm rounded-md cursor-pointer hover:opacity-70">
        COMPRAR
      </button>
      <button className="w-1/4 p-1 flex items-center justify-center bg-white text-pink-900 border-2 border-pink-900 font-semibold text-sm rounded-md cursor-pointer hover:opacity-70">
        <FaEye size="1rem" />
      </button>
    </div>
  );
}
