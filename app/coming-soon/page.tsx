"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.querySelector("#header")?.classList.add("hidden");
    document.querySelector("#mxd-footer")?.classList.add("hidden");
  }, []);
  return (
    <main
      className="min-h-screen bg-[#181818] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-16 text-white"
      style={{
        backgroundImage: "url('/img/coming-soon/pattern.png')",
      }}
    >
      <div className="w-full text-center">
        {/* Logo */}
        <div className="relative mx-auto mb-10 flex h-[300px] w-[300px] items-center justify-center">
          <Image
            src="/img/coming-soon/circle.png"
            alt="Circle"
            width={300}
            height={300}
            className="animate-spin-slow"
            priority
          />

          <Image
            src="/img/coming-soon/logo.png"
            alt="Kristal Graphics"
            width={90}
            height={90}
            className="absolute w-32"
            priority
          />
        </div>

        {/* Heading */}
        <p className="text-3xl text-white">We're getting a makeover!</p>

        <p className="mx-auto mt-6 text-3xl leading-8 text-white">
          While our brand and website are getting an update, our shop remains
          fully operational.
        </p>

        <p className="mt-4 text-3xl text-white">
          To browse through our promotional products catalog{" "}
          <Link
            href="https://www.promoplace.com/kristalgraphics"
            target="_blank"
            className="font-medium text-white underline transition hover:!text-[#FEBB12]"
          >
            Click Here
          </Link>
        </p>

        {/* Address */}
        <div className="mt-14 space-y-5">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Image
              src="/img/coming-soon/location_on.svg"
              alt="Location"
              width={20}
              height={20}
              className="w-10"
            />

            <span className="text-white">
              9607 Canoga Ave, Chatsworth, CA 91311, United States
            </span>
          </div>

          <p className="text-white">Shop Hours : Monday – Friday | 9AM – 5PM</p>
        </div>

        {/* Contact */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/img/coming-soon/phone_in_talk.svg"
              alt="Phone"
              width={20}
              height={20}
              className="w-10"
            />

            <Link
              href="tel:+18183427822"
              className="transition hover:text-[#FEBB12]"
            >
              +1 (818) 342-7822
            </Link>
          </div>

          <span className="hidden md:block text-white/40">|</span>

          <div className="flex items-center gap-3">
            <Image
              src="/img/coming-soon/email.svg"
              alt="Email"
              width={20}
              height={20}
              className="w-10"
            />

            <Link
              href="mailto:info@kristalgraphics.net"
              className="transition hover:text-[#FEBB12]"
            >
              info@kristalgraphics.net
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
