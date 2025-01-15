/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu, Mouse, Ticket, User, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { FaFacebookF, FaRegImages, FaYoutube } from 'react-icons/fa'
import { HiOutlineTicket } from 'react-icons/hi2'
import { IoHelpCircleOutline } from 'react-icons/io5'
import { MdOutlineChair, MdOutlineEmojiEvents } from 'react-icons/md'
import { PiInstagramLogoThin } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { cn } from '../../@config/lib/cn'
import { nextGamesList } from '../../@config/utils/next-games-list'
import { Button } from '../../components/ui/button'

export function HomePage() {
  const [hasActiveDesktopHeader, setHasActiveDesktopHeader] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY <= 50) {
        if (window.innerWidth >= 1024) {
          setHasActiveDesktopHeader(true)
        }
      } else {
        setHasActiveDesktopHeader(false)
      }
    })
  }, [])

  useEffect(() => {
    // const handleResize = () => {
    //   if (window.innerWidth <= 1024) {
    //     setHasActiveDesktopHeader(false)
    //   } else {
    //     setHasActiveDesktopHeader(true)
    //   }
    // }
    // window.addEventListener('resize', handleResize)
    // handleResize()
    // return () => {
    //   window.removeEventListener('resize', handleResize)
    // }
  }, [])

  return (
    <main>
      <header className="z-50">
        {/* Sidebar */}
        {hasActiveDesktopHeader && (
          <aside className="fixed left-0 top-0 z-50 h-full w-28 rounded-br-2xl border-b-4 border-r-4 border-zinc-800 bg-zinc-950/80 py-10">
            <div className="p-4">
              <img
                alt="Logo do Lounge Brahma"
                src="https://loungebrahma.com.br/wp-content/themes/lounge-brahma/assets/images/logo-lounge-brahma-branco.png"
              />
            </div>

            <nav className="mt-5">
              <Link to="/#proximos-jogos" className="group relative">
                <div className="flex cursor-pointer items-center justify-center bg-zinc-800 py-5 text-zinc-300 transition-all hover:brightness-75">
                  <HiOutlineTicket className="size-7" />
                </div>

                <div className="invisible absolute left-28 top-0 whitespace-nowrap rounded-r-md bg-red-800 px-4 py-[1.35rem] font-semibold uppercase text-zinc-200 opacity-0 backdrop-blur-sm transition-all group-hover:visible group-hover:opacity-100">
                  Próximos jogos
                </div>
              </Link>

              <Link to="/galeria" className="group relative">
                <div className="flex cursor-pointer items-center justify-center py-5 text-zinc-300 transition-all hover:bg-zinc-800 hover:brightness-75">
                  <FaRegImages className="size-7" />
                </div>

                <div className="invisible absolute left-28 top-0 whitespace-nowrap rounded-r-md bg-red-800 px-4 py-[1.35rem] font-semibold uppercase text-zinc-200 opacity-0 backdrop-blur-sm transition-all group-hover:visible group-hover:opacity-100">
                  Galeria
                </div>
              </Link>

              <Link to="/cadeiras-cativas" className="group relative">
                <div className="flex cursor-pointer items-center justify-center py-5 text-zinc-300 transition-all hover:bg-zinc-800 hover:brightness-75">
                  <MdOutlineChair className="size-7" />
                </div>
                <div className="invisible absolute left-28 top-0 whitespace-nowrap rounded-r-md bg-red-800 px-4 py-[1.35rem] font-semibold uppercase text-zinc-200 opacity-0 backdrop-blur-sm transition-all group-hover:visible group-hover:opacity-100">
                  Cadeira cativa - Camarote Lounge Brahma
                </div>
              </Link>

              <Link to="/faca-seu-evento" className="group relative">
                <div className="flex cursor-pointer items-center justify-center py-5 text-zinc-300 transition-all hover:bg-zinc-800 hover:brightness-75">
                  <MdOutlineEmojiEvents className="size-7" />
                </div>
                <div className="invisible absolute left-28 top-0 whitespace-nowrap rounded-r-md bg-red-800 px-4 py-[1.35rem] font-semibold uppercase text-zinc-200 opacity-0 backdrop-blur-sm transition-all group-hover:visible group-hover:opacity-100">
                  Faça seu evento
                </div>
              </Link>

              <Link to="/#perguntas-frequentes" className="group relative">
                <div className="flex cursor-pointer items-center justify-center py-5 text-zinc-300 transition-all hover:bg-zinc-800 hover:brightness-75">
                  <IoHelpCircleOutline className="size-7" />
                </div>

                <div className="invisible absolute left-28 top-0 whitespace-nowrap rounded-r-md bg-red-800 px-4 py-[1.35rem] font-semibold uppercase text-zinc-200 opacity-0 backdrop-blur-sm transition-all group-hover:visible group-hover:opacity-100">
                  FAQ
                </div>
              </Link>
            </nav>
          </aside>
        )}

        {/* Menu minha conta */}
        {hasActiveDesktopHeader && (
          <div className="fixed right-20 top-0 z-50 flex overflow-hidden rounded-b-md bg-zinc-950/80 text-zinc-200">
            <div className="bg-white">
              <img
                src="/escudos/corinthians.png"
                alt="Escudo do time corinthians"
                className="object-cove pointer-events-none size-16 select-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/minha-conta"
                className="flex h-full items-center px-6 transition-all hover:bg-zinc-800"
              >
                <User className="mr-2 size-4" />
                Minha conta
              </Link>
            </div>
          </div>
        )}

        {!hasActiveDesktopHeader && (
          <div className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between border-b border-zinc-800 bg-zinc-950/90 px-8 backdrop-blur-sm lg:px-20">
            <img
              className="h-12"
              alt="Logo Lounge Brahma"
              src="https://loungebrahma.com.br/wp-content/themes/lounge-brahma/assets/images/logo-lounge-brahma-branco.png"
            />

            <nav className="item-center hidden gap-5 font-semibold text-zinc-100 lg:flex">
              <Link
                to="/#proximos-jogos"
                title="Próximos jogos"
                className="py-2 transition-all hover:brightness-75"
              >
                Próximos jogos
              </Link>

              <Link
                to="/galeria"
                title="Galeria"
                className="py-2 transition-all hover:brightness-75"
              >
                Galeria
              </Link>

              <Link
                to="/cadeiras-cativas"
                title="Cadeira cativa - Camarote Lounge Brahma"
                className="hidden py-2 transition-all hover:brightness-75 xl:block"
              >
                Cadeira cativa - Camarote Lounge Brahma
              </Link>

              <Link
                to="/cadeiras-cativas"
                title="Cadeira cativa"
                className="block py-2 transition-all hover:brightness-75 xl:hidden"
              >
                Cadeira cativa
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
                className="bg-brand-gold-500 hover:bg-brand-gold-500 font-semibold text-zinc-700 transition-all hover:brightness-75"
              >
                <User className="mr-2 size-4" />
                Minha conta
              </Button>
            </nav>

            <Button
              type="button"
              size="icon"
              title="Clique para abrir o menu lateral"
            >
              <Menu className="size-4" />
            </Button>
          </div>
        )}
      </header>

      <section className="relative h-[95vh] overflow-hidden rounded-br-[4rem]">
        {/* Redes sociais */}
        <div className="absolute right-20 top-1/2 z-20 hidden -translate-y-1/2 flex-col justify-center gap-6 lg:flex">
          <Link
            to=""
            target="_blank"
            title="Clique para visitar nosso Instagram"
            className="flex size-12 items-center justify-center rounded-full border text-zinc-100 transition-all hover:bg-red-600 hover:text-white hover:brightness-75"
          >
            <PiInstagramLogoThin className="size-7" />
          </Link>

          <Link
            to=""
            target="_blank"
            title="Clique para visitar nosso Facebook"
            className="hover:bg-brand-gold-500 flex size-12 items-center justify-center rounded-full border text-zinc-300 transition-all hover:text-white hover:brightness-75"
          >
            <FaFacebookF className="size-5" />
          </Link>

          <Link
            to=""
            target="_blank"
            title="Clique para visitar nosso Youtube"
            className="flex size-12 items-center justify-center rounded-full border text-zinc-300 transition-all hover:bg-red-600 hover:text-white hover:brightness-75"
          >
            <FaYoutube className="size-6" />
          </Link>
        </div>

        {/* Texto principal da seção */}
        <div className="relative h-full">
          <div
            className={cn(
              'absolute left-0 top-0 z-10 flex h-full w-full items-center bg-zinc-950/85',
              !hasActiveDesktopHeader ? 'pl-0' : 'pl-20',
            )}
          >
            <div className="px-8 lg:px-20">
              <h2 className="mt-2 max-w-4xl select-none text-3xl font-extrabold tracking-tight text-zinc-200 sm:text-4xl md:text-5xl xl:text-6xl">
                Viva a{' '}
                <strong className="text-red-700">melhor experiência</strong>,{' '}
                <br /> no Camarote Lounge Brahma <br /> da{' '}
                <strong className="text-brand-gold-500">
                  Neo Química Arena.
                </strong>
              </h2>

              <h4 className="mt-3 max-w-xl select-none text-xl font-semibold text-zinc-300 md:text-2xl">
                Camarote Open Bar & Open Food com uma vista incrível para os
                jogos do Corinthians.
              </h4>

              <button
                title="Clique para ver os próximos jogos"
                className="mt-6 flex items-center py-2 text-zinc-200 transition-all hover:brightness-75"
              >
                <Mouse className="mr-2 size-4 animate-bounce" />
                Clique para descer
              </button>
            </div>
          </div>
          <video
            loop
            muted
            autoPlay
            src="/video.mp4"
            className="pointer-events-none h-full w-full select-none object-cover"
          />
        </div>
      </section>

      <section className="relative z-20 -mt-24 flex flex-col border-y-2 border-y-zinc-700 xl:flex-row">
        <div className="flex min-h-24 flex-1 items-center bg-[url(background.png)] bg-cover bg-center bg-no-repeat py-8 pl-8 xl:pl-20">
          <div className={!hasActiveDesktopHeader ? 'pl-0' : 'pl-20'}>
            <h2 className="text-md font-semibold tracking-tight text-white">
              Próximo jogo - {nextGamesList[0].date}
            </h2>

            <span className="mt-2 block text-xl font-bold uppercase text-white 2xl:text-2xl">
              {nextGamesList[0].gameTitle}
            </span>

            <Button
              type="button"
              className="bg-brand-gold-500 hover:bg-brand-gold-500 mt-5 rounded-none text-zinc-900 transition-all hover:brightness-75"
            >
              <Ticket className="mr-2 size-4" />
              Garanta agora seu ingresso
            </Button>
          </div>
        </div>

        <div className="flex-[1.8] overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-900 to-black p-5 text-white">
          <Swiper
            loop
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 8000,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {nextGamesList.map((game, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="flex-1 overflow-hidden rounded-sm bg-white shadow-lg">
                    <div
                      className={cn(
                        'flex items-center justify-between bg-cover bg-center bg-no-repeat px-10 py-4',
                        i % 2 === 0
                          ? 'bg-[url(background-gold.png)]'
                          : 'bg-[url(background.png)]',
                      )}
                    >
                      <div className="flex flex-col items-center justify-center">
                        <img
                          alt="Escudo do Corinthians"
                          src="/escudos/corinthians.png"
                          className="size-24 object-contain"
                        />
                        <h2 className="font-semibold">Corinthians</h2>
                      </div>

                      <X className="size-8 font-bold" />

                      <div className="flex flex-col items-center justify-center">
                        <img
                          alt="Escudo do Time"
                          src={game.shieldTime}
                          className="size-24 object-contain"
                        />
                        <h2 className="font-semibold">{game.opponent}</h2>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex flex-col justify-center">
                        <h4 className="font-bold text-zinc-700">{game.date}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-700">
                            {game.startTime}
                          </span>
                          <span className="text-zinc-700">
                            {game.startGameTime}
                          </span>
                        </div>
                      </div>

                      <Button
                        type="button"
                        title="Clique para comprar os ingressos"
                        className={cn(
                          'text-md mt-4 h-12 w-full rounded-none transition-all hover:brightness-75',
                          i % 2 === 0
                            ? 'bg-brand-gold-500 hover:bg-brand-gold-500 text-zinc-700'
                            : 'bg-red-700 text-white hover:bg-red-700',
                        )}
                      >
                        <Ticket className="mr-2 size-4" />
                        Comprar ingressos
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>

          {/* <div className="flex items-center gap-2">
            <button
              type="button"
              title="Clique para voltar um slide"
              className="button-prev-slide flex h-10 w-10 items-center justify-center rounded-md border-2 border-zinc-700 bg-zinc-800 text-zinc-400"
            >
              <FaCaretLeft size={20} />
            </button>
            <button
              type="button"
              title="Clique para avançar um slide"
              className="button-next-slide flex h-10 w-10 items-center justify-center rounded-md border-2 border-zinc-700 bg-zinc-800 text-zinc-400"
            >
              <FaCaretRight size={20} />
            </button>
          </div> */}
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <div className="grid grid-cols-4 gap-5 px-20"></div>
    </main>
  )
}
