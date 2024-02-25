"use client";

import { useLayoutEffect, useState } from "react";

export const useResize = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useLayoutEffect(() => {
    function updateSlidesToShow() {
      if (window.innerWidth < 558) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(5);
      }
    }

    window.addEventListener("resize", updateSlidesToShow);
    updateSlidesToShow(); // Chama a função inicialmente para definir os slides corretos
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  return { slidesToShow };
};
