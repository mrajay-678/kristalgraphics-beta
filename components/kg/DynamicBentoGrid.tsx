"use client"

import Image from "next/image"

type BentoItem = {
  id: number
  title: string
  image: string
  className?: string
}

type Props = {
  items: BentoItem[]
}

export default function DynamicBentoGrid({
  items,
}: Props) {
  const getSpan = (
    width: number,
    height: number,
    index: number
  ) => {
    const ratio = width / height

    // Wide
    if (ratio > 1.4) {
      return "col-span-12 md:col-span-8 row-span-2"
    }

    // Tall
    if (ratio < 0.8) {
      return "col-span-12 md:col-span-4 row-span-4"
    }

    // Mix layout
    return index % 5 === 0
      ? "col-span-12 md:col-span-8 row-span-3"
      : "col-span-12 md:col-span-4 row-span-2"
  }

  return (
    <div className="grid grid-cols-12 auto-rows-[120px] gap-4">
      {items.map((item, index) => (
        <BentoCard
          key={item.id}
          item={item}
          index={index}
          getSpan={getSpan}
        />
      ))}
    </div>
  )
}

function BentoCard({
  item,
  index,
  getSpan,
}: {
  item: BentoItem
  index: number
  getSpan: (
    width: number,
    height: number,
    index: number
  ) => string
}) {
  // Fake dimensions for demo
  // Replace with actual image dimensions
  const width = 1200
  const height = index % 3 === 0 ? 1600 : 800

  return (
    <div
      className={`
        ${getSpan(width, height, index)}
        ${item.className || ''}
        overflow-hidden
        rounded-2xl
        transition-all
        duration-300
        hover:scale-[1.02]
      `}
    >
      <div className="relative h-[100%] w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain"
        />
      </div>

    </div>
  )
}