import Link from "next/link";

import { FaCreditCard } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full max-w-screen-2xl ml-auto mr-auto p-8 flex flex-wrap">
      <div className="flex flex-col basis-56 grow shrink">
        <h3 className="text-2xl mb-2 font-semibold text-text_color">
          Navegação
        </h3>
        <ul className="flex flex-col gap-1">
          <Link
            className="text-lg text-text_color hover:font-semibold"
            href="/"
          >
            Início
          </Link>
          <Link
            className="text-lg text-text_color hover:font-semibold"
            href="/shop/products"
          >
            Produtos
          </Link>
          <Link
            className="text-lg text-text_color hover:font-semibold"
            href="/about"
          >
            Sobre
          </Link>
          <Link
            className="text-lg text-text_color hover:font-semibold"
            href="/signin"
          >
            Login
          </Link>
          <Link
            className="text-lg text-text_color hover:font-semibold"
            href="/signup"
          >
            Cadastro
          </Link>
        </ul>
      </div>
      <div className="basis-56 grow shrink">
        <div>
          <h3 className="text-2xl mb-2 font-semibold text-text_color">
            Métodos de Pagamento
          </h3>
          <div className="flex flex-wrap items-center justify-start gap-2">
            {Array.from({ length: 8 }, (_, index) => (
              <FaCreditCard key={index} size="2rem" fill="#4f4f4f" />
            ))}
          </div>
        </div>
        <div>
          <h3 className="mt-6 text-2xl mb-2 font-semibold text-text_color">
            Métodos de Envio
          </h3>
        </div>
      </div>
      <div className="basis-56 grow shrink">
        <div>
          <h3 className="text-2xl mb-2 font-semibold text-text_color">
            Redes Sociais
          </h3>
        </div>
        <div>
          <h3 className="mt-6 text-2xl mb-2 font-semibold text-text_color">
            Contatos
          </h3>
        </div>
      </div>
    </footer>
  );
}

/*
<a href="https://br.freepik.com/search?format=search&last_filter=query&last_value=Visa&query=Visa&type=icon">Ícone de Xinh Studio</a>
<a href="https://br.freepik.com/icone/cartao_11041055#fromView=search&term=Master+card&track=ais&page=1&position=5&uuid=06f4673d-ede5-4c6a-91a5-dc6ab3aa89d1">Ícone de Xinh Studio</a>
<a href="https://br.freepik.com/search?format=search&last_filter=query&last_value=American+express&query=American+express&type=icon">Ícone de Freepik</a>

*/
