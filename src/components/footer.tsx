import { format } from 'date-fns'
import { PiFacebookLogo, PiInstagramLogo, PiWhatsappLogo } from 'react-icons/pi'
import { Link, useLocation } from 'react-router-dom'

import { cn } from '../@config/lib/cn'

export function Footer() {
  const { pathname } = useLocation()

  return (
    <footer className="bg-zinc-900">
      <div className="bg-zinc-800">
        <div className="flex flex-col gap-7 px-8 py-6 lg:flex-row lg:items-center lg:px-20 lg:py-4">
          <Link
            to="/"
            title="Clique para voltar ao início"
            className="shrink-0"
          >
            <img
              className="h-12"
              alt="Logo Lounge Brahma"
              src="https://loungebrahma.com.br/wp-content/themes/lounge-brahma/assets/images/logo-lounge-brahma-branco.png"
            />
          </Link>

          <p className="text-md font-medium text-zinc-200">
            No Lounge Brahma você não perde nenhum detalhe dos jogos do timão,
            pois contamos com um posicionamento estratégico e centralizado na
            Neo Quimíca Arena. Pensando em oferecer a melhor experiência,
            disponibilizamos em todos os nossos eventos um saboroso Open Food,
            com variado cardápio para agradar todos os paladares, e Open Bar com
            drinks, refrigerantes, sucos e o incomparável Chopp Brahma.
          </p>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-10 px-8 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 lg:px-20">
        <div className="flex">
          <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
            <h1 className="text-xl font-semibold text-zinc-200">Menu</h1>

            <div className="mt-4 flex flex-col gap-2 text-zinc-200">
              <Link
                to="/#proximos-jogos"
                title="Próximos jogos"
                className={cn(
                  'flex items-center gap-2 transition-all hover:ml-2',
                  pathname === '/' && 'font-semibold text-red-500',
                )}
              >
                Próximos jogos
              </Link>

              <Link
                to="/galeria"
                title="Galeria"
                className={cn(
                  'flex items-center gap-2 transition-all hover:ml-2',
                  pathname === '/' && 'font-semibold text-red-500',
                )}
              >
                Galeria
              </Link>

              <Link
                to="/cadeiras-cativas"
                title="Cadeira cativa"
                className={cn(
                  'flex items-center gap-2 transition-all hover:ml-2',
                  pathname === '/' && 'font-semibold text-red-500',
                )}
              >
                Cadeira cativa
              </Link>

              <Link
                to="/faca-seu-evento"
                title="Faça seu evento"
                className={cn(
                  'flex items-center gap-2 transition-all hover:ml-2',
                  pathname === '/' && 'font-semibold text-red-500',
                )}
              >
                Faça seu evento
              </Link>

              <Link
                title="FAQ"
                to="/#perguntas-frequentes"
                className={cn(
                  'flex items-center gap-2 transition-all hover:ml-2',
                  pathname === '/' && 'font-semibold text-red-500',
                )}
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
            <h1 className="text-xl font-semibold text-zinc-200">
              Redes sociais
            </h1>

            <div className="mt-4 flex flex-col gap-2 text-zinc-200">
              <Link
                to=""
                target="_blank"
                title="Clique para ir ao nosso Instagram"
                className="flex items-center gap-2 transition-all hover:ml-2"
              >
                <PiInstagramLogo className="size-6" />
                Instagram
              </Link>
              <Link
                to=""
                target="_blank"
                title="Clique para ir ao nosso Facebook"
                className="flex items-center gap-2 transition-all hover:ml-2"
              >
                <PiFacebookLogo className="size-6" />
                Facebook
              </Link>

              <Link
                to=""
                target="_blank"
                title="Clique para ir ao nosso WhatsApp"
                className="flex items-center gap-2 transition-all hover:ml-2"
              >
                <PiWhatsappLogo className="size-6" />
                WhatsApp
              </Link>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
            <h1 className="text-xl font-semibold text-zinc-200">Contato</h1>
            <div className="mt-4 flex flex-col gap-2 text-zinc-200">
              <Link
                to=""
                target="_blank"
                className="flex items-center gap-2 transition-all hover:ml-2"
                title="Clique para ir ao nosso E-mail"
              >
                E-mail
              </Link>

              <Link
                to=""
                target="_blank"
                className="flex items-center gap-2 transition-all hover:ml-2"
                title="Clique para ir ao nosso WhatsApp"
              >
                WhatsApp
              </Link>

              <Link
                to=""
                target="_blank"
                className="flex items-center gap-2 transition-all hover:ml-2"
                title="Clique para ir ao nosso endereço"
              >
                Endereço
              </Link>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
            <h1 className="text-xl font-semibold text-zinc-200">Newsletter</h1>
            <p className="mt-2 text-sm text-zinc-200">
              Receba as últimas novidades
            </p>

            <input
              type="text"
              placeholder="Digite seu melhor e-mail"
              className="mt-3 h-10 rounded-md bg-zinc-800 px-4 text-sm text-zinc-200 outline-none transition-all placeholder:text-sm focus:ring-4 focus:ring-red-600 md:w-full"
            />
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center justify-center border-t border-t-zinc-700 py-4 text-xs text-white lg:flex-row">
        @{format(new Date(), 'yyyy')} Lounge Brahma | Todos os direitos
        reservados
        <span className="ml-1">
          - Desenvolvido por{' '}
          <Link to="" target="_blank" className="underline underline-offset-2">
            {' '}
            RP Desenvolvimentos
          </Link>
        </span>
      </div>
    </footer>
  )
}
