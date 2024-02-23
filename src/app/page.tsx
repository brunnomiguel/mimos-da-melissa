import { Fragment } from "react";

import { TopBanners } from "@/components/Banners";
import { Highlights } from "@/components/Highlights";
import { CategoryCards } from "@/components/CategoryCards";

export default function Home() {
  return (
    <Fragment>
      <TopBanners />

      <CategoryCards />

      <Highlights />
    </Fragment>
  );
}
