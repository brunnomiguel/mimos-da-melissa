import Link from "next/link";
import Image from "next/image";

import imagePix from "../../../public/pix.png";
import imageBoleto from "../../../public/boleto.png";
import imageGoogle from "../../../public/google-secure.svg";
import imageMandaBem from "../../../public/manda-bem.png";
import imageCorreios from "../../../public/correios.png";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import { FooterItem } from "./FooterItem";
import { FooterLink } from "./FooterLink";
import { FooterContent } from "./FooterContent";

const linkWhatsapp: string = "https://wa.me/message/TYVKBL6PIX7TL1";
const linkInstagram: string =
  "https://www.instagram.com/mimosdamelissa_?igsh=MXE3czZwNWZzYmpkbg%3D%3D&utm_source=qr";
const linkGoogle: string =
  "https://transparencyreport.google.com/safe-browsing/search?url=www.mimosdamelissa.com.br";

export function Footer() {
  return (
    <footer className="w-full px-4 py-10 mt-4">
      <FooterContent>
        <FooterItem>
          <h4 className="font-semibold text-xl md:text-2xl">Navegação</h4>

          <FooterLink href="/">Início</FooterLink>
          <FooterLink href="/sobre">Quem somos</FooterLink>
          <FooterLink href="/login">Login</FooterLink>
          <FooterLink href="/cadastro">Cadastro</FooterLink>
          <FooterLink href="/pedidos">Meus Pedidos</FooterLink>
          <FooterLink href="/produtos">Produtos</FooterLink>
          <FooterLink href="/politica">Política de Privacidade</FooterLink>
        </FooterItem>

        <FooterItem>
          <h4 className="font-semibold text-xl md:text-2xl">
            Informação Legal
          </h4>
          <Link target="_blank" rel="noreferrer" href={linkGoogle}>
            <Image
              className="cursor-pointer"
              src={imageGoogle}
              alt="Imagem Google de Site Seguro"
            />
          </Link>
        </FooterItem>

        <FooterItem>
          <div className="flex flex-col items-center md:items-start mb-3">
            <h4 className="font-semibold text-xl md:text-2xl">
              Formas de Pagamento
            </h4>
            <div className="flex items-center gap-2 pt-2">
              <Image
                className="w-36 h-20 rounded-xl"
                src={imagePix}
                alt="Imagem de Ícone do Pix"
              />
              <Image
                className="w-36 h-20 rounded-xl"
                src={imageBoleto}
                alt="Imagem de Boleto Bancário"
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-xl md:text-2xl">
              Formas de Envio
            </h4>
            <div className="flex items-center gap-3 pt-2">
              <Image
                className="w-40 h-10 rounded-xl"
                src={imageCorreios}
                alt="Logo dos Correios"
              />
              <Image
                className="w-32 h-10 rounded-xl"
                src={imageMandaBem}
                alt="Logo do Manda Bem"
              />
            </div>
          </div>
        </FooterItem>

        <FooterItem>
          <h4 className="font-semibold text-2xl mb-2">Contatos</h4>

          <div className="flex flex-col gap-3">
            <Link
              className="p-2 gap-4 flex items-center bg-white shadow-default rounded-lg"
              target="_blank"
              rel="noreferrer"
              href={linkWhatsapp}
            >
              <FaWhatsapp size="2rem" />
              <p className="font-semibold text-xl">+55 82 99340-6492</p>
            </Link>
            <Link
              className="p-2 gap-4 flex items-center bg-white shadow-default rounded-lg"
              target="_blank"
              rel="noreferrer"
              href={linkInstagram}
            >
              <FaInstagram size="2rem" />
              <p className="font-semibold text-xl">mimosdamelissa_</p>
            </Link>
          </div>
        </FooterItem>
      </FooterContent>
    </footer>
  );
}
