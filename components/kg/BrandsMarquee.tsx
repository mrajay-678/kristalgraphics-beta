"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

export default function BrandsMarquee({
  items,
  direction = "rtl",
}: {
  items: string[];
  direction?: "rtl" | "ltr";
}) {
  // duplicate slides for seamless infinity
  const slides = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        loop
        loopAdditionalSlides={slides.length}
        spaceBetween={40}
        speed={5000}
        grabCursor
        allowTouchMove
        dir={direction}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,

        }}
      >
         
        {slides.map((item, index) => (
          <SwiperSlide key={`${item}-${index}`} className="!w-auto">
            <div className="marquee__item item-partners">
              <Image
                src={`/img/kg/brands/${item}`}
                alt={item}
                width={250}
                height={90}
                style={{ objectFit: "contain" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
