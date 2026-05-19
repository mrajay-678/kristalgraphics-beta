import VelocityMarquee from "@/components/animation/VelocityMarquee";
import Image from "next/image";
import marquee1 from "@/public/img/kg/marquee-1.png";
import marquee2 from "@/public/img/kg/marquee-2.png";
import marquee3 from "@/public/img/kg/marquee-3.png";
import marquee4 from "@/public/img/kg/marquee-4.png";
import marquee5 from "@/public/img/kg/marquee-5.png";
import marquee6 from "@/public/img/kg/marquee-6.png";

const marqueeImages = [marquee1, marquee2, marquee3, marquee4, marquee5, marquee6];

export default function Hero() {
  return (
    <div className="mxd-section mxd-hero-section padding-grid-pre-mtext">
      <div className="mxd-hero-03">
        <div className="mxd-hero-03__wrap loading-wrap">
          {/* top part */}
          <div className="mxd-hero-03__top">
            {/* marquee */}
            <div className="mxd-hero-03__marquee loading__item pt-96">
              {/* Marquee Start */}
              <VelocityMarquee className="marquee marquee-right--gsap">
                {/* item */}
                {
                  Array.from({ length: 6 }, (_, i) => (
                    marqueeImages.map((image, index) => (
                      <div key={index} className="marquee__item one-line">
                        <div className="hero-03-marquee__image">
                          <Image
                            className="mxd-move"
                            alt="Image"
                            src={image}
                            priority
                          />
                        </div>
                      </div>
                    ))
                  ))
                }
              </VelocityMarquee>
              {/* Marquee End */}
            </div>
            {/* headline */}
            <div className="mxd-hero-03__headline">
              <p className="hero-03-headline__caption loading__item text-white !font-body font-light">
                Memorable merch
                <br />
                that makes your brand
                <br />
                 impossible to ignore
              </p>
              <div className="text-black hero-03-headline__title loading__item">
                <div className="!text-[9vw] font-heading">Kristal  <span className="">Graphics</span></div>  
              </div>
            </div>
          </div>
          {/* bottom part */}
          <div className="mxd-hero-03__bottom">
            <div className="mxd-container">
              {/* video divider */}
              <div className="mxd-divider">
                <div className="mxd-divider__video">
                  <Image
                    className="mxd-pulse-small"
                    alt="Image"
                    src="/img/kg/hero-1.png"
                    width={800}
                    height={780}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
