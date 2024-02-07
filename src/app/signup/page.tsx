"use client";

import Image from "next/image";
import SignUpForm from "@/components/SignUpForm";
import signUpImage from "../../../public/images/banners/sign-in.png";

import { useEffect, useState } from "react";

export default function SignUp() {
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
      <SignUpForm smallView={smallView} />

      {!smallView ? (
        <div className="w-full h-full flex items-center justify-center bg-bb-color">
          <Image
            className="w-3/4"
            src={signUpImage}
            alt="Imagem Mimos da Melissa"
          />
        </div>
      ) : null}
    </div>
  );
}
