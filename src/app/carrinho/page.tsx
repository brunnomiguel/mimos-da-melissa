import Link from "next/link";

export default function Cart() {
  return (
    <div className="pb-10 min-h-80-vh border-b-2 border-b-text-900 border-opacity-50 px-4">
      <h1 className="w-full mt-6 mb-6 text-center font-bold text-3xl">
        Carrinho de compras
      </h1>

      <div className="w-full max-w-1380 mx-auto flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-medium">Carrinho vazio!</h2>

        <p className="text-lg text-center">
          Você ainda não está logado(a) em nossa plataforma.
        </p>

        <p className="text-lg text-center">
          Que tal fazer o seu login para aproveitar as nossas ofertas?
        </p>

        <Link
          className="w-44 h-12 flex items-center justify-center rounded-md bg-pink-900 text-white font-semibold text-lg hover:opacity-80"
          href="/login"
        >
          Entrar
        </Link>

        <Link
          className="w-44 h-12 flex items-center justify-center rounded-md bg-white text-text-900 font-medium text-lg border-2 border-pink-900 hover:bg-pink-900 hover:text-white"
          href="/cadastro"
        >
          Inscrever-se
        </Link>
      </div>
    </div>
  );
}
