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
    <section className="pt-24 md:pt-32 pb-24 md:pb-52 text-center overflow-hidden">
      <div className="relative inline-block mx-auto">
        <Image
          src={serviceOne}
          alt="Customise Your Print"
          className="absolute w-56 md:w-64 lg:w-[60%] -top-12 md:-top-28 -left-16 md:-left-[40%] service-animate-1"
        />

        <Image
          src={serviceTwo}
          alt="Customise Your Print"
          className="absolute w-32 md:w-48 lg:w-[40%] -top-10 md:-top-28 -right-8 md:-right-64 -z-10 service-animate-2"
        />

        <h1 className="font-heading text-7x lg:text-9xl leading-[1.1]">
          We print it all.
        </h1>
      </div>

      <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-0">
        <div className="font-heading text-5xl lg:text-7xl leading-tight">
          Customise your
        </div>

        <div className="w-[90vw] sm:w-[70vw] md:w-[30vw] mx-0 lg:mx-10 overflow-hidden bg-[#FEBB12] [clip-path:polygon(0_0,100%_0,100%_100%,8%_100%,0_55%)]">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            loop
            speed={3000}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
          >
            {marqueeItems.map((item, index) => (
              <SwiperSlide key={index} style={{ width: "auto" }}>
                <p className="font-heading text-5xl lg:text-7xl py-2 md:py-3 px-3 leading-tight whitespace-nowrap">
                  {item} ✦
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="font-heading text-5xl lg:text-7xl leading-tight">
          with us!
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
