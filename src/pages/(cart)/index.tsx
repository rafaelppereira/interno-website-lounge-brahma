import { Menu, Minus, Plus, QrCode, User } from 'lucide-react'
import { FaFacebookF, FaRegImages, FaYoutube } from 'react-icons/fa'
import { HiOutlineTicket } from 'react-icons/hi2'
import { IoHelpCircleOutline } from 'react-icons/io5'
import { MdOutlineEmojiEvents } from 'react-icons/md'
import { PiInstagramLogoThin } from 'react-icons/pi'
import { Link, useLocation } from 'react-router-dom'
import { Autoplay, EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { cn } from '../../@config/lib/cn'
import { StepCheckoutForm } from '../../components/step-checkout-form'
import { Button } from '../../components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../../components/ui/sheet'

export function CartPage() {
  const { hash } = useLocation()

  return (
    <main className="overflow-x-hidden">
      <header className="z-40">
        {/* Menu alternativa + Mobile */}
        <div className="fixed left-0 top-0 z-40 flex h-20 w-full items-center justify-between border-b border-zinc-800 bg-zinc-950 px-8 backdrop-blur-sm lg:px-20">
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

      <section className="relative flex w-full flex-col items-center justify-between gap-3 px-8 pb-[8rem] pt-[calc(7rem+4rem)] md:gap-24 lg:px-20 xl:flex-row">
        <div className="flex w-full justify-center sm:w-[448px]">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            className="w-full"
            autoplay={{ delay: 6000 }}
            modules={[EffectCards, Autoplay]}
          >
            <SwiperSlide className="w-full">
              <div className="w-full max-w-md overflow-hidden rounded-sm bg-white">
                <div className="bg-[url(background.png)] bg-cover bg-center bg-no-repeat p-6 text-white">
                  <div
                    className={cn(
                      'flex items-center justify-between bg-cover bg-center bg-no-repeat px-10 py-4',
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
                        src="/escudos/agua-santa.png"
                        className="size-24 object-contain"
                      />
                      <h2 className="font-semibold">Água Santa</h2>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <div>
                      <p className="text-sm text-gray-500">Tipo de ingresso</p>
                      <p className="font-semibold">Experiência Lounge Brahma</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Valor</p>
                      <p className="font-semibold">R$ 550,00</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h2>Quantidade</h2>

                    <div className="flex items-center gap-2">
                      <Button
                        disabled
                        size="icon"
                        type="button"
                        className="size-12 shrink-0 rounded-sm bg-zinc-300 text-zinc-800"
                      >
                        <Minus className="size-4" />
                      </Button>

                      <div className="flex h-12 w-full items-center justify-center rounded-sm bg-zinc-200 font-semibold">
                        1 ingresso
                      </div>

                      <Button
                        disabled
                        size="icon"
                        type="button"
                        className="size-12 shrink-0 rounded-sm bg-zinc-300 text-zinc-800"
                      >
                        <Plus className="size-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Data</p>
                        <p className="inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                          Quarta - 22/01
                        </p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Abertura</p>
                        <p className="font-semibold">17H35min</p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Início do jogo</p>
                        <p className="font-semibold">21H35min</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <QrCode size={160} className="text-red-600" />
                    </div>
                  </div>

                  <div className="mt-6 border-t pt-3 text-center text-sm text-gray-500">
                    Atenção: Traga seu ingresso no jogo
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-full">
              <div className="w-full max-w-md overflow-hidden rounded-sm bg-white">
                <div className="bg-[url(background.png)] bg-cover bg-center bg-no-repeat p-6 text-white">
                  <div
                    className={cn(
                      'flex items-center justify-between bg-cover bg-center bg-no-repeat px-10 py-4',
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
                        src="/escudos/guarani.png"
                        className="size-24 object-contain"
                      />
                      <h2 className="font-semibold">Guarani</h2>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <div>
                      <p className="text-sm text-gray-500">Tipo de ingresso</p>
                      <p className="font-semibold">Infantil 11 anos</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Valor</p>
                      <p className="font-semibold">R$ 250,00</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h2>Quantidade</h2>

                    <div className="flex items-center gap-2">
                      <Button
                        disabled
                        size="icon"
                        type="button"
                        className="size-12 shrink-0 rounded-sm bg-zinc-300 text-zinc-800"
                      >
                        <Minus className="size-4" />
                      </Button>

                      <div className="flex h-12 w-full items-center justify-center rounded-sm bg-zinc-200 font-semibold">
                        1 ingresso
                      </div>

                      <Button
                        disabled
                        size="icon"
                        type="button"
                        className="size-12 shrink-0 rounded-sm bg-zinc-300 text-zinc-800"
                      >
                        <Plus className="size-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Data</p>
                        <p className="inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                          Domingo 23/02
                        </p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Abertura</p>
                        <p className="font-semibold">14H30min</p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Início do jogo</p>
                        <p className="font-semibold">18H30min</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <QrCode size={160} className="text-red-600" />
                    </div>
                  </div>

                  <div className="mt-6 border-t pt-3 text-center text-sm text-gray-500">
                    Atenção: Traga seu ingresso no jogo
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-full">
              <div className="w-full max-w-md overflow-hidden rounded-sm bg-white">
                <div className="bg-[url(background.png)] bg-cover bg-center bg-no-repeat p-6 text-white">
                  <div
                    className={cn(
                      'flex items-center justify-between bg-cover bg-center bg-no-repeat px-10 py-4',
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
                        src="/escudos/santos.png"
                        className="size-24 object-contain"
                      />
                      <h2 className="font-semibold">Santos</h2>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <div>
                      <p className="text-sm text-gray-500">Tipo de ingresso</p>
                      <p className="font-semibold">Infantil 11 anos</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Valor</p>
                      <p className="font-semibold">R$ 250,00</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h2>Quantidade</h2>

                    <div className="flex items-center gap-2">
                      <Button
                        disabled
                        size="icon"
                        type="button"
                        className="size-12 shrink-0 rounded-sm bg-zinc-300 text-zinc-800"
                      >
                        <Minus className="size-4" />
                      </Button>

                      <div className="flex h-12 w-full items-center justify-center rounded-sm bg-zinc-200 font-semibold">
                        1 ingresso
                      </div>

                      <Button
                        disabled
                        size="icon"
                        type="button"
                        className="size-12 shrink-0 rounded-sm bg-zinc-300 text-zinc-800"
                      >
                        <Plus className="size-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Data</p>
                        <p className="inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                          Quarta 12/02
                        </p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Abertura</p>
                        <p className="font-semibold">17H35min</p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Início do jogo</p>
                        <p className="font-semibold">21H35min</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <QrCode size={160} className="text-red-600" />
                    </div>
                  </div>

                  <div className="mt-6 border-t pt-3 text-center text-sm text-gray-500">
                    Atenção: Traga seu ingresso no jogo
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="w-full flex-1">
          <StepCheckoutForm />
        </div>
      </section>
    </main>
  )
}
