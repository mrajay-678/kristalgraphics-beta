import Image from "next/image";
import equipment1 from "@/public/img/kg/portfolio/equipement-58.svg";
import equipment2 from "@/public/img/kg/portfolio/equipement-60.svg";
import equipment3 from "@/public/img/kg/portfolio/equipement-61.svg";
import equipment4 from "@/public/img/kg/portfolio/equipement-62.svg";
import equipment5 from "@/public/img/kg/portfolio/equipement-63.svg";
import equipment6 from "@/public/img/kg/portfolio/equipement-64.svg";
import equipment7 from "@/public/img/kg/portfolio/equipement-69.svg";
import equipment8 from "@/public/img/kg/portfolio/equipement-59.svg";

type BentoItem = {
  id: string;
  title: string;
  image: string;
  className?: string;
};

const equipment: BentoItem[] = [
  {
    id: "anatol-screen-printing",
    title: "Anatol Automatic 12-Color Screen Printing Machine",
    image: equipment1,
    className: "md:w-5/12 h-[488px] h-auto md:pr-7 mb-18",
  },
  {
    id: "truepress-label-press",
    title: "Truepress Jet L350UV Plus Label Press",
    image: equipment2,
    className: "md:w-7/12 h-[488px] h-auto md:pl-7 mb-18",
  },
  {
    id: "xerox-color-press",
    title: "Xerox Color Press 1000i",
    image: equipment7,
    className: "md:w-6/12 h-[662px] h-auto mb-18 md:pr-7",
  },
  {
    id: "mimaki-wide-format",
    title: "Mimaki UCVJ300 Wide Format Printer",
    image: equipment8,
    className: "md:w-6/12 h-[662px] h-auto mb-18 md:pl-7",
  },
  {
    id: "uv-dtf-printer",
    title: '24" UV DTF Printer',
    image: equipment3,
    className: "md:w-6/12 h-[662px] h-auto mb-18 md:pr-7",
  },
  {
    id: "yuxunda-cup-printer",
    title: "Yuxunda Digital Cup Printer YXD-CP1618",
    image: equipment4,
    className: "md:w-6/12 h-[662px] h-auto mb-18 md:pl-7",
  },
  {
    id: "komori-offset-press",
    title: "Komori Lithrone Offset Press",
    image: equipment6,
    className: "md:w-full",
  },
];

export default function PortfolioPage() {
  return (
    <main className="px-4 text-black py-60">
      <section className="container mx-auto">
        <div className="mb-14">
          <h1 className="font-heading text-7xl leading-none md:text-9xl">
            Our Equipment
          </h1>

          <p className="mt-5 font-body  leading-tight text-5xl">
            The foundation of our superior production lies in our high-end
            machinery.
            <br className="hidden md:block" />
            Explore the technology we use to bring your creative vision to life.
          </p>
        </div>

        {/* Dynamic Bento Grid */}
        <div
          className="
            md:flex
            flex-wrap
            justify-between
          "
        >
          {equipment.map((item) => (
            <div key={item.id} className={`mb-10 ${item.className}`}>
              <Image
                key={item.id}
                src={item.image}
                alt={item.title}
                className={`md:w-full h-full`}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
