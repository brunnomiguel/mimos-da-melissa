import { useLayoutEffect, useState } from "react";

export function useView() {
  const [smallView, setSmallView] = useState<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSmallView(true);
    } else {
      setSmallView(false);
    }
  };

  useLayoutEffect(() => {
    handleResize();
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    smallView,
  };
}
