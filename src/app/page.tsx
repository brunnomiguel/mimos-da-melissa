import { Fragment, Suspense } from "react";

import { TopBanners } from "@/components/Banners";
import { Highlights } from "@/components/Highlights";
import { CategoryCards } from "@/components/CategoryCards";
import { Campaigns } from "@/components/Campaigns";
import { Promotions } from "@/components/Promotions";
import { NavigationCatalog } from "@/components/NavigationCatalog";

import LoadingProducts from "./loading";

export default function Home() {
  return (
    <Fragment>
      <TopBanners />

      <CategoryCards />

      <Suspense fallback={<LoadingProducts title="Destaques" />}>
        <Highlights />
      </Suspense>

      <Campaigns />

      <Suspense fallback={<LoadingProducts title="Promoções" />}>
        <Promotions />
      </Suspense>

      <NavigationCatalog />
    </Fragment>
  );
}
