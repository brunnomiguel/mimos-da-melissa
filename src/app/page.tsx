import { Fragment } from "react";

import { TopBanners } from "@/components/Banners";
import { Highlights } from "@/components/Highlights";
import { CategoryCards } from "@/components/CategoryCards";
import { Campaigns } from "@/components/Campaigns";
import { Promotions } from "@/components/Promotions";

export default function Home() {
  return (
    <Fragment>
      <TopBanners />

      <CategoryCards />

      <Highlights />

      <Campaigns />

      <Promotions />
    </Fragment>
  );
}
