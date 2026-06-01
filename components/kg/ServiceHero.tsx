import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
const marqueeItems = [
  "Labels ✦",
  "Stickers ✦",
  "Packaging ✦",
  "Sweatpants ✦",
  "T-Shirts ✦",
  "Hoodies ✦",
  "Banners ✦",
  "Posters ✦",
  "Business Cards ✦",
  "Flyers ✦",
  "Brochures ✦",
  "Vinyl Prints ✦",
  "Custom Merch ✦",
  "Apparel ✦",
  "Print On Demand ✦",
];
const ServiceHero = () => {
  return (
    <section className="pt-32 pb-52 ">
      <div className="text-center font-heading text-9xl">We print it all.</div>
      <div className="text-center font-heading text-7xl items-center flex justify-center ">
        <div>Customise your</div>
        <div className="mx-10 py-10 w-[20vw] flex overflow-hidden bg-[#FEBB12] [clip-path:polygon(0_0,100%_0,100%_100%,8%_100%,0_55%)] ">
          <Swiper
            className="brands-marquee-swiper"
            modules={[Autoplay, FreeMode]}
            loop={true}
            freeMode={true}
            grabCursor={true}
            allowTouchMove={true}
            slidesPerView="auto"
            spaceBetween={20}
            speed={5000} // smooth continuous movement
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true, // stop only on hover
            }}
          >
            <div className="flex gap-8">
              {marqueeItems.map((item, index) => (
                <SwiperSlide
                  key={index}
                  style={{ width: "auto" }}
                >

                  <div key={index}>{item}</div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <div>with us!</div>
      </div>
    </section>
  )
}

export default ServiceHero
