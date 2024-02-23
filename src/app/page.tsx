import { TopBanners } from "@/components/Banners";
import { CategoryCards } from "@/components/CategoryCards";

import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <TopBanners />

      <CategoryCards />
    </Fragment>
  );
}
