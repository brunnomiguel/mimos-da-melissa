"use client";

import Link from "next/link";

import { Input } from "../Input";
import { FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function SignInForm({ smallView }: { smallView: boolean }) {
  const router = useRouter();

  return (
    <form
      className={`${
        !smallView ? "w-3/5" : "w-full"
      } flex flex-col items-center justify-center bg-bg_form_color h-full`}
    >
      <h2 className="text-4xl font-semibold mb-7">Login</h2>
      <div
        className={`pl-5 pr-5 gap-4 flex flex-col w-full md:w-3/4 lg:w-2/4 xl:w-3/5`}
      >
        <Input type="text" icon={IoMdMail} placeholder="E-mail" />
        <Input type="text" icon={FaLock} placeholder="Senha" />
      </div>

      <Link className="mt-5 text-xl font-semibold" href="/forgot-pass">
        Esqueci minha senha
      </Link>

      <button className="w-48 h-14 mt-6 font-semibold bg-price-color rounded-lg cursor-pointer text-bg_form_color hover:opacity-70">
        Entrar
      </button>

      <p className="mt-8 text-xl font-semibold">Ainda não possui uma conta?</p>

      <button
        className="w-48 h-14 mt-5 font-semibold bg-gray-500 rounded-lg cursor-pointer text-bg_form_color hover:opacity-70"
        type="button"
        onClick={() => router.push("/signup")}
      >
        Cadastre-se
      </button>
    </form>
  );
}
