"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

export default function MarqueeSlider({ items }: { items: string[] }) {
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
                  <p className="marquee__text text-black" dangerouslySetInnerHTML={{ __html: item }}></p>

                  <div className="marquee__image">
                    <svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_2026_72)">
                        <path d="M31.334 0V57.4433L0 23.5V0H31.334Z" fill="#FEBB12"/>
                        <path d="M94 62.666H36.5546L70.5 94.0001H94V62.666Z" fill="#FEBB12"/>
                        <path d="M62.666 0H94V31.334L36.5546 57.4433L62.666 0Z" fill="#FEBB12"/>
                        <path d="M0 62.666H31.334V94.0001H20.8887L0 73.1114V62.666Z" fill="#FEBB12"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_2026_72">
                          <rect width="94" height="94" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
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