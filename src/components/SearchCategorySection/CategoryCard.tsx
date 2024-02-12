import Image from "next/image";

import { CategoryData } from "./categoryData";

interface CategoryCardProps {
  data: CategoryData;
}

export function CategoryCard({ data }: CategoryCardProps) {
  return (
    <li className="flex items-center w-96 h-28 p-2 mb-4 gap-3 rounded-xl bg-bg_form_color drop-shadow-input-default cursor-pointer hover:opacity-75">
      <Image
        className="w-32 h-24 rounded-full"
        src={data.image}
        alt={data.description}
      />

      <div className="w-80 h-24 flex flex-col justify-center">
        <h4 className="text-3xl font-semibold text-default-color">
          {data.title}
        </h4>
        <p className="text-lg font-medium text-default-color">
          {data.description}
        </p>
      </div>
    </li>
  );
}
