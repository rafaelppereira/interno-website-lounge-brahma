import {
  Mail,
  MapPin,
  Menu,
  Minus,
  Phone,
  Plus,
  Ticket,
  User,
} from 'lucide-react'
import { useEffect } from 'react'
import { FaFacebookF, FaRegImages, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { GrSchedulePlay } from 'react-icons/gr'
import { HiOutlineTicket } from 'react-icons/hi2'
import { IoHelpCircleOutline } from 'react-icons/io5'
import { MdOutlineEmojiEvents } from 'react-icons/md'
import { PiInstagramLogoThin } from 'react-icons/pi'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { cn } from '../../@config/lib/cn'
import { Game, nextGamesList } from '../../@config/utils/next-games-list'
import { Footer } from '../../components/footer'
import { Reveal } from '../../components/reveal'
import { Button } from '../../components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../../components/ui/sheet'

export function TicketPage() {
  const { slug } = useParams()
  const gameInfo: Game | undefined = nextGamesList.find(
    (game) => game.slug === slug,
  )

  const navigate = useNavigate()

  const { hash } = useLocation()

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <main className="min-h-screen text-zinc-100">
      <header className="z-40">
        {/* Menu alternativa + Mobile */}
        <div className="fixed left-0 top-0 z-40 flex h-20 w-full items-center justify-between border-b border-zinc-800 bg-zinc-950/90 px-4 backdrop-blur-sm lg:px-20">
          <Link to="/">
            <img
              className="h-12"
              alt="Logo Lounge Brahma"
              src="https://loungebrahma.com.br/wp-content/themes/lounge-brahma/assets/images/logo-lounge-brahma-branco.png"
            />
          </Link>

          <div className="flex items-center gap-6">
            <nav className="item-center hidden gap-5 font-semibold text-zinc-100 lg:flex">
              <Link
                to="/#proximos-jogos"
                title="Próximos jogos"
                className={cn(
                  'py-2 transition-all hover:brightness-75',
                  hash === '#proximos-jogos' && 'text-red-500',
                )}
              >
                Próximos jogos
              </Link>

              <Link
                to="/#galeria"
                title="Galeria"
                className={cn(
                  'py-2 transition-all hover:brightness-75',
                  hash === '#galeria' && 'text-red-500',
                )}
              >
                Galeria
              </Link>

              <Link
                to="/#faca-seu-evento"
                title="Faça seu evento"
                className={cn(
                  'py-2 transition-all hover:brightness-75',
                  hash === '#faca-seu-evento' && 'text-red-500',
                )}
              >
                Faça seu evento
              </Link>

              <Link
                to="/#perguntas-frequentes"
                title="Pergutas frequentes"
                className={cn(
                  'py-2 transition-all hover:brightness-75',
                  hash === '#perguntas-frequentes' && 'text-red-500',
                )}
              >
                Perguntas frequentes
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Button
                type="button"
                title="Minha conta"
                className="rounded-none bg-gradient-to-r from-yellow-400 to-yellow-600 font-semibold text-zinc-700 transition-all hover:brightness-75"
              >
                <User className="mr-2 size-4" />
                Minha conta
              </Button>

              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    size="icon"
                    type="button"
                    className="flex lg:hidden"
                    title="Clique para abrir o menu lateral"
                  >
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>

                <SheetContent className="border-zinc-800 bg-zinc-950">
                  <div className="pointer-events-none flex select-none items-center justify-center gap-4">
                    <img
                      alt="Logo do Lounge Brahma"
                      className="size-20 object-contain"
                      src="https://loungebrahma.com.br/wp-content/themes/lounge-brahma/assets/images/logo-lounge-brahma-branco.png"
                    />
                  </div>

                  <nav className="mt-4 flex flex-col gap-3 text-zinc-200">
                    <Link
                      to="/#proximos-jogos"
                      title="Próximos jogos"
                      className="flex items-center gap-3 rounded-sm bg-zinc-900 px-4 py-3 transition-all hover:brightness-75"
                    >
                      <HiOutlineTicket className="size-6" />
                      Próximos jogos
                    </Link>

                    <Link
                      to="/#galeria"
                      title="Galeria"
                      className="flex items-center gap-4 rounded-sm bg-zinc-900 px-4 py-3 transition-all hover:brightness-75"
                    >
                      <FaRegImages className="size-5" />
                      Galeria
                    </Link>

                    <Link
                      to="/#faca-seu-evento"
                      title="Faça seu evento"
                      className="flex items-center gap-4 rounded-sm bg-zinc-900 px-4 py-3 transition-all hover:brightness-75"
                    >
                      <MdOutlineEmojiEvents className="size-5" />
                      Faça seu evento
                    </Link>

                    <Link
                      to="/#perguntas-frequentes"
                      title="Pergutas frequentes"
                      className="flex items-center gap-4 rounded-sm bg-zinc-900 px-4 py-3 transition-all hover:brightness-75"
                    >
                      <IoHelpCircleOutline className="size-5" />
                      Perguntas frequentes
                    </Link>
                  </nav>

                  <div className="my-7 flex flex-row gap-3">
                    <Link
                      to=""
                      target="_blank"
                      title="Clique para visitar nosso Instagram"
                      className="flex size-10 items-center justify-center rounded-full border text-zinc-100 transition-all hover:bg-red-600 hover:text-white hover:brightness-75"
                    >
                      <PiInstagramLogoThin className="size-5" />
                    </Link>

                    <Link
                      to=""
                      target="_blank"
                      title="Clique para visitar nosso Facebook"
                      className="hover:bg-brand-gold-500 flex size-10 items-center justify-center rounded-full border text-zinc-300 transition-all hover:text-white hover:brightness-75"
                    >
                      <FaFacebookF className="size-5" />
                    </Link>

                    <Link
                      to=""
                      target="_blank"
                      title="Clique para visitar nosso Youtube"
                      className="flex size-10 items-center justify-center rounded-full border text-zinc-300 transition-all hover:bg-red-600 hover:text-white hover:brightness-75"
                    >
                      <FaYoutube className="size-5" />
                    </Link>
                  </div>

                  <div className="text-sm text-zinc-500">
                    <h2>
                      @{new Date().getFullYear()} | Todos os direitos reservados
                      -{' '}
                      <Link
                        to="/"
                        target="_blank"
                        className="text-blue-500 underline"
                      >
                        Termos de serviço
                      </Link>{' '}
                      &{' '}
                      <Link
                        to="/"
                        target="_blank"
                        className="text-blue-500 underline"
                      >
                        Política de privacidade
                      </Link>
                    </h2>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-[url(https://loungebrahma.com.br/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-13-at-10.26.52.jpeg)] bg-cover bg-center bg-no-repeat">
        <div className="relative flex h-full w-full justify-center bg-gradient-to-t from-zinc-950 via-zinc-800/80 to-zinc-700/90 px-4 pb-[8rem] pt-[calc(7rem+4rem)] lg:px-20">
          <div className="absolute left-0 top-[calc(50%+2.5rem)] hidden h-40 w-7 -translate-y-1/2 bg-red-700 lg:block" />
          <div className="absolute right-0 top-[calc(50%+2.5rem)] hidden h-40 w-7 -translate-y-1/2 bg-gradient-to-b from-yellow-400 to-yellow-600 lg:block" />

          <Reveal>
            <div className="flex flex-col items-center">
              <div className="flex justify-center">
                <h2 className="text-md flex items-center gap-3 rounded-full bg-red-600 px-3 py-1 font-semibold uppercase text-white">
                  <GrSchedulePlay className="size-4" />
                  {gameInfo?.date}
                </h2>
              </div>

              <div className="mt-4 flex items-center gap-5 text-zinc-200">
                <div className="flex flex-col-reverse items-center gap-3 md:gap-7 xl:flex-row">
                  <h2 className="text-md font-bold uppercase tracking-tight md:text-xl lg:text-3xl">
                    CORINTRIANS
                  </h2>
                  <img
                    alt="Escudo do Corinthians"
                    src="/escudos/corinthians.png"
                    className="pointer-events-none size-24 select-none object-contain"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text font-semibold text-transparent">
                    Início do jogo
                  </span>
                  <span>{gameInfo?.startGameTime.replace('Jogo:', '')}</span>
                </div>

                <div className="flex flex-col items-center gap-3 md:gap-7 xl:flex-row">
                  <img
                    alt="Escudo do time"
                    src={gameInfo?.shieldTime}
                    className="pointer-events-none size-24 select-none object-contain"
                  />
                  <h2 className="text-md font-bold uppercase tracking-tight md:text-xl lg:text-3xl">
                    {gameInfo?.opponent}
                  </h2>
                </div>
              </div>

              <div className="mt-7 hidden items-center justify-between gap-10 rounded-sm bg-zinc-900/80 px-5 py-4 text-zinc-200 lg:inline-flex">
                <h2 className="font-semibold uppercase">Início do jogo</h2>

                <div className="flex items-center gap-3">
                  <div className="flex w-20 flex-col items-center rounded-sm bg-zinc-800 p-2">
                    <span className="text-3xl font-bold">12</span>
                    <h2 className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-sm text-transparent">
                      Dias
                    </h2>
                  </div>

                  <div className="text-3xl">:</div>

                  <div className="flex w-20 flex-col items-center rounded-sm bg-zinc-800 p-2">
                    <span className="text-3xl font-bold">4</span>
                    <h2 className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-sm text-transparent">
                      Horas
                    </h2>
                  </div>

                  <div className="text-3xl">:</div>

                  <div className="flex w-20 flex-col items-center rounded-sm bg-zinc-800 p-2">
                    <span className="text-3xl font-bold">45</span>
                    <h2 className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-xs text-transparent">
                      Minutos
                    </h2>
                  </div>

                  <div className="text-3xl">:</div>

                  <div className="flex w-20 flex-col items-center rounded-sm bg-zinc-800 p-2">
                    <span className="text-3xl font-bold">22</span>
                    <h2 className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-xs text-transparent">
                      Segundos
                    </h2>
                  </div>
                </div>
              </div>

              <Button
                type="button"
                onClick={() => navigate('/carrinho')}
                className="mt-10 flex rounded-none bg-gradient-to-b from-yellow-400 to-yellow-600 text-zinc-800 lg:hidden"
              >
                <Ticket className="mr-2 size-4" />
                Comprar ingressos
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rounded-br-[3rem] bg-zinc-950 px-4 pb-14 pt-5 md:rounded-br-[5rem] lg:px-20">
        <Reveal>
          <div className="flex justify-center">
            <div className="flex items-start gap-3">
              <HiOutlineTicket className="relative top-1 size-5" />
              <h2 className="max-w-lg">
                Para comprar os ingressos, selecione o tipo desejado abaixo e
                preencha as informações no formulário
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-20">
          <h2 className="mb-5 border-l-4 border-l-red-700 pl-5 text-xl font-bold uppercase md:text-2xl">
            Tipos de ingressos
          </h2>

          <Swiper
            breakpoints={{
              800: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            loop
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            spaceBetween={30}
            modules={[Autoplay]}
            autoplay={{
              delay: 8000,
            }}
          >
            <SwiperSlide>
              <Reveal>
                <div className="w-full rounded-sm border-t-8 border-red-700 bg-zinc-900 pb-4">
                  <img
                    alt="Foto do Lounge Brahma"
                    className="h-60 w-full object-cover"
                    src="https://loungebrahma.com.br/wp-content/uploads/2024/10/Lounge-Brahma-Corinthians-x-Internacional-142-768x512.webp"
                  />

                  <div className="mt-3 px-4">
                    <div className="flex flex-col">
                      <span className="text-2xl font-extrabold line-through">
                        R$ 720,00
                      </span>
                      <span className="text-md bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text font-semibold text-transparent">
                        R$ 550,00
                      </span>

                      <h2 className="mt-3 text-xl font-bold">
                        Experiência Lounge Brahma
                      </h2>

                      <p className="text-zinc-300">
                        Você merece o melhor para acompanhar o timão
                      </p>
                    </div>

                    <div className="mt-10 flex flex-col">
                      <div className="border-b border-zinc-800 py-2">
                        Assento básico
                      </div>
                      <div className="border-b border-zinc-800 py-2">
                        Acesso ao museu do Corinthians
                      </div>

                      <div className="border-b border-zinc-800 py-2">
                        Categoria premium de bebidas
                      </div>

                      <div className="border-b border-zinc-800 py-2">
                        Acesso a área VIP
                      </div>

                      <div className="border-b border-zinc-800 py-2">
                        Assentos cobertos e privilegiados
                      </div>

                      <div className="border-b border-zinc-800 py-2">
                        Serviços personalizados
                      </div>
                    </div>

                    <div className="mt-10 space-y-2">
                      <h2>Quantidade</h2>

                      <div className="flex items-center gap-2">
                        <Button
                          disabled
                          size="icon"
                          type="button"
                          className="size-12 shrink-0 rounded-sm bg-zinc-800"
                        >
                          <Minus className="size-4" />
                        </Button>

                        <div className="flex h-12 w-full items-center justify-center rounded-sm bg-zinc-800 font-semibold">
                          1 ingresso
                        </div>

                        <Button
                          disabled
                          size="icon"
                          type="button"
                          className="size-12 shrink-0 rounded-sm bg-zinc-800"
                        >
                          <Plus className="size-4" />
                        </Button>
                      </div>
                    </div>

                    <Button
                      type="button"
                      title="Clique para comprar o ingresso"
                      onClick={() => navigate('/carrinho')}
                      className="mt-5 h-12 w-full rounded-none bg-gradient-to-b from-yellow-400 to-yellow-600 font-semibold uppercase text-zinc-700"
                    >
                      <Ticket className="mr-2 size-4" />
                      Comprar ingresso
                    </Button>
                  </div>
                </div>
              </Reveal>
            </SwiperSlide>
            <SwiperSlide>
              <Reveal>
                <div className="w-full rounded-sm border-t-8 border-red-700 bg-zinc-900 pb-4">
                  <img
                    alt="Foto do Lounge Brahma"
                    className="h-60 w-full object-cover"
                    src="https://faroag.com.br/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-20-at-16.08.10-2.jpeg"
                  />

                  <div className="mt-3 px-4">
                    <div className="flex flex-col">
                      <span className="text-2xl font-extrabold line-through">
                        R$ 650,00
                      </span>
                      <span className="text-md bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text font-semibold text-transparent">
                        R$ 500,00
                      </span>
                      <h2 className="mt-3 text-xl font-bold">Fiel torcedor</h2>

                      <p className="text-zinc-300">
                        Você merece o melhor para acompanhar o timão
                      </p>
                    </div>

                    <div className="mt-10 flex flex-col">
                      <div className="border-b border-zinc-800 py-2">
                        Assento básico
                      </div>
                      <div className="border-b border-zinc-800 py-2">
                        Acesso ao museu do Corinthians
                      </div>

                      <div className="border-b border-zinc-800 py-2">
                        Categoria premium de bebidas
                      </div>

                      <div className="border-b border-zinc-800 py-2">
                        Acesso a área VIP
                      </div>

                      <div className="border-b border-zinc-800 py-2">
                        Assentos cobertos e privilegiados
                      </div>

                      <div className="border-b border-zinc-800 py-2">
                        Serviços personalizados
                      </div>
                    </div>

                    <div className="mt-10 space-y-2">
                      <h2>Quantidade</h2>

                      <div className="flex items-center gap-2">
                        <Button
                          disabled
                          size="icon"
                          type="button"
                          className="size-12 shrink-0 rounded-sm bg-zinc-800"
                        >
                          <Minus className="size-4" />
                        </Button>

                        <div className="flex h-12 w-full items-center justify-center rounded-sm bg-zinc-800 font-semibold">
                          1 ingresso
                        </div>

                        <Button
                          disabled
                          size="icon"
                          type="button"
                          className="size-12 shrink-0 rounded-sm bg-zinc-800"
                        >
                          <Plus className="size-4" />
                        </Button>
                      </div>
                    </div>

                    <Button
                      type="button"
                      title="Clique para comprar o ingresso"
                      onClick={() => navigate('/carrinho')}
                      className="mt-5 h-12 w-full rounded-none bg-gradient-to-b from-yellow-400 to-yellow-600 font-semibold uppercase text-zinc-700"
                    >
                      <Ticket className="mr-2 size-4" />
                      Comprar ingresso
                    </Button>
                  </div>
                </div>
              </Reveal>
            </SwiperSlide>
            <SwiperSlide>
              <Reveal>
                <div className="w-full rounded-sm border-t-8 border-red-700 bg-zinc-900 pb-4">
                  <img
                    alt="Foto do Lounge Brahma"
                    className="h-60 w-full object-cover"
                    src="https://static.athletico.com.br/wp-content/uploads/2024/10/05110535/ChoperiaArenaBrahma-2.jpg"
                  />

                  <div className="mt-3 px-4">
                    <div className="flex flex-col">
                      <span className="text-2xl font-extrabold line-through">
                        R$ 300,00
                      </span>
                      <span className="text-md bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text font-semibold text-transparent">
                        R$ 250,00
                      </span>
                      <h2 className="mt-3 text-xl font-bold">
                        Infantil até 11 anos
                      </h2>

                      <p className="text-zinc-300">
                        Você merece o melhor para acompanhar o timão
                      </p>
                    </div>

                    <div className="mt-10 flex flex-col">
                      <div className="border-b border-zinc-800 py-2">
                        Assento básico
                      </div>
                      <div className="border-b border-zinc-800 py-2">
                        Acesso ao museu do Corinthians
                      </div>

                      <div className="border-b border-zinc-800 py-2">
                        Categoria premium de bebidas
                      </div>

                      <div className="border-b border-zinc-800 py-2">
                        Acesso a área VIP
                      </div>

                      <div className="border-b border-zinc-800 py-2">
                        Assentos cobertos e privilegiados
                      </div>

                      <div className="border-b border-zinc-800 py-2">
                        Serviços personalizados
                      </div>
                    </div>

                    <div className="mt-10 space-y-2">
                      <h2>Quantidade</h2>

                      <div className="flex items-center gap-2">
                        <Button
                          disabled
                          size="icon"
                          type="button"
                          className="size-12 shrink-0 rounded-sm bg-zinc-800"
                        >
                          <Minus className="size-4" />
                        </Button>

                        <div className="flex h-12 w-full items-center justify-center rounded-sm bg-zinc-800 font-semibold">
                          1 ingresso
                        </div>

                        <Button
                          disabled
                          size="icon"
                          type="button"
                          className="size-12 shrink-0 rounded-sm bg-zinc-800"
                        >
                          <Plus className="size-4" />
                        </Button>
                      </div>
                    </div>

                    <Button
                      type="button"
                      title="Clique para comprar o ingresso"
                      onClick={() => navigate('/carrinho')}
                      className="mt-5 h-12 w-full rounded-none bg-gradient-to-b from-yellow-400 to-yellow-600 font-semibold uppercase text-zinc-700"
                    >
                      <Ticket className="mr-2 size-4" />
                      Comprar ingresso
                    </Button>
                  </div>
                </div>
              </Reveal>
            </SwiperSlide>
            <SwiperSlide>
              <Reveal>
                <div className="w-full rounded-sm border-t-8 border-red-700 bg-zinc-900 pb-4">
                  <img
                    alt="Foto do Lounge Brahma"
                    className="h-60 w-full object-cover"
                    src="https://static.corinthians.com.br/img/arena/brahma-lounge/brahma-lounge-hospitalidade-3.jpg"
                  />

                  <div className="mt-3 px-4">
                    <div className="flex flex-col">
                      <span className="text-2xl font-extrabold line-through">
                        R$ 4200,00
                      </span>
                      <span className="text-md bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text font-semibold text-transparent">
                        R$ 3100,00
                      </span>

                      <h2 className="mt-3 text-xl font-bold">
                        Família Corinthiana
                      </h2>

                      <p className="text-zinc-300">
                        Você merece o melhor para acompanhar o timão
                      </p>
                    </div>

                    <div className="mt-10 flex flex-col">
                      <div className="border-b border-zinc-800 py-2">
                        Assento básico
                      </div>
                      <div className="border-b border-zinc-800 py-2">
                        Acesso ao museu do Corinthians
                      </div>

                      <div className="border-b border-zinc-800 py-2">
                        Categoria premium de bebidas
                      </div>

                      <div className="border-b border-zinc-800 py-2">
                        Acesso a área VIP
                      </div>

                      <div className="border-b border-zinc-800 py-2">
                        Assentos cobertos e privilegiados
                      </div>

                      <div className="border-b border-zinc-800 py-2">
                        Serviços personalizados
                      </div>
                    </div>

                    <div className="mt-10 space-y-2">
                      <h2>Quantidade</h2>

                      <div className="flex items-center gap-2">
                        <Button
                          disabled
                          size="icon"
                          type="button"
                          className="size-12 shrink-0 rounded-sm bg-zinc-800"
                        >
                          <Minus className="size-4" />
                        </Button>

                        <div className="flex h-12 w-full items-center justify-center rounded-sm bg-zinc-800 font-semibold">
                          1 ingresso
                        </div>

                        <Button
                          disabled
                          size="icon"
                          type="button"
                          className="size-12 shrink-0 rounded-sm bg-zinc-800"
                        >
                          <Plus className="size-4" />
                        </Button>
                      </div>
                    </div>

                    <Button
                      type="button"
                      title="Clique para comprar o ingresso"
                      onClick={() => navigate('/carrinho')}
                      className="mt-5 h-12 w-full rounded-none bg-gradient-to-b from-yellow-400 to-yellow-600 font-semibold uppercase text-zinc-700"
                    >
                      <Ticket className="mr-2 size-4" />
                      Comprar ingresso
                    </Button>
                  </div>
                </div>
              </Reveal>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="flex flex-col items-start gap-10 bg-zinc-50 px-4 py-14 lg:flex-row lg:px-20 xl:items-center">
        <div className="flex-1 overflow-hidden">
          <Reveal>
            <img
              alt="Imagem do Lounge Brahma"
              className="w-full select-none rounded-sm border-4 border-zinc-200 transition-all duration-500 hover:scale-105"
              src="https://static.corinthians.com.br/img/arena/brahma-lounge/brahma-lounge-hospitalidade-2.jpg"
            />
          </Reveal>
        </div>
        <div className="flex-[1.8] xl:flex-1">
          <Reveal>
            <h2 className="text-md font-extrabold text-red-700 md:text-xl">
              A CREMOSIDADE BRAHMA E A LOUCURA CORINTHIANA JUNTAS NO MELHOR
              LUGAR DA NEO QUÍMICA ARENA
            </h2>
          </Reveal>

          <Reveal>
            <p className="mt-4 text-lg text-zinc-700">
              No Camarote Lounge Brahma, localizado no 8º andar Neo Química
              Arena, você tem a melhor visão do jogo e a disponibilização de
              serviços exclusivos e premium.
              <br />
              <br />
              O Camarote conta com área de descanso, banheiros exclusivos e
              sistema de atendimento diferenciado para os torcedores mais VIPs
              do bando de loucos!
              <br />
              <br />
              Venha curtir a vitória do Timão e comemorar com os amigos
              desfrutando do chopp mais cremoso, gelado, de sabor único, não
              pasteurizado, feito com ingredientes de qualidade e mais de 130
              anos de tradição.
              <br />
              <br />
              Chopp Brahma. Chopp de verdade!
            </p>
          </Reveal>
        </div>
      </section>

      <section className="rounded-tl-[3rem] bg-zinc-900 px-4 py-14 md:rounded-tl-[5rem] lg:px-20">
        <h2 className="mb-5 border-l-4 border-l-red-700 pl-5 text-xl font-bold uppercase text-zinc-200 md:text-2xl">
          Como chegar na arena
        </h2>{' '}
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="w-full flex-[1.5]">
            <Reveal>
              <iframe
                width="100%"
                height="450"
                loading="lazy"
                className="rounded-sm"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6437214071066!2d-46.476809488786905!3d-23.54531337872251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce66dec98fb855%3A0xf2b061ffbcd2ecf8!2sNeo%20Qu%C3%ADmica%20Arena!5e0!3m2!1spt-BR!2sbr!4v1736974441012!5m2!1spt-BR!2sbr"
              />
            </Reveal>
          </div>

          <div className="w-full flex-1">
            <Reveal>
              <h2 className="text-2xl font-bold text-zinc-200">
                Nossos contatos
              </h2>

              <div className="mt-4 space-y-2.5">
                <div className="flex items-center gap-2 text-zinc-100">
                  <div className="flex size-10 items-center justify-center rounded-sm bg-zinc-800 text-zinc-100">
                    <FaWhatsapp className="size-5" />
                  </div>
                  +55 11 99802-2480
                </div>

                <div className="flex items-center gap-2 text-zinc-100">
                  <div className="flex size-10 items-center justify-center rounded-sm bg-zinc-800 text-zinc-100">
                    <Phone className="size-5" />
                  </div>
                  +55 11 3291-1280
                </div>

                <div className="flex items-center gap-2 text-zinc-100">
                  <div className="flex size-10 items-center justify-center rounded-sm bg-zinc-800 text-zinc-100">
                    <Mail className="size-5" />
                  </div>
                  contato@loungebrahma.com.br
                </div>
              </div>

              <Button
                type="button"
                className="mt-5 rounded-none bg-gradient-to-r from-yellow-400 to-yellow-600 uppercase text-zinc-900"
                title="Clique para criar uma rota até a arena"
              >
                <MapPin className="mr-2 size-4" />
                Criar rota até a arena
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
