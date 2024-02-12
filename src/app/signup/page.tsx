import Image from "next/image";

import SignUpForm from "@/components/SignUpForm";
import signUpImage from "../../../public/images/banners/sign-in.png";

export default function SignUp() {
  return (
    <div className="w-full flex items-center h-screen-85">
      <SignUpForm />

      <div className="w-3/6 h-full flex items-center justify-center bg-bb-color">
        <Image
          className="w-4/5"
          src={signUpImage}
          alt="Imagem Mimos da Melissa"
        />
      </div>
    </div>
  );
}
