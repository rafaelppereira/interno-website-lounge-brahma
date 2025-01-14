/* eslint-disable @typescript-eslint/no-explicit-any */
import { MoreVertical, Mouse, Ticket, User, Users2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { FaFacebookF, FaRegImages, FaYoutube } from 'react-icons/fa'
import { HiOutlineTicket } from 'react-icons/hi2'
import { IoHelpCircleOutline } from 'react-icons/io5'
import { PiInstagramLogoThin } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { nextGamesList } from '../../@config/utils/next-games-list'
import { Button } from '../../components/ui/button'

export function HomePage() {
  const [hasActiveDesktopHeader, setHasActiveDesktopHeader] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY <= 50) {
        setHasActiveDesktopHeader(true)
      } else {
        setHasActiveDesktopHeader(false)
      }
    })
  }, [])

  return (
    <main>
      <header className="z-50">
        {/* Sidebar */}
        {hasActiveDesktopHeader && (
          <aside className="fixed left-0 top-0 z-50 w-28 rounded-br-2xl border-b-4 border-r-4 border-zinc-800 bg-zinc-950/80 py-10">
            <div className="p-4">
              <img
                alt="Logo do Lounge Brahma"
                src="https://loungebrahma.com.br/wp-content/themes/lounge-brahma/assets/images/logo-lounge-brahma-branco.png"
              />
            </div>

            <nav className="mt-5">
              <div className="flex cursor-pointer items-center justify-center bg-zinc-800 py-5 text-zinc-300 transition-all hover:brightness-75">
                <HiOutlineTicket className="size-7" />
              </div>

              <div className="flex cursor-pointer items-center justify-center py-5 text-zinc-300 transition-all hover:bg-zinc-800 hover:brightness-75">
                <FaRegImages className="size-7" />
              </div>

              <div className="flex cursor-pointer items-center justify-center py-5 text-zinc-300 transition-all hover:bg-zinc-800 hover:brightness-75">
                <Users2 className="size-7" />
              </div>

              <div className="flex cursor-pointer items-center justify-center py-5 text-zinc-300 transition-all hover:bg-zinc-800 hover:brightness-75">
                <IoHelpCircleOutline className="size-7" />
              </div>

              <div className="flex cursor-pointer items-center justify-center py-5 text-zinc-300 transition-all hover:bg-zinc-800 hover:brightness-75">
                <MoreVertical className="size-7" />
              </div>
            </nav>
          </aside>
        )}

        {/* Menu minha conta */}
        {hasActiveDesktopHeader && (
          <div className="fixed right-20 top-0 z-50 flex bg-zinc-950/80 text-zinc-200">
            <div className="bg-white">
              <img
                src="/corinthians.png"
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
          <div className="fixed left-0 top-0 z-50 h-20 w-full border-b border-zinc-800 bg-zinc-950/80">
            daw
          </div>
        )}
      </header>

      <section className="relative h-[95vh] overflow-hidden rounded-br-[4rem]">
        {/* Redes sociais */}
        <div className="absolute right-20 top-1/2 z-20 flex -translate-y-1/2 flex-col justify-center gap-6">
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
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center bg-zinc-950/85 pl-28">
            <div className="px-20">
              <h2 className="mt-2 max-w-4xl select-none text-6xl font-extrabold leading-[4rem] tracking-tight text-zinc-200">
                Viva a{' '}
                <strong className="text-red-700">melhor experiência</strong>, no
                Camarote Lounge Brahma <br /> da{' '}
                <strong className="text-brand-gold-500">
                  Neo Química Arena.
                </strong>
              </h2>

              <h4 className="mt-3 max-w-xl select-none text-2xl font-semibold text-zinc-300">
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

      <section className="relative z-20 -mt-24 flex border-y-2 border-y-zinc-700">
        <div className="flex min-h-24 flex-1 items-center bg-[url(background.png)] bg-cover bg-center bg-no-repeat py-8 pl-28">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              Próximo jogo - {nextGamesList[0].date}
            </h2>

            <span className="mt-2 block text-2xl font-bold uppercase text-white">
              {nextGamesList[0].gameTitle}
            </span>

            <Button
              type="button"
              className="bg-brand-gold-500 hover:bg-brand-gold-500 mt-5 text-zinc-900 transition-all hover:brightness-75"
            >
              <Ticket className="mr-2 size-4" />
              Garanta agora seu ingresso
            </Button>
          </div>
        </div>

        <div className="flex-[1.8] overflow-hidden bg-zinc-900 p-5 text-white">
          <Swiper
            loop
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{
              delay: 5000,
            }}
            modules={[Autoplay]}
          >
            {nextGamesList.slice(0, 4).map((game, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="flex-1 overflow-hidden rounded-2xl bg-white shadow-lg">
                    <img
                      src={game.thumbail}
                      alt="Imagem do jogo"
                      className="pointer-events-none h-40 w-full select-none rounded-t-2xl object-cover"
                    />

                    <div className="p-4">
                      <div className="flex flex-col items-center justify-center">
                        <h4 className="font-bold text-zinc-700">{game.date}</h4>
                        <span className="text-zinc-700">{game.gameTitle}</span>
                      </div>

                      <Button type="button" className="mt-4 w-full bg-zinc-800">
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
