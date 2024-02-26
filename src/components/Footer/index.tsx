import Link from "next/link";
import Image from "next/image";

import imagePix from "../../../public/pix.png";
import imageBoleto from "../../../public/boleto.png";
import imageGoogle from "../../../public/google-secure.svg";
import imageMandaBem from "../../../public/manda-bem.png";
import imageCorreios from "../../../public/correios.png";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const linkWhatsapp: string = "https://wa.me/message/TYVKBL6PIX7TL1";
const linkInstagram: string =
  "https://www.instagram.com/mimosdamelissa_?igsh=MXE3czZwNWZzYmpkbg%3D%3D&utm_source=qr";

export function Footer() {
  return (
    <footer className="w-full px-4 py-10 mt-4">
      <ul className="w-full max-w-1380 mr-auto ml-auto flex flex-wrap items-baseline gap-4 justify-between">
        <li className="basis-80 flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-xl md:text-2xl">Navegação</h4>

          <Link className="text-base font-medium hover:opacity-80" href="/">
            Início
          </Link>
          <Link className="text-base font-medium hover:opacity-80" href="/">
            Quem Somos
          </Link>
          <Link className="text-base font-medium hover:opacity-80" href="/">
            Login
          </Link>
          <Link className="text-base font-medium hover:opacity-80" href="/">
            Cadastro
          </Link>
          <Link className="text-base font-medium hover:opacity-80" href="/">
            Meus Pedidos
          </Link>
          <Link className="text-base font-medium hover:opacity-80" href="/">
            Produtos
          </Link>
          <Link className="text-base font-medium hover:opacity-80" href="/">
            Política de Privacidade
          </Link>
        </li>

        <li className="basis-80 flex flex-col items-center gap-2 md:items-start">
          <h4 className="font-semibold text-xl md:text-2xl">
            Informação Legal
          </h4>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://transparencyreport.google.com/safe-browsing/search?url=www.mimosdamelissa.com.br"
          >
            <Image
              className="cursor-pointer"
              src={imageGoogle}
              alt="Imagem Google de Site Seguro"
            />
          </Link>
        </li>

        <div className="basis-80 flex flex-col items-center gap-3 md:items-start">
          <li className="flex flex-col items-center md:items-start">
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
          </li>
          <li className="flex flex-col items-center md:items-start">
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
          </li>
        </div>

        <li className="basis-80 flex flex-col items-center gap-2 md:items-start">
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
        </li>
      </ul>
    </footer>
  );
}
