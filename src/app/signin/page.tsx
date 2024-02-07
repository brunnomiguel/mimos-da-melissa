"use client";

import Image from "next/image";
import SignInForm from "@/components/SignInForm";

import signInImage from "../../../public/images/banners/sign-in.png";
import { useEffect, useState } from "react";

export default function SignIn() {
  const [smallView, setSmallView] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setSmallView(true);
      } else {
        setSmallView(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <div className="w-full flex items-center justify-between h-screen">
      {!smallView ? (
        <div className="w-full h-full flex items-center justify-center bg-bb-color">
          <Image
            className="w-3/4"
            src={signInImage}
            alt="Imagem Mimos da Melissa"
          />
        </div>
      ) : null}

      <SignInForm smallView={smallView} />
    </div>
  );
}
