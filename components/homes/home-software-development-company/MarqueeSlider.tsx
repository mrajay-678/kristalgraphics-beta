"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import logo from "@/public/img/kg/logo.svg";
import "swiper/css";
import Image from "next/image";

export default function MarqueeSlider({ items }: { items: string[] }): React.JSX.Element {
  return (
    <div className="mxd-section padding-mtext-pre-grid">
      <div className="mxd-container fullwidth-container">
        <div className="mxd-block">
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            freeMode={{
              enabled: true,
              momentum: false,
              momentumBounce: false,
            }}
            slidesPerView="auto"
            spaceBetween={20}
            allowTouchMove={false}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={5000}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index} style={{ width: "auto" }}>
                <div className="marquee__item one-line item-regular text">
                  <p className="text-black marquee__text font-heading " dangerouslySetInnerHTML={{ __html: item }}></p>

                  <div className="p-5 marquee__image">
                    <Image src={logo} alt="Logo" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}