import RevealText from "../animation/RevealText";
import Image from "next/image";
import juzer from "@/public/img/kg/teams/juzer.svg";
import murtaza from "@/public/img/kg/teams/murtaza.svg";
import courtney from "@/public/img/kg/teams/courtney.svg";
import darwin from "@/public/img/kg/teams/darwin.svg";
import tasneem from "@/public/img/kg/teams/tasneem.svg";
import ana from "@/public/img/kg/teams/ana.svg";
import narisara from "@/public/img/kg/teams/narisara.svg";
import nafisa from "@/public/img/kg/teams/nafisa.svg";
import fatema from "@/public/img/kg/teams/fatema.svg";

let team = [juzer, murtaza, courtney, darwin, tasneem, ana, narisara, nafisa, fatema];

const Teams = () => {
  return (
    <section className="container mx-auto pt-20 pb-52">
      <div className="mxd-section-title__hrtitle anim-uni-in-up">
        <RevealText
          as="h2"
          className="font-light reveal-type font-heading text-9xl mb-20"
        >
          Meet the team
        </RevealText>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-20 pb-24">
        {team.map((member, i) => (
          <div
            key={i}
            className="mb-20"
          >
            <Image
              src={member}
              alt={`Team member ${i + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;
