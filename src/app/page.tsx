import TopBanners from "@/components/TopBanners";
import CatalogSection from "@/components/CatalogSection";
import SearchCategorySection from "@/components/SearchCategorySection";
import InformationalSection from "@/components/InformationalSection";

import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <TopBanners />

      <SearchCategorySection />

      <CatalogSection />

      <InformationalSection />
    </Fragment>
  );
}
