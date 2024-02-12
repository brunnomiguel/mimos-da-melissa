import Image from "next/image";
import SignInForm from "@/components/SignInForm";

import signInImage from "../../../public/images/banners/sign-in.png";

export default function SignIn() {
  return (
    <div className="w-full flex items-center h-screen-85">
      <div className="w-3/6 h-full flex items-center justify-center bg-bb-color">
        <Image
          className="w-4/5"
          src={signInImage}
          alt="Imagem Mimos da Melissa"
        />
      </div>

      <SignInForm />
    </div>
  );
}
