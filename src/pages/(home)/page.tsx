import { Eye, Link2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '../../components/ui/button'

export function HomePage() {
  return (
    <main>
      <div className="container flex items-center gap-10 py-20">
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-700">
            Viva a <strong className="text-red-700">melhor experiência</strong>,{' '}
            <br /> no Camarote Lounge Brahma <br /> da{' '}
            <strong className="text-red-700">Neo Química Arena.</strong>
          </h2>

          <h4 className="mt-3 text-xl font-semibold text-gray-600">
            Camarote Open Bar & Open Food com uma vista incrível para os jogos
            do Corinthians.
          </h4>

          <div className="mt-4 flex items-center gap-4">
            <Button
              type="button"
              variant="outline"
              title="Clique para ver os próximos jogos"
            >
              <Eye className="mr-2 size-4" />
              Ver os próximos jogos
            </Button>

            <Link
              to="/galeria"
              title="Clique para acessar a galeria de fotos do Lounge Brahma"
              className="flex items-center text-sm transition-all hover:brightness-75"
            >
              <Link2 className="mr-2 size-4" /> Acessar galeria de fotos
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <video
            loop
            muted
            autoPlay
            className="rounded-md"
            src="https://loungebrahma.com.br/wp-content/themes/lounge-brahma/assets/images/Snapinsta.app_video_2646FAC976DCBA08C53F7C81AD0E86BE_video_dashinit.mp4"
          />
        </div>
      </div>
    </main>
  )
}
