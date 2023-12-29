import TopBanners from "@/components/TopBanners";
import CatalogSection from "@/components/CatalogSection";
import ReleasesSection from "@/components/ReleasesSection";
import InformationalSection from "@/components/InformationalSection";

import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <TopBanners />

      <ReleasesSection />

      <CatalogSection />

      <InformationalSection />
    </Fragment>
  );
}
