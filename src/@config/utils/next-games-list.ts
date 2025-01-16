export interface Game {
  date: string
  slug: string
  thumbail: string
  opponent: string
  gameTitle: string
  startTime: string
  shieldTime: string
  startGameTime: string
}

export const nextGamesList: Game[] = [
  {
    date: 'Domingo - 19/01/2025',
    thumbail:
      'https://loungebrahma.com.br/wp-content/uploads/2025/01/cor-velo-padrao-1.png',
    startTime: 'Abertura: 14H30min',
    startGameTime: 'Jogo: 18H30min',
    gameTitle: 'Corinthians x Velo Clube',
    slug: 'corinthians-x-velo-clube',
    shieldTime: '/escudos/velo-clube.png',
    opponent: 'Velo Clube',
  },
  {
    date: 'Quarta - 22/01/2025',
    thumbail:
      'https://loungebrahma.com.br/wp-content/uploads/2025/01/cor-agua-padrao.png',
    startTime: 'Abertura: 17H35min',
    startGameTime: 'Jogo: 21H35min',
    gameTitle: 'Corinthians x Água Santa',
    slug: 'corinthians-x-agua-santa',
    shieldTime: '/escudos/agua-santa.png',
    opponent: 'Água Santa',
  },
  {
    date: 'Sábado - 01/02/2025',
    thumbail:
      'https://loungebrahma.com.br/wp-content/uploads/2025/01/cor-noroeste-padrao.png',
    startTime: 'Abertura: 14H30min',
    startGameTime: 'Jogo: 18H30min',
    gameTitle: 'Corinthians x Noroeste',
    slug: 'corinthians-x-noroeste',
    shieldTime: '/escudos/noroeste.png',
    opponent: 'Noroeste',
  },
  {
    date: 'Domingo - 09/02/2025',
    thumbail:
      'https://loungebrahma.com.br/wp-content/uploads/2025/01/cor-saobernardo-padrao_.png',
    startTime: 'Abertura: 16H30min',
    startGameTime: 'Jogo: 20H30min',
    gameTitle: 'Corinthians x São Bernardo FC',
    slug: 'corinthians-x-sao-bernardo-fc',
    shieldTime: '/escudos/sao-bernardo-fc.png',
    opponent: 'São Bernardo',
  },
  {
    date: 'Quarta - 12/02/2025',
    thumbail:
      'https://loungebrahma.com.br/wp-content/uploads/2025/01/cor-santos-padrao.png',
    startTime: 'Abertura: 17H35min',
    startGameTime: 'Jogo: 21H35min',
    gameTitle: 'Corinthians x Santos',
    slug: 'corinthians-x-santos',
    shieldTime: '/escudos/santos.png',
    opponent: 'Santos FC',
  },
  {
    date: 'Domingo - 23/02/2025',
    thumbail:
      'https://loungebrahma.com.br/wp-content/uploads/2025/01/cor-guarani-padrao_.png',
    startTime: 'Abertura: 14H30min',
    startGameTime: 'Jogo: 18H30min',
    gameTitle: 'Corinthians x Guarani',
    slug: 'corinthians-x-guarani',
    shieldTime: '/escudos/guarani.png',
    opponent: 'Guarani',
  },
]
