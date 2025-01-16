/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react'

import { cn } from '../../@config/lib/cn'
import { Reveal } from '../reveal'

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any
    index: number
    hovered: number | null
    setHovered: React.Dispatch<React.SetStateAction<number | null>>
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'relative h-60 w-full overflow-hidden rounded-lg border-4 border-zinc-800 bg-zinc-800 transition-all duration-300 ease-out dark:bg-neutral-900 md:h-96',
        hovered !== null && hovered !== index && 'blur-[1px]',
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="absolute left-0 top-0 h-full w-full object-cover"
      />
      <div
        className={cn(
          'absolute inset-0 flex flex-col items-end bg-black/50 transition-opacity duration-300',
          hovered === index ? 'opacity-100' : 'opacity-0',
        )}
      >
        <div className="absolute bottom-10 left-5 bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
          {card.title}
        </div>
        <div className="absolute bottom-5 left-5 bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-sm font-semibold text-transparent">
          {card.subtitle}
        </div>
      </div>
    </div>
  ),
)

Card.displayName = 'Card'

type Card = {
  title: string
  src: string
  slug: string
}

export function FocusCardsSlug({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, index) => (
        <Reveal key={index}>
          <Card
            key={index}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        </Reveal>
      ))}
    </div>
  )
}

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 md:px-8 lg:grid-cols-3">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  )
}
