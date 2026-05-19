"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function BrandsMarquee({ items, direction = "left" }: { items: string[], direction?: "left" | "right" }) {
  const slides = [...items, ...items];

  return (
    <div className="mxd-section">
      <div className="mxd-container fullwidth-container">
        <div className="mxd-block">
          <Swiper
            className="brands-marquee-swiper"
            modules={[Autoplay]}
            loop
            slidesPerView="auto"
            spaceBetween={0}
            speed={4000}
            grabCursor={true}
            allowTouchMove
            loopAdditionalSlides={items.length}
            observer
            observeParents
            dir={direction === "left" ? "ltr" : "rtl"}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={`${item}-${index}`} style={{ width: "auto" }}>
                <div className="marquee__item item-partners">
                  <Image
                    src={`/img/kg/brands/${item}`}
                    alt={item.replace(/\.[^.]+$/, "").replace(/-/g, " ")}
                    width={250}
                    height={90}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
