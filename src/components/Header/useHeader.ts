"use client";

import { useEffect, useState } from "react";

export const useHeader = () => {
  const [smallView, setSmallView] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 890) {
        setSmallView(true);
      } else {
        setSmallView(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return {
    smallView,
    drawerOpen,
    toggleDrawer,
  };
};
