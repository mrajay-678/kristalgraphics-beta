"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import logo from "@/public/img/kg/logo.svg";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";

export default function MarqueeSlider({
  items,
  className,
}: {
  items: string[];
  className?: string;
}): React.JSX.Element {
  return (
    <div className="mxd-section padding-mtext-pre-grid">
      <div className="mxd-container fullwidth-container">
        <div className="mxd-block">
          <Swiper
            className="brands-marquee-swiper"
            modules={[Autoplay, FreeMode]}
            loop={true}
            freeMode={true}
            grabCursor={true}
            allowTouchMove={true}
            slidesPerView="auto"
            spaceBetween={40}
            speed={5000} // smooth continuous movement
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true, // stop only on hover
            }}
          >
            {items.map((item, index) => (
              <SwiperSlide
                key={index}
                style={{ width: "auto" }}
              >
                <div className="marquee__item one-line item-regular text flex items-center">
                  <p
                    className={`text-black marquee__text font-heading ${className}`}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />

                  <div className="p-5 marquee__image mt-10">
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