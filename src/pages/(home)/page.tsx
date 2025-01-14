import {
  Eye,
  ImageIcon,
  Link2,
  MoreVertical,
  Mouse,
  PlayCircle,
  Ticket,
  Users2,
} from 'lucide-react'

export function HomePage() {
  return (
    <main>
      <section className="relative h-screen">
        {/* Sidebar */}
        <aside className="absolute left-0 top-0 z-20 h-full w-28 border-r-4 border-r-zinc-800 bg-zinc-950/80 py-10">
          <div className="p-4">
            <img
              alt="Logo do Lounge Brahma"
              src="https://loungebrahma.com.br/wp-content/themes/lounge-brahma/assets/images/logo-lounge-brahma-branco.png"
            />
          </div>

          <nav className="mt-5">
            <div className="flex cursor-pointer items-center justify-center bg-zinc-700 py-5 text-zinc-300 transition-all hover:brightness-75">
              <Ticket className="size-7" />
            </div>

            <div className="flex cursor-pointer items-center justify-center py-5 text-zinc-300 transition-all hover:bg-zinc-700 hover:brightness-75">
              <ImageIcon className="size-7" />
            </div>

            <div className="flex cursor-pointer items-center justify-center py-5 text-zinc-300 transition-all hover:bg-zinc-700 hover:brightness-75">
              <Users2 className="size-7" />
            </div>

            <div className="flex cursor-pointer items-center justify-center py-5 text-zinc-300 transition-all hover:bg-zinc-700 hover:brightness-75">
              <PlayCircle className="size-7" />
            </div>

            <div className="flex cursor-pointer items-center justify-center py-5 text-zinc-300 transition-all hover:bg-zinc-700 hover:brightness-75">
              <MoreVertical className="size-7" />
            </div>
          </nav>
        </aside>

        <div className="relative h-full">
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center bg-zinc-950/80 pl-28">
            <div className="px-20">
              <h2 className="mt-2 max-w-4xl select-none text-6xl font-extrabold leading-[4rem] tracking-tight text-zinc-200">
                Viva a{' '}
                <strong className="text-red-700">melhor experiência</strong>, no
                Camarote Lounge Brahma <br /> da{' '}
                <strong className="text-red-700">Neo Química Arena.</strong>
              </h2>

              <h4 className="mt-3 max-w-xl select-none text-2xl font-semibold text-zinc-300">
                Camarote Open Bar & Open Food com uma vista incrível para os
                jogos do Corinthians.
              </h4>

              <button
                className="mt-4"
                title="Clique para ver os próximos jogos"
              >
                <Mouse className="size-4" />
                Clique para descer
              </button>
            </div>
          </div>
          <video
            loop
            muted
            autoPlay
            className="pointer-events-none h-full w-full select-none object-cover"
            src="https://loungebrahma.com.br/wp-content/themes/lounge-brahma/assets/images/Snapinsta.app_video_2646FAC976DCBA08C53F7C81AD0E86BE_video_dashinit.mp4"
          />
        </div>

        {/* <div className="absolute bottom-0 left-0 z-30 w-full bg-gradient-to-b from-transparent to-zinc-950 py-20 pl-28">
          <div className="flex items-start p-5">
            <div className="bg-zinc-100">daw</div>
          </div>
        </div> */}
      </section>
    </main>
  )
}
