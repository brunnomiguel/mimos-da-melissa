// import
import { StaticImageData } from "next/image";

// import required images
import lacos from "../../../public/images/flat-list/lacos.jpg";
import faixinhas from "../../../public/images/flat-list/faixinhas.jpg";

export interface CategoryData {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
}

export const categoryData: CategoryData[] = [
  {
    id: 1,
    title: "Laços",
    description: "Laços com apliques únicos",
    image: lacos,
  },
  {
    id: 2,
    title: "Faixinhas RN",
    description: "Faixinhas para bebês RN",
    image: faixinhas,
  },
  {
    id: 3,
    title: "Faixinhas RN",
    description: "Faixinhas para bebês RN",
    image: faixinhas,
  },
  {
    id: 4,
    title: "Laços",
    description: "Laços com apliques únicos",
    image: lacos,
  },
  {
    id: 5,
    title: "Laços",
    description: "Laços com apliques únicos",
    image: lacos,
  },
  {
    id: 6,
    title: "Faixinhas RN",
    description: "Faixinhas para bebês RN",
    image: faixinhas,
  },
  {
    id: 7,
    title: "Faixinhas RN",
    description: "Faixinhas para bebês RN",
    image: faixinhas,
  },
];
