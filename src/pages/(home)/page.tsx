/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Mouse,
  Phone,
  Ticket,
  User,
  X,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { FaFacebookF, FaRegImages, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { GrFormPrevious } from 'react-icons/gr'
import { HiOutlineTicket } from 'react-icons/hi2'
import { IoHelpCircleOutline } from 'react-icons/io5'
import { MdNavigateNext, MdOutlineEmojiEvents } from 'react-icons/md'
import { PiInstagramLogoThin } from 'react-icons/pi'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { cn } from '../../@config/lib/cn'
import { photos } from '../../@config/utils/galery-photos'
import { Game, nextGamesList } from '../../@config/utils/next-games-list'
import { Footer } from '../../components/footer'
import { Loader } from '../../components/loader'
import { Reveal } from '../../components/reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion'
import { Button } from '../../components/ui/button'
import { FocusCardsSlug } from '../../components/ui/focus-card'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '../../components/ui/sheet'

export function HomePage() {
  const refNextGames: any = useRef(null)
  const refFAQ: any = useRef(null)
  const refGalery: any = useRef(null)
  const refEvent: any = useRef(null)

  const { hash } = useLocation()

  const [hasActiveDesktopHeader, setHasActiveDesktopHeader] = useState(false)
  const [hasActiveLoaderInitial, setHasActiveLoaderInitial] = useState(false)
  const [isLoaderInitialized, setIsLoaderInitialized] = useState(false)
  const navigate = useNavigate()

  const handleScrollClick = () => {
    window.scroll({
      top: 250,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (!isLoaderInitialized) {
      const hasLoaderBeenShown = sessionStorage.getItem('loaderShow')

      if (!hasLoaderBeenShown) {
        setHasActiveLoaderInitial(true)
        sessionStorage.setItem('loaderShow', 'true')

        setTimeout(() => {
          setHasActiveLoaderInitial(false)
        }, 5000)
      }
    }

    setIsLoaderInitialized(true)
  }, [isLoaderInitialized])

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

  useEffect(() => {
    if (!hash) {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      })
    }

    if (hash === '#proximos-jogos') {
      window.scroll({
        top: refNextGames.current.offsetTop - 50,
        behavior: 'smooth',
      })
    }

    if (hash === '#perguntas-frequentes') {
      window.scroll({
        top: refFAQ.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#galeria') {
      window.scroll({
        top: refGalery.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#faca-seu-evento') {
      window.scroll({
        top: refEvent.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }
  }, [hash])

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
    <main>
      {/* Carregamento inicial */}
      <Loader hasActive={hasActiveLoaderInitial} />

      {/* Cabeçalho */}
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

              <Link to="/#galeria" className="group relative">
                <div className="flex cursor-pointer items-center justify-center py-5 text-zinc-300 transition-all hover:bg-zinc-800 hover:brightness-75">
                  <FaRegImages className="size-7" />
                </div>

                <div className="invisible absolute left-28 top-0 whitespace-nowrap rounded-r-md bg-red-800 px-4 py-[1.35rem] font-semibold uppercase text-zinc-200 opacity-0 backdrop-blur-sm transition-all group-hover:visible group-hover:opacity-100">
                  Galeria
                </div>
              </Link>

              <Link to="/#faca-seu-evento" className="group relative">
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
                  Perguntas frequentes
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
                      <SheetClose asChild>
                        <Link
                          to="/#proximos-jogos"
                          title="Próximos jogos"
                          className="flex items-center gap-3 rounded-sm bg-zinc-900 px-4 py-3 transition-all hover:brightness-75"
                        >
                          <HiOutlineTicket className="size-6" />
                          Próximos jogos
                        </Link>
                      </SheetClose>

                      <SheetClose asChild>
                        <Link
                          to="/#galeria"
                          title="Galeria"
                          className="flex items-center gap-4 rounded-sm bg-zinc-900 px-4 py-3 transition-all hover:brightness-75"
                        >
                          <FaRegImages className="size-5" />
                          Galeria
                        </Link>
                      </SheetClose>

                      <SheetClose asChild>
                        <Link
                          to="/#faca-seu-evento"
                          title="Faça seu evento"
                          className="flex items-center gap-4 rounded-sm bg-zinc-900 px-4 py-3 transition-all hover:brightness-75"
                        >
                          <MdOutlineEmojiEvents className="size-5" />
                          Faça seu evento
                        </Link>
                      </SheetClose>

                      <SheetClose asChild>
                        <Link
                          to="/#perguntas-frequentes"
                          title="Pergutas frequentes"
                          className="flex items-center gap-4 rounded-sm bg-zinc-900 px-4 py-3 transition-all hover:brightness-75"
                        >
                          <IoHelpCircleOutline className="size-5" />
                          Perguntas frequentes
                        </Link>
                      </SheetClose>
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
                        className="flex size-10 items-center justify-center rounded-full border text-zinc-300 transition-all hover:bg-brand-gold-500 hover:text-white hover:brightness-75"
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
              className="flex size-12 items-center justify-center rounded-full border text-zinc-300 transition-all hover:bg-brand-gold-500 hover:text-white hover:brightness-75"
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
            <div className="px-4 lg:px-20">
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
                    className="flex size-10 items-center justify-center rounded-full border text-zinc-300 transition-all hover:bg-brand-gold-500 hover:text-white hover:brightness-75"
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
                <h2 className="text-shadow-xl mt-5 max-w-4xl select-none text-xl font-extrabold uppercase tracking-tight text-zinc-200 sm:text-3xl md:text-4xl xl:text-5xl">
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
        <div className="flex min-h-24 flex-1 items-center bg-[url(/background.png)] bg-cover bg-center bg-no-repeat py-8 pl-4 lg:items-start xl:pl-20">
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
                    className="pointer-events-none size-20 select-none object-contain"
                  />
                </div>

                <X className="size-6 font-bold" />

                <div className="flex flex-col items-center justify-center">
                  <img
                    alt="Escudo do Time"
                    src={nextGamesList[0].shieldTime}
                    className="pointer-events-none size-20 select-none object-contain"
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

        <div className="flex-[1.8] overflow-hidden bg-zinc-950 bg-cover bg-center bg-no-repeat px-4 py-5 text-white xl:px-5">
          <div className="mb-4 flex items-center justify-between">
            <Reveal classes="hidden md:block">
              <span className="pointer-events-none select-none rounded-sm bg-red-700 px-3 py-1 text-white">
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
                            ? 'bg-[url(/background-gold.png)]'
                            : 'bg-[url(/background.png)]',
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

      {/* Próximos jogos */}
      <section ref={refNextGames} className="px-4 py-10 xl:px-20">
        <div className="flex flex-col gap-4">
          {sortedKeys.map((key, i) => {
            const games = gamesGroupedByMonth[key]
            const [month, year] = key.split('/')
            const monthName = new Date(
              Number(year),
              Number(month) - 1,
            ).toLocaleString('pt-BR', { month: 'long' })

            return (
              <Reveal key={i}>
                <div className="flex flex-col items-start gap-4 rounded-md border bg-zinc-50 p-5">
                  <h2 className="mb-4 mt-5 text-2xl font-bold uppercase tracking-tighter text-zinc-800">
                    {monthName} {year}
                  </h2>
                  <div className="flex w-full flex-col gap-6">
                    {games.map((game, i) => (
                      <div key={i}>
                        <div className="hidden w-full items-center justify-between border-b border-zinc-200 pb-4 lg:flex">
                          <div className="flex items-center">
                            <div className="flex flex-col items-start border-r border-zinc-300 md:w-40">
                              <h3 className="font-semibold text-zinc-600">
                                {game.date.split(' ')[0]}{' '}
                                {game.date.split(' ')[2].split('/')[0]}/
                                {game.date.split(' ')[2].split('/')[1]}
                              </h3>
                              <p className="bg-gradient-to-r from-red-500 to-yellow-600 bg-clip-text text-sm font-semibold text-transparent">
                                {game.startGameTime.split(': ')[1]}
                              </p>
                            </div>
                            <div className="flex items-center border-r border-zinc-300 px-4">
                              <img
                                width={90}
                                alt="Logo Paulistão"
                                className="pointer-events-none select-none rounded-md object-cover"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1oPV1qsi5eo5xaYAqjaszaR1yAmwPLRRNA&s"
                              />
                            </div>
                          </div>

                          <div className="flex flex-1 items-center xl:pl-2 2xl:pl-20">
                            <div className="flex items-center gap-2">
                              <img
                                width={60}
                                alt="Escudo Corinthians"
                                src="/escudos/corinthians.png"
                                className="pointer-events-none select-none object-contain"
                              />
                              <h2 className="whitespace-nowrap text-left font-semibold">
                                Corinthians
                              </h2>
                            </div>
                            <p className="shrink-0 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text px-4 text-xl font-extrabold text-transparent">
                              vs.
                            </p>
                            <div className="flex shrink-0 items-center gap-2">
                              <img
                                width={50}
                                src={game.shieldTime}
                                alt={`Escudo ${game.opponent}`}
                                className="pointer-events-none select-none object-cover"
                              />
                              <h2
                                title={game.opponent}
                                className="w-26 truncate whitespace-nowrap text-left font-semibold"
                              >
                                {game.opponent}
                              </h2>
                            </div>
                          </div>

                          <div className="flex items-start justify-end gap-2">
                            <div className="flex flex-col items-center gap-2">
                              <Button
                                type="button"
                                title="Clique para comprar os ingressos"
                                onClick={() =>
                                  navigate(`/ingressos/${game.slug}`)
                                }
                                className={
                                  'mt-4 h-10 rounded-none bg-gradient-to-r from-yellow-400 to-yellow-600 text-sm text-zinc-700 transition-all hover:brightness-75'
                                }
                              >
                                <Ticket className="mr-2 size-4" />
                                Comprar ingressos
                              </Button>

                              <span className="text-xs font-bold text-zinc-600">
                                10% desconto: COPA10
                              </span>
                            </div>

                            <div className="hidden flex-col items-center gap-2 xl:flex">
                              <Button
                                type="button"
                                title="Clique para comprar os ingressos"
                                className={
                                  'mt-4 flex h-10 rounded-none border-2 border-zinc-300 bg-transparent text-sm text-zinc-700 transition-all hover:brightness-75'
                                }
                              >
                                <Mail className="mr-2 size-4" />
                                Lembre-me do jogo
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col border-b pb-4 lg:hidden">
                          <div className="flex w-full items-center justify-between gap-5">
                            <div className="flex flex-col items-center">
                              <img
                                className="size-20 object-contain"
                                alt="Escudo do Corinthians"
                                src="/escudos/corinthians.png"
                              />

                              <h2 className="whitespace-nowrap text-left font-semibold">
                                Corinthians
                              </h2>
                            </div>

                            <div className="flex flex-1 flex-col items-center">
                              <h2 className="text-sm font-bold text-zinc-700">
                                {game.date.split('-')[1].trim()}
                              </h2>
                              <span className="hidden md:block">
                                {game.startGameTime}
                              </span>
                              <span className="block md:hidden">
                                {game.startGameTime.replace('Jogo:', '').trim()}
                              </span>
                            </div>

                            <div className="flex flex-col items-center">
                              <img
                                className="size-20 object-contain"
                                src={game.shieldTime}
                                alt="Escudo do Corinthians"
                              />

                              <h2
                                title={game.opponent}
                                className="max-w-20 truncate whitespace-nowrap text-left font-semibold"
                              >
                                {game.opponent}
                              </h2>
                            </div>
                          </div>
                          <div className="mt-4 flex flex-col items-start gap-2 md:flex-row">
                            <div className="flex w-full flex-col-reverse items-center gap-2 md:flex-col">
                              <Button
                                type="button"
                                title="Clique para comprar os ingressos"
                                onClick={() =>
                                  navigate(`/ingressos/${game.slug}`)
                                }
                                className={
                                  'h-10 w-full rounded-none bg-gradient-to-r from-yellow-400 to-yellow-600 text-sm text-zinc-700 transition-all hover:brightness-75'
                                }
                              >
                                <Ticket className="mr-2 size-4" />
                                Comprar ingressos
                              </Button>

                              <span className="text-xs font-bold text-zinc-600">
                                10% desconto: COPA10
                              </span>
                            </div>

                            <div className="w-full flex-col items-center gap-2">
                              <Button
                                type="button"
                                title="Clique para comprar os ingressos"
                                className={
                                  'flex h-10 w-full rounded-none border-2 border-zinc-300 bg-transparent text-sm text-zinc-700 transition-all hover:brightness-75'
                                }
                              >
                                <Mail className="mr-2 size-4" />
                                Lembre-me do jogo
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="h-2 w-full bg-gradient-to-r from-red-600 from-45% via-yellow-600 via-55% to-yellow-600" />
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Galeria de fotos */}
      <section
        ref={refGalery}
        className="rounded-br-[3rem] rounded-tl-[3rem] bg-zinc-900 px-4 py-14 md:rounded-br-[5rem] md:rounded-tl-[5rem] lg:px-20"
      >
        <h2 className="mb-5 border-l-4 border-l-red-700 pl-5 text-xl font-bold uppercase text-zinc-200 md:text-2xl">
          Galeria de fotos
        </h2>

        <FocusCardsSlug cards={photos} />
      </section>

      {/* Faça seu evento */}
      <section
        ref={refEvent}
        className="flex flex-col-reverse items-start gap-10 rounded-bl-[3rem] bg-zinc-50 px-4 py-14 md:rounded-bl-[5rem] lg:flex-row lg:px-20 xl:items-center"
      >
        <div className="w-full flex-1 overflow-hidden">
          <Reveal classes="w-full">
            <img
              alt="Imagem do Lounge Brahma"
              className="w-full select-none rounded-sm border-4 border-zinc-200 transition-all duration-500 hover:scale-105"
              src="https://loungebrahma.com.br/wp-content/uploads/2024/11/Lounge-Brahma-Corinthians-x-Palmeiras-058.webp"
            />
          </Reveal>
        </div>
        <div className="flex-[1.8] xl:flex-1">
          <Reveal>
            <h2 className="text-md font-extrabold uppercase text-red-700 md:text-xl">
              O Seu evento no melhor <br /> camarote da Neo Quimica Arena!
            </h2>
          </Reveal>

          <Reveal>
            <p className="mt-4 text-lg text-zinc-700">
              Situado no coração do estádio, oferecemos uma vista panorâmica
              incomparável do campo de jogo.
              <br />
              <br />
              Seja para celebrar conquistas empresariais, fortalecer laços com
              clientes e colaboradores ou simplesmente desfrutar de momentos
              memoráveis com amigos e familiares, o Camarote Premium da Neo
              Química Arena é o cenário perfeito para transformar seus eventos
              em experiências inesquecíveis.
            </p>
          </Reveal>

          <Reveal>
            <Button
              type="button"
              className="mt-5 rounded-none bg-gradient-to-r from-yellow-400 to-yellow-600 uppercase text-zinc-900"
              title="Clique para criar uma rota até a arena"
            >
              <FaWhatsapp className="mr-2 size-4" />
              Entrar em contato conosco
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Perguntas frequentes */}
      <section ref={refFAQ} className="px-4 py-10 lg:px-40">
        <Reveal>
          <h2 className="pb-10 text-center text-xl font-semibold text-zinc-800 lg:text-4xl">
            FAQ - Perguntas frequentes
          </h2>
        </Reveal>

        <div className="flex items-center justify-center">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <Reveal>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Como faço para comprar Ingresso no Camarote Corinthians Lounge
                  Brahma?
                </AccordionTrigger>
                <AccordionContent>
                  Acesse nosso FAQ: Os ingressos estão disponíveis
                  exclusivamente através do nosso site{' '}
                  <Link
                    to="/#proximos-jogos"
                    className="text-red-500 underline"
                  >
                    https://loungebrahma.com.br/#proximos-jogos
                  </Link>
                  . Selecionando o produto escolhido, efetuando o pagamento, ao
                  finalizar a compra você receberá em seu e-mail o QRCODE com
                  acesso para ser apresentado na portaria no dia do jogo. O
                  único canal de vendas oficial para a compra de ingressos é
                  nosso site, caso tenha adquirido de terceiros, não nos
                  responsabilizamos por compras fora do canal oficial de vendas.
                </AccordionContent>
              </AccordionItem>
            </Reveal>
            <Reveal>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Qual é a visibilidade do campo a partir no Camarote
                  Corinthians Lounge Brahma?
                </AccordionTrigger>
                <AccordionContent>
                  O Camarotes na Neo Química Arena oferecem uma visão
                  privilegiada do campo. Estamos centralizado no meio do campo
                  para conhecer mais acesse nossa galeria e descubra a melhor
                  visibilidade com a melhor experiência.
                </AccordionContent>
              </AccordionItem>
            </Reveal>
            <Reveal>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  O que contempla ao comprar ingresso no Camarote Corinthians
                  Lounge Brahma?
                </AccordionTrigger>
                <AccordionContent>
                  Ao adquirir a entrada para o Camarote Lounge Brahma, você terá
                  direito ao ingresso do jogo no setor de cadeiras exclusivas do
                  camarote com visão central privilegiada, open bar e open food,
                  serviço de barbearia, show ao vivo ou dj, mesa de jogos. Além
                  claro, da presença de celebridades e ex jogadores! Contamos
                  com o serviço de tatuagem, que é pago diretamente ao tatuador,
                  e não está incluído no valor do ingresso. Ressaltamos que de
                  acordo com a Lei Municipal nº12.402 de 03 de Julho de 1997, o
                  serviço de bebidas alcoólicas é interrompido 2 (duas) horas
                  antes do início da partida. O mesmo é retomado ao término da
                  partida, por 1(uma) hora e 30 (trinta) minutos.
                </AccordionContent>
              </AccordionItem>
            </Reveal>

            <Reveal>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  É possível selecionar o assento no ato da compra do ingresso?
                </AccordionTrigger>
                <AccordionContent>
                  No dia do evento ao receber o seu acesso ao camarote, você
                  receberá os detalhes sobre o seu acesso ao camarote, inclusive
                  o lugar do seu assento.
                </AccordionContent>
              </AccordionItem>
            </Reveal>

            <Reveal>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Criança paga ingresso para o camarote?
                </AccordionTrigger>
                <AccordionContent>
                  Crianças de 0 até 11 anos devem adquirir ingresso na categoria
                  infantil. Crianças acima de 12 anos, devem adquirir ingresso
                  normal. Todas as idades devem adquirir ingresso para acessar
                  ao camarote!
                </AccordionContent>
              </AccordionItem>
            </Reveal>

            <Reveal>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Desisti da compra, como devo proceder?
                </AccordionTrigger>
                <AccordionContent>
                  Em caso de desistência da compra, o reembolso do valor do
                  ingresso somente será efetuado caso a solicitação seja feita
                  no prazo de até 7 (sete) dias a contar da data da compra. O
                  pedido de devolução deverá ser realizado impreterivelmente no
                  prazo de 48 (quarenta e oito) horas antes do horário de início
                  do evento. O Participante não poderá solicitar reembolso de
                  seus ingressos, o que poderá ser feito tão somente pelo
                  COMPRADOR e TITULAR (pessoa que realizou a compra pelo site),
                  salvo quando Participante e COMPRADOR forem a mesma pessoa.
                  Para solicitar o cancelamento de pedido envie e-mail para{' '}
                  <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-sm font-semibold text-transparent">
                    contato@loungebrahma.com.br
                  </span>
                  .
                  <br /> <br />
                  <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-lg font-bold text-transparent">
                    Não serão realizados cancelamentos fora dos prazos
                    estabelecidos!
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Reveal>
            <Reveal>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Desisti da compra, como devo proceder?
                </AccordionTrigger>
                <AccordionContent>
                  Em caso de desistência da compra, o reembolso do valor do
                  ingresso somente será efetuado caso a solicitação seja feita
                  no prazo de até 7 (sete) dias a contar da data da compra. O
                  pedido de devolução deverá ser realizado impreterivelmente no
                  prazo de 48 (quarenta e oito) horas antes do horário de início
                  do evento. O Participante não poderá solicitar reembolso de
                  seus ingressos, o que poderá ser feito tão somente pelo
                  COMPRADOR e TITULAR (pessoa que realizou a compra pelo site),
                  salvo quando Participante e COMPRADOR forem a mesma pessoa.
                  Para solicitar o cancelamento de pedido envie e-mail para{' '}
                  <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-sm font-semibold text-transparent">
                    contato@loungebrahma.com.br
                  </span>
                  .
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          </Accordion>
        </div>
      </section>

      {/* Como chegar na arena */}
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
