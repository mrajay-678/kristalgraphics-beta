"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import instagram1 from "@/public/img/kg/instagram-1.png";
import instagram2 from "@/public/img/kg/instagram-2.png";
import instagram3 from "@/public/img/kg/instagram-3.png";

const fallbackPosts = [
  { id: "fallback-1", image: instagram1, alt: "Instagram post 1" },
  { id: "fallback-2", image: instagram2, alt: "Instagram post 2" },
  { id: "fallback-3", image: instagram3, alt: "Instagram post 3" },
  { id: "fallback-4", image: instagram3, alt: "Instagram post 4" },
];

const InstagramCard = ({ post, index }) => {
  return (
    <a
      href={post.permalink || "https://www.instagram.com/"}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open Instagram post ${index + 1}`}
      className="block overflow-hidden"
    >
      {post.imageUrl ? (
        <Image
          src={post.imageUrl}
          alt={post.caption || `Instagram post ${index + 1}`}
          width={500}
          height={500}
          unoptimized
          className=" h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      ) : (
        <Image
          src={post.image}
          alt={post.alt}
          className=" h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      )}
    </a>
  );
};

export const Instagram = () => {
  const [posts, setPosts] = useState(fallbackPosts);

  useEffect(() => {
    let isMounted = true;

    async function loadInstagramPosts() {
      try {
        const response = await fetch("/api/instagram");
        const data = await response.json();

        if (isMounted && Array.isArray(data.posts) && data.posts.length) {
          setPosts(data.posts);
        }
      } catch (error) {
        console.error("Instagram fetch failed:", error);
      }
    }

    loadInstagramPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="mxd-container grid-container py-16 md:py-24">
      {/* Top Content */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end">
        <h2 className="lg:w-6/12 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          We're highly <br />
          (almost incurably) social!
        </h2>

        <p className="lg:w-6/12 font-body text-xl leading-relaxed sm:text-2xl md:text-3xl lg:text-5xl">
          Follow us for behind-the-scenes production, service spotlights, and
          proof that print isn't dead it's just getting better.
        </p>
      </div>

      {/* Instagram Feed */}
      <div className="pt-12 md:pt-20">
        {posts.length <= 6 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className={index > 1 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <InstagramCard post={post} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={20}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
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
              1280: {
                slidesPerView: 6,
              },
            }}
          >
            {posts.map((post, index) => (
              <SwiperSlide key={post.id}>
                <InstagramCard post={post} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Instagram;