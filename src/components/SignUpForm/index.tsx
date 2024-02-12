"use client";

import { Input } from "../Input";
import { useRouter } from "next/navigation";
import { menuIcons } from "@/utils/icons";
import { Button } from "@nextui-org/react";

export default function SignUpForm() {
  const router = useRouter();

  return (
    <form className="w-4/6 flex flex-col items-center justify-center bg-bg_form_color h-full">
      <h2 className="text-4xl font-semibold mt-10 mb-7">Cadastro</h2>

      <div className="flex items-center justify-center gap-3 mb-6">
        <Button
          className="h-8 rounded-full bg-price-color flex items-center justify-center"
          startContent={menuIcons.facebook}
        />
        <Button
          className="h-8 rounded-full bg-price-color flex items-center justify-center"
          startContent={menuIcons.google}
        />
        <Button
          className="h-8 rounded-full bg-price-color flex items-center justify-center"
          startContent={menuIcons.linkedin}
        />
      </div>

      <div className="w-2/5 pl-5 pr-5 gap-4 flex flex-col">
        <Input type="text" icon={menuIcons.user} placeholder="Nome" />
        <Input type="text" icon={menuIcons.email} placeholder="E-mail" />
        <Input type="password" icon={menuIcons.lock} placeholder="Senha" />
        <Input
          type="password"
          icon={menuIcons.lock}
          placeholder="Confirmação de Senha"
        />
      </div>

      <Button
        type="submit"
        className="w-48 h-14 mt-6 mb-6 font-semibold text-lg bg-price-color rounded-lg cursor-pointer text-bg_form_color"
      >
        Cadastre-se
      </Button>

      <p className="mt-8 text-xl font-semibold">Já possui uma conta?</p>

      <Button
        className="w-48 h-14 mt-5 mb-8 font-semibold text-lg bg-gray-500 rounded-lg cursor-pointer text-bg_form_color"
        type="button"
        onClick={() => router.push("/signin")}
      >
        Faça Login
      </Button>
    </form>
  );
}
