"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const fallbackPosts = [
  {
    id: "fallback-1",
    image: "/video/kg/insta-1.mp4",
    link: "https://www.instagram.com/p/DXptlF7j7ui/",
  },
  {
    id: "fallback-2",
    image: "/video/kg/insta-2.mp4",
    link: "https://www.instagram.com/p/DX7tPD7S4-K/",
  },
  {
    id: "fallback-3",
    image: "/video/kg/insta-3.mp4",
    link: "https://www.instagram.com/p/DUlzV91kiFX/",
  },
  {
    id: "fallback-4",
    image: "/video/kg/insta-4.mp4",
    link: "https://www.instagram.com/p/DUJPKTJEp5u/",
  },
];

export default function Instagram() {
  return (
    <section className="mxd-container grid-container py-16 md:py-24">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end">
        <h2 className="lg:w-6/12 font-heading text-7xl">
          We're highly <br />
          (almost incurably) social!
        </h2>

        <p className="lg:w-6/12 font-body text-5xl">
          Follow us for behind-the-scenes action, service spotlights and
          exclusive offers.
        </p>
      </div>

      <div className="pt-12 md:pt-20">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {fallbackPosts.map((post, index) => (
            <SwiperSlide key={post.id}>
              <a
                href={"https://www.instagram.com/"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open Instagram post ${index + 1}`}
                className="block overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <video
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                    disablePictureInPicture
                    controls={false}
                    className="h-3/4 w-full object-cover transition duration-500 group-hover:scale-105"
                  >
                    <source src={post.image} type="video/mp4" />
                  </video>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
