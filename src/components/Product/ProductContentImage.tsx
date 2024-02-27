import Image, { StaticImageData } from "next/image";

type ProductContentImageProps = {
  src: StaticImageData;
  alt: string;
};

export function ProductContentImage({ src, alt }: ProductContentImageProps) {
  return (
    <div className="w-full h-3/5">
      <Image className="w-full h-full" src={src} alt={alt} />
    </div>
  );
}
