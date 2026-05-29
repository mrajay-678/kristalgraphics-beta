import Image from "next/image"

type BentoItem = {
  id: string
  title: string
  image: string
  className?: string
}

const equipment: BentoItem[] = [
  {
    id: "anatol-screen-printing",
    title: "Anatol Automatic 12-Color Screen Printing Machine",
    image: "/img/kg/portfolio/equipement-58.svg",
    className: "md:col-span-5 md:row-span-2",
  },
  {
    id: "truepress-label-press",
    title: "Truepress Jet L350UV Plus Label Press",
    image: "/img/kg/portfolio/equipement-60.svg",
    className: "md:col-span-7 md:row-span-2",
  },
  {
    id: "xerox-color-press",
    title: "Xerox Color Press 1000i",
    image: "/img/kg/portfolio/equipement-69.svg",
    className: "md:col-span-6 md:row-span-2",
  },
  {
    id: "mimaki-wide-format",
    title: "Mimaki UCVJ300 Wide Format Printer",
    image: "/img/kg/portfolio/equipement-59.svg",
    className: "md:col-span-6 md:row-span-2",
  },
  {
    id: "uv-dtf-printer",
    title: '24" UV DTF Printer',
    image: "/img/kg/portfolio/equipement-62.svg",
    className: "md:col-span-4 md:row-span-2",
  },
  {
    id: "yuxunda-cup-printer",
    title: "Yuxunda Digital Cup Printer YXD-CP1618",
    image: "/img/kg/portfolio/equipement-63.svg",
    className: "md:col-span-4 md:row-span-2",
  },
  {
    id: "mpro-button-machine",
    title: "MPRO Model 2 Electric Button Making Machine",
    image: "/img/kg/portfolio/equipement-64.svg",
    className: "md:col-span-4 md:row-span-2",
  },
  {
    id: "komori-offset-press",
    title: "Komori Lithrone Offset Press",
    image: "/img/kg/portfolio/equipement-65.svg",
    className: "md:col-span-12 md:row-span-3",
  },
]

function BentoCard({ item }: { item: BentoItem }) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        bg-white
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        ${item.className}
      `}
    >
      <div className="flex h-full flex-col">
        <div className="relative flex-1">
          {/* Using normal img for SVGs */}
          <img
            src={item.image}
            alt={item.title}
            className="
              h-full
              w-full
              object-contain
              transition-transform
              duration-500
              group-hover:scale-105
            " 
          />
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold leading-tight md:text-xl">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  return (
    <main className="bg-[#f5f5f5] px-4 py-28 text-black md:px-8 md:py-36">
      <section className="container mx-auto">
        <div className="mb-14">
          <h1 className="font-heading text-5xl leading-none md:text-7xl">
            Our Equipment
          </h1>

          <p className="mt-5 font-body text-lg leading-tight md:text-3xl">
            The foundation of our superior production lies in our
            high-end machinery.
            <br className="hidden md:block" />
            Explore the technology we use to bring your creative
            vision to life.
          </p>
        </div>

        {/* Dynamic Bento Grid */}
        <div
          className="
            grid
            auto-rows-[220px]
            grid-cols-1
            gap-6
            md:grid-cols-12
          "
        >
          {equipment.map((item) => (
            <BentoCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  )
}