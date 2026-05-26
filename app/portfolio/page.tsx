import DynamicBentoGrid from "@/components/kg/DynamicBentoGrid"

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
    className: "md:col-span-5 md:row-span-6",
  },
  {
    id: "truepress-label-press",
    title: "Truepress Jet L350UV Plus Label Press",
    image: "/img/kg/portfolio/equipement-59.svg",
    className: "md:col-span-7 md:row-span-6",
  },
  {
    id: "xerox-color-press",
    title: "Xerox Color Press 1000i",
    image: "/img/kg/portfolio/equipement-60.svg",
    className: "md:col-span-5 md:row-span-7",
  },
  {
    id: "mimaki-wide-format",
    title: "Mimaki UCVJ300 Wide Format Printer",
    image: "/img/kg/portfolio/equipement-61.svg",
    className: "md:col-span-7 md:row-span-7",
  },
  {
    id: "uv-dtf-printer",
    title: '24" UV DTF Printer',
    image: "/img/kg/portfolio/equipement-62.svg",
    className: "md:col-span-6 md:row-span-6",
  },
  {
    id: "yuxunda-cup-printer",
    title: "Yuxunda Digital Cup Printer YXD-CP1618",
    image: "/img/kg/portfolio/equipement-63.svg",
    className: "md:col-span-6 md:row-span-12",
  },
  {
    id: "mpro-button-machine",
    title: "MPRO Model 2 Electric Button Making Machine",
    image: "/img/kg/portfolio/equipement-64.svg",
    className: "md:col-span-6 md:row-span-6",
  },
  {
    id: "komori-offset-press",
    title: "Komori Lithrone Offset Press",
    image: "/img/kg/portfolio/equipement-69.svg",
  },
]

export default function PortfolioPage() {
  return (
    <main className=" px-4 py-28 text-black md:px-8 md:py-36">
      <section className="mx-auto container px-5 pb-8 pt-24 md:px-6">
        <div className="mb-10">
          <h1 className="font-heading text-5xl leading-none md:text-7xl">Our Equipment</h1>
          <p className="mt-5 font-body leading-tight md:text-3xl">
            The foundation of our superior production lies in our high-end machinery.
            <br className="hidden md:block" />
            Explore the technology we use to bring your creative vision to life.
          </p>
        </div>

        <DynamicBentoGrid items={equipment} />
      </section>
    </main>
  )
}
