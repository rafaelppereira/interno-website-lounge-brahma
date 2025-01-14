import { User } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '../ui/button'

export function Header() {
  return (
    <header className="fixed left-0 top-0 w-full">
      <div className="w-full bg-zinc-800">
        <div className="container flex h-10 items-center justify-between">
          <div className="flex items-center text-sm font-semibold text-zinc-300">
            <h2 className="mr-3 border-r border-r-zinc-500 pr-3">
              contato@loungebrahma.com.br
            </h2>
            <span>(11) 99702-2394</span>
          </div>

          <div>
            <img
              alt="Bandeira do Brasil"
              className="size-6 rounded-full border-2 border-zinc-500 object-cover"
              src="https://static.vecteezy.com/ti/vetor-gratis/p1/8513713-ilustracaoial-realista-ondulada-brazil-bandeira-fundo-brasil-independence-day-gratis-vetor.jpg"
            />
          </div>
        </div>
      </div>
      <div className="border-b-4 border-red-800 bg-red-700">
        <div className="container flex h-24 items-center justify-between">
          <Link to="/" title="Clique para ir até a tela inicial">
            <img
              alt="Logo do Lounge Brahma"
              className="pointer-events-none h-14 select-none"
              src="https://loungebrahma.com.br/wp-content/themes/lounge-brahma/assets/images/logo-lounge-brahma-branco.png"
            />
          </Link>

          <nav className="item-center flex gap-5 font-semibold text-zinc-100">
            <Link
              to="/#proximos-jogos"
              title="Próximos jogos"
              className="py-2 transition-all hover:brightness-75"
            >
              Próximos jogos
            </Link>
            <Link
              to="/cadeiras-cativas"
              title="Cadeira cativa - Camarote Lounge Brahma"
              className="py-2 transition-all hover:brightness-75"
            >
              Cadeira cativa - Camarote Lounge Brahma
            </Link>
            <Link
              to="/faca-seu-evento"
              title="Faça seu evento"
              className="py-2 transition-all hover:brightness-75"
            >
              Faça seu evento
            </Link>
            <Link
              to="/perguntas-frequentes"
              title="Pergutas frequentes"
              className="py-2 transition-all hover:brightness-75"
            >
              FAQ
            </Link>

            <Button
              type="button"
              title="Minha conta"
              className="bg-zinc-800 font-semibold"
            >
              <User className="mr-2 size-4" />
              Minha conta
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
