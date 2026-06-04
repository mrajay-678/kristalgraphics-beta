import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import serviceOne from "@/public/img/kg/service-1.png";
import serviceTwo from "@/public/img/kg/service-2.png";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
const marqueeItems = [
  "Labels ",
  "Stickers ",
  "Packaging ",
  "Sweatpants ",
  "T-Shirts ",
  "Hoodies ",
  "Banners ",
  "Posters ",
  "Business Cards ",
  "Flyers ",
  "Brochures ",
  "Vinyl Prints ",
  "Custom Merch ",
  "Apparel ",
  "Print On Demand ",
];
const ServiceHero = () => {
  return (
    <section className="pt-32 pb-52 text-center">
      <div className="text-center font-heading text-9xl leading-normal inline mx-auto relative">
        <Image src={serviceOne} alt="Customise Your Print" className="absolute w-8/12 -top-2/4 -left-2/4 service-animate-1"/>
        <Image src={serviceTwo} alt="Customise Your Print" className="absolute w-6/12 -top-2/4 -right-1/3 -z-10 service-animate-2"/>
        We print it all.
      </div>
      <div className="text-center font-heading text-7xl items-center flex justify-center ">
        <div className="leading-normal">Customise your</div>
        <div className="mx-10 leading-normal w-[20vw] flex overflow-hidden bg-[#FEBB12] [clip-path:polygon(0_0,100%_0,100%_100%,8%_100%,0_55%)] ">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            loop={true}
            speed={3000}
            allowTouchMove={false} // marquee usually doesn't need dragging
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            onTouchEnd={(swiper) => {
              swiper.autoplay.start();
            }}
            onClick={(swiper) => {
              swiper.autoplay.start();
            }}
            dir="ltr"
          >
            <div className="flex gap-8">
              {marqueeItems.map((item, index) => (
                <SwiperSlide key={index} style={{ width: "auto" }}>
                  <p className="text-7xl py-3 px-3 font-heading leading-tight" key={index} >{` ${item} ✦ `}</p>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <div>with us!</div>
      </div>
    </section>
  );
};

export default ServiceHero;
