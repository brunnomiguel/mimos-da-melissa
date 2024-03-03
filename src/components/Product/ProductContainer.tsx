import Image, { StaticImageData } from "next/image";

import { Fragment, ReactNode } from "react";

import { FaEye, FaRegHeart } from "react-icons/fa";

import { currencyFormat } from "@/utils/currencyFormat";

import { colors } from "@/styles/colors";

type ProductContentImageProps = {
  src: StaticImageData;
  alt: string;
  children: ReactNode;
};

type ProductContentInfoPriceProps = {
  price: number;
  is_promotion: boolean;
  promotion_discount: number;
};

export function ProductContainer({ children }: { children: ReactNode }) {
  return (
    <li className="w-full h-full max-w-60 p-2 bg-white shadow-default flex flex-col gap-2 rounded-lg">
      {children}
    </li>
  );
}

export function ProductContentImage({
  src,
  alt,
  children,
}: ProductContentImageProps) {
  return (
    <div className="w-full relative">
      <Image className="w-full h-full" src={src} alt={alt} />
      {children}
    </div>
  );
}

export function ProductContentFavoriteIcon() {
  return (
    <div className="cursor-pointer absolute top-1 right-1 w-8 h-8 p-1 bg-white rounded-lg">
      <FaRegHeart size="1.5rem" fill={colors.pink[900]} />
    </div>
  );
}

export function ProductContentSale({ discount }: { discount: number }) {
  return (
    <div className="flex items-center justify-center absolute top-1 left-1 w-10 h-8 p-1 bg-white rounded-lg">
      <p className="font-bold text-pink-900">{discount}%</p>
    </div>
  );
}

export function ProductContentInfo({ children }: { children: ReactNode }) {
  return <div className="w-52 flex flex-col gap-2 md:w-full">{children}</div>;
}

export function ProductContentInfoTitle({ title }: { title: string }) {
  return <h4 className="font-semibold text-base leading-5">{title}</h4>;
}

export function ProductContentInfoPrice({
  price,
  is_promotion,
  promotion_discount,
}: ProductContentInfoPriceProps) {
  const pricePromotion = price - price * (promotion_discount / 100);

  return (
    <Fragment>
      <p className="font-bold text-xl w-full">
        {is_promotion
          ? currencyFormat(String(pricePromotion))
          : currencyFormat(String(price))}
      </p>
    </Fragment>
  );
}

export function ProductContentInfoButtons() {
  return (
    <div className="flex items-center gap-2 w-full">
      <button className="w-3/4 p-1 bg-pink-900 text-white font-semibold text-sm rounded-md cursor-pointer hover:opacity-70">
        COMPRAR
      </button>
      <button className="w-1/4 p-1 flex items-center justify-center bg-white text-pink-900 border-2 border-pink-900 font-semibold text-sm rounded-md cursor-pointer hover:opacity-70">
        <FaEye size="1rem" />
      </button>
    </div>
  );
}
