import TimelineSection from "../../components/about/TimelineSection";
import Image from "next/image";
import aboutOne from "@/public/img/kg/about-1.png"
import aboutTwo from "@/public/img/kg/about-2.png"
import Approch from "@/components/common/Approch";
import Teams from "@/components/kg/Teams";
export const page = () => {
  return (
    <main className="bg-[#FEFEFE]">
      <section className="pt-60">
      <TimelineSection />
      </section>
      <section id="about" className="md:flex container gap-20 mx-auto pt-96">
          <div className="md:w-2/4">
            <Image src={aboutOne} alt="Murtuza" className="object-cover h-3/4"/>
            <div className="pt-20">
              <p className="text-5xl font-thin font-body">For four decades, we've partnered with businesses, event planners, agencies, and brands who need reliable quality and honest timelines. With an in-house design team for support, we don't just print what you ask for, we guide you to what actually works for your project, budget, and goals.</p>
            </div>
          </div>
          <div className="md:w-2/4">
            <div className="pb-20">
              <p className="pb-10 text-5xl font-thin font-body">Kristal Graphics has been around since 1977. Trusted for our quality, partnered with for our expertise.</p>
              <p className="text-5xl font-thin font-body">
              What started as a small print shop in Los Angeles has grown into a full-service production house offering screen printing, embroidery, DTF transfers, labels, packaging, and promotional products. All made in-house by skilled union workers. 
              </p>
            </div>
            <Image src={aboutTwo} alt="Murtuza" className="object-contain h-3/4"/>
          </div>
      </section>
      <Approch />
      <Teams/>
    </main>
  )
}

export default page;