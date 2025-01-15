/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HeartHandshake,
  Loader2,
  Menu,
  Mouse,
  Ticket,
  User,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { FaFacebookF, FaRegImages, FaYoutube } from 'react-icons/fa'
import { GrFormPrevious } from 'react-icons/gr'
import { HiOutlineTicket } from 'react-icons/hi2'
import { IoHelpCircleOutline } from 'react-icons/io5'
import {
  MdNavigateNext,
  MdOutlineChair,
  MdOutlineEmojiEvents,
} from 'react-icons/md'
import { PiInstagramLogoThin } from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { cn } from '../../@config/lib/cn'
import { Game, nextGamesList } from '../../@config/utils/next-games-list'
import { Footer } from '../../components/footer'
import { Reveal } from '../../components/reveal'
import { Button } from '../../components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../../components/ui/sheet'

function GamesByMonth() {
  const gamesGroupedByMonth = nextGamesList.reduce(
    (acc, game) => {
      const [, , date] = game.date.split(' ')
      const [, month, year] = date.split('/')
      const key = `${month}/${year}`

      if (!acc[key]) acc[key] = []
      acc[key].push(game)

      return acc
    },
    {} as Record<string, Game[]>,
  )

  const sortedKeys = Object.keys(gamesGroupedByMonth).sort((a, b) => {
    const [monthA, yearA] = a.split('/').map(Number)
    const [monthB, yearB] = b.split('/').map(Number)
    return yearA - yearB || monthA - monthB
  })

  return (
    <div>
      {sortedKeys.map((key) => {
        const games = gamesGroupedByMonth[key]
        const [month, year] = key.split('/')
        const monthName = new Date(
          Number(year),
          Number(month) - 1,
        ).toLocaleString('pt-BR', { month: 'long' })

        return (
          <div key={key} className="flex flex-col items-start gap-4">
            <h2 className="mb-4 mt-5 text-2xl font-bold uppercase tracking-tighter text-zinc-800">
              {monthName} {year}
            </h2>
            <div className="flex w-full flex-col gap-6">
              {games.map((game) => (
                <div
                  key={game.slug}
                  className="flex w-full items-center justify-between border-b border-zinc-300 pb-4"
                >
                  {/* LEFT */}
                  <div className="flex flex-1 items-center">
                    <div className="flex flex-col items-start border-r border-zinc-300 md:w-40">
                      <h3 className="font-semibold text-zinc-600">
                        {game.date.split(' ')[0]}{' '}
                        {game.date.split(' ')[2].split('/')[0]}/
                        {game.date.split(' ')[2].split('/')[1]}
                      </h3>
                      <p className="bg-gradient-to-r from-[#cd122d] to-[#154284] bg-clip-text px-4 text-sm font-semibold text-transparent">
                        {game.startGameTime.split(': ')[1]}
                      </p>
                    </div>
                    <div className="flex items-center border-r border-zinc-300 px-4">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1oPV1qsi5eo5xaYAqjaszaR1yAmwPLRRNA&s"
                        alt="Logo Paulistão"
                        width={90}
                        className="rounded-md object-cover"
                      />
                    </div>
                  </div>

                  {/* CENTER */}
                  {/* <div className="flex-1"> */}
                  <div className="flex flex-1 items-center">
                    <div className="flex items-center gap-2">
                      <img
                        src="/escudos/corinthians.png"
                        width={60}
                        className="object-contain"
                        alt="Escudo Corinthians"
                      />
                      <h2 className="whitespace-nowrap text-left font-semibold">
                        Corinthians FC
                      </h2>
                    </div>
                    <p className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text px-4 text-xl font-extrabold text-transparent">
                      vs.
                    </p>
                    <div className="flex items-center gap-2">
                      <img
                        src={game.shieldTime}
                        width={50}
                        className="object-cover"
                        alt={`Escudo ${game.opponent}`}
                      />
                      <h2 className="whitespace-nowrap text-left font-semibold">
                        {game.opponent}
                      </h2>
                    </div>
                  </div>
                  {/* </div> */}

                  {/* RIGHT */}
                  <div className="flex flex-1 items-center justify-end gap-2">
                    <button className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 px-4 py-2 font-medium text-white hover:via-yellow-600 hover:to-yellow-600">
                      Comprar ingressos
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-2 w-full bg-gradient-to-r from-red-600 from-45% via-yellow-600 via-55% to-yellow-600" />
          </div>
        )
      })}
    </div>
  )
}

export function HomePage() {
  const [hasActiveDesktopHeader, setHasActiveDesktopHeader] = useState(false)
  const [hasActiveLoaderInitial, setHasActiveLoaderInitial] = useState(false)
  const navigate = useNavigate()

  const handleScrollClick = () => {
    window.scroll({
      top: 250,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setHasActiveLoaderInitial(false)
    }, 2000)

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
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setHasActiveDesktopHeader(false)
      } else {
        setHasActiveDesktopHeader(true)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <main>
      {/* Carregamento inicial */}
      <div
        className={cn(
          'fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-zinc-900 transition-all',
          hasActiveLoaderInitial
            ? 'visible opacity-100'
            : 'invisible opacity-0',
        )}
      >
        <Loader2 className="size-20 animate-spin text-white" />
      </div>

      <header className="z-40">
        {/* Sidebar */}
        {hasActiveDesktopHeader && (
          <aside className="fixed left-0 top-0 z-40 w-28 rounded-br-2xl border-b-4 border-r-4 border-zinc-800 bg-zinc-950/80 py-10">
            <div className="px-4 py-2">
              <img
                alt="Logo do Lounge Brahma"
                className="pointer-events-none select-none"
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
          <div className="fixed right-20 top-0 z-40 flex overflow-hidden rounded-b-md bg-zinc-950/90 text-zinc-200">
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
                className="flex h-full select-none items-center px-6 transition-all hover:bg-zinc-800"
              >
                <User className="mr-2 size-4" />
                Minha conta
              </Link>
            </div>
          </div>
        )}

        {/* Menu alternativa + Mobile */}
        {!hasActiveDesktopHeader && (
          <div className="fixed left-0 top-0 z-40 flex h-20 w-full items-center justify-between border-b border-zinc-800 bg-zinc-950/90 px-8 backdrop-blur-sm lg:px-20">
            <img
              className="h-12"
              alt="Logo Lounge Brahma"
              src="https://loungebrahma.com.br/wp-content/themes/lounge-brahma/assets/images/logo-lounge-brahma-branco.png"
            />

            <div className="flex items-center gap-6">
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
                        to="/galeria"
                        title="Galeria"
                        className="flex items-center gap-4 rounded-sm bg-zinc-900 px-4 py-3 transition-all hover:brightness-75"
                      >
                        <FaRegImages className="size-5" />
                        Galeria
                      </Link>

                      <Link
                        to="/cadeiras-cativas"
                        title="Cadeira cativa - Camarote Lounge Brahma"
                        className="flex items-center gap-4 rounded-sm bg-zinc-900 px-4 py-3 transition-all hover:brightness-75"
                      >
                        <MdOutlineChair className="size-5" />
                        Cadeira cativa
                      </Link>

                      <Link
                        to="/faca-seu-evento"
                        title="Faça seu evento"
                        className="flex items-center gap-4 rounded-sm bg-zinc-900 px-4 py-3 transition-all hover:brightness-75"
                      >
                        <MdOutlineEmojiEvents className="size-5" />
                        Faça seu evento
                      </Link>

                      <Link
                        to="/perguntas-frequentes"
                        title="Pergutas frequentes"
                        className="flex items-center gap-4 rounded-sm bg-zinc-900 px-4 py-3 transition-all hover:brightness-75"
                      >
                        <IoHelpCircleOutline className="size-5" />
                        FAQ
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
                        @{new Date().getFullYear()} | Todos os direitos
                        reservados -{' '}
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
        )}
      </header>

      <section className="relative h-[93vh] overflow-hidden rounded-br-[4rem]">
        {/* Redes sociais */}
        <div className="absolute right-20 top-1/2 z-20 hidden -translate-y-1/2 flex-col justify-center gap-6 lg:flex">
          <Reveal>
            <Link
              to=""
              target="_blank"
              title="Clique para visitar nosso Instagram"
              className="flex size-12 items-center justify-center rounded-full border text-zinc-100 transition-all hover:bg-red-600 hover:text-white hover:brightness-75"
            >
              <PiInstagramLogoThin className="size-7" />
            </Link>
          </Reveal>

          <Reveal>
            <Link
              to=""
              target="_blank"
              title="Clique para visitar nosso Facebook"
              className="hover:bg-brand-gold-500 flex size-12 items-center justify-center rounded-full border text-zinc-300 transition-all hover:text-white hover:brightness-75"
            >
              <FaFacebookF className="size-5" />
            </Link>
          </Reveal>

          <Reveal>
            <Link
              to=""
              target="_blank"
              title="Clique para visitar nosso Youtube"
              className="flex size-12 items-center justify-center rounded-full border text-zinc-300 transition-all hover:bg-red-600 hover:text-white hover:brightness-75"
            >
              <FaYoutube className="size-6" />
            </Link>
          </Reveal>
        </div>

        {/* Texto principal da seção */}
        <div className="relative h-full">
          <div
            className={cn(
              'absolute left-0 top-0 z-10 flex h-full w-full items-center bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-zinc-950/70',
              !hasActiveDesktopHeader ? 'pl-0' : 'pl-20',
            )}
          >
            <div className="px-8 lg:px-20">
              <Reveal>
                <div className="flex flex-row gap-4 lg:hidden">
                  <Link
                    to=""
                    target="_blank"
                    title="Clique para visitar nosso Instagram"
                    className="flex size-10 items-center justify-center rounded-full border text-zinc-100 transition-all hover:bg-red-600 hover:text-white hover:brightness-75"
                  >
                    <PiInstagramLogoThin className="size-6" />
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
              </Reveal>

              <Reveal>
                <span className="hidden items-center rounded-full bg-red-700 px-3 py-2 text-sm uppercase text-white lg:inline-flex">
                  <HeartHandshake className="mr-2 size-4" />
                  Feito para você que é apaixonado no timão
                </span>
              </Reveal>

              <Reveal>
                <h2 className="text-shadow-xl mt-5 max-w-4xl select-none text-2xl font-extrabold uppercase tracking-tight text-zinc-200 sm:text-3xl md:text-4xl xl:text-5xl">
                  Viva a{' '}
                  <strong className="text-red-600">melhor experiência</strong>
                  , <br /> no Camarote Lounge Brahma <br /> da{' '}
                  <strong className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Neo Química Arena.
                  </strong>
                </h2>
              </Reveal>

              <Reveal>
                <h4 className="mt-3 max-w-xl select-none text-xl font-semibold text-zinc-300 md:text-2xl">
                  Camarote Open Bar & Open Food com uma vista incrível para os
                  jogos do Corinthians.
                </h4>
              </Reveal>

              <Reveal>
                <button
                  onClick={handleScrollClick}
                  title="Clique para ver os próximos jogos"
                  className="mt-6 flex items-center py-2 text-zinc-200 transition-all hover:brightness-75"
                >
                  <Mouse className="mr-2 size-4 animate-bounce" />
                  Clique para descer
                </button>
              </Reveal>
            </div>
          </div>

          <img
            alt="Imagem do Lounge Brahma"
            className="pointer-events-none h-full w-full select-none object-cover"
            src="https://static.athletico.com.br/wp-content/uploads/2024/10/05110457/ChoperiaArenaBrahma-1200.jpg"
          />
        </div>
      </section>

      <section className="relative z-20 -mt-24 flex flex-col border-b-2 border-y-zinc-700 xl:flex-row">
        <div className="flex min-h-24 flex-1 items-center bg-[url(background.png)] bg-cover bg-center bg-no-repeat py-8 pl-8 lg:items-start xl:pl-20">
          <div
            className={cn(
              `sticky top-[600px] xl:pb-[70px]`,
              !hasActiveDesktopHeader ? 'pl-0' : 'pl-20',
            )}
          >
            <Reveal>
              <div className="flex items-center text-zinc-200">
                <div className="flex flex-col items-center justify-center">
                  <img
                    alt="Escudo do Corinthians"
                    src="/escudos/corinthians.png"
                    className="size-20 object-contain"
                  />
                </div>

                <X className="size-6 font-bold" />

                <div className="flex flex-col items-center justify-center">
                  <img
                    alt="Escudo do Time"
                    src={nextGamesList[0].shieldTime}
                    className="size-20 object-contain"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-md font-semibold tracking-tight text-white">
                Próximo jogo - {nextGamesList[0].date}
              </h2>
            </Reveal>

            <Reveal>
              <span className="mt-2 block text-xl font-bold uppercase text-white 2xl:text-2xl">
                {nextGamesList[0].gameTitle}
              </span>
            </Reveal>

            <Reveal>
              <Button
                type="button"
                onClick={() => navigate(`/ingressos/${nextGamesList[0].slug}`)}
                className="mt-5 rounded-none bg-gradient-to-r from-yellow-400 to-yellow-600 text-zinc-900 transition-all hover:brightness-75"
              >
                <Ticket className="mr-2 size-4" />
                Garanta agora seu ingresso
              </Button>
            </Reveal>
          </div>
        </div>

        <div className="flex-[1.8] overflow-hidden bg-zinc-950 bg-cover bg-center bg-no-repeat p-5 text-white">
          <div className="mb-4 flex items-center justify-between">
            <Reveal>
              <span className="pointer-events-none select-none rounded-full bg-red-700 px-3 py-1 text-white">
                {nextGamesList.length} jogos disponíveis para compra
              </span>
            </Reveal>

            <Reveal>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  title="Clique para voltar um slide"
                  className="button-prev-slide flex h-10 w-10 items-center justify-center rounded-md border-2 border-zinc-700 bg-zinc-800 text-zinc-400"
                >
                  <GrFormPrevious size={20} />
                </button>
                <button
                  type="button"
                  title="Clique para avançar um slide"
                  className="button-next-slide flex h-10 w-10 items-center justify-center rounded-md border-2 border-zinc-700 bg-zinc-800 text-zinc-400"
                >
                  <MdNavigateNext size={20} />
                </button>
              </div>
            </Reveal>
          </div>

          <Swiper
            loop
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.button-next-slide',
              prevEl: '.button-prev-slide',
            }}
            autoplay={{
              delay: 8000,
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {nextGamesList.map((game, i) => {
              return (
                <SwiperSlide key={i}>
                  <Reveal>
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

                        <p className="px-4 text-xl font-extrabold text-transparent text-white">
                          vs.
                        </p>

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
                          <h4 className="font-bold text-zinc-700">
                            {game.date}
                          </h4>
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
                          onClick={() => navigate(`/ingressos/${game.slug}`)}
                          className={cn(
                            'text-md mt-4 h-12 w-full rounded-none transition-all hover:brightness-75',
                            i % 2 === 0
                              ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-zinc-700'
                              : 'bg-red-700 text-white hover:bg-red-700',
                          )}
                        >
                          <Ticket className="mr-2 size-4" />
                          Comprar ingressos
                        </Button>
                      </div>
                    </div>
                  </Reveal>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>

      <section className="px-20 py-10">
        <GamesByMonth />
      </section>

      <Footer />
    </main>
  )
}
