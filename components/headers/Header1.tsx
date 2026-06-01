"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedButton from "../animation/AnimatedButton";
import { usePathname } from "next/navigation";
import ThemeSwitcherButton from "./ColorSwitcher";
import Image from "next/image";

import logo from "@/public/img/kg/Vector.svg";

export default function Header1() {
  const pathname = usePathname();

  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About us", path: "/about-us" },
    { name: "Catalog", path: "https://www.promoplace.com/kristalgraphics" },
  ];

  return (
    <header
      id="header"
      className={`mxd-header fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isHidden ? "py-3" : "py-5"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        
        {/* Logo */}
        <div className="mxd-header__logo loading__fade">
          <Link href="/" className="mxd-logo">
            <Image
              src={logo}
              alt="Logo"
              width={180}
              height={80}
              className="h-auto w-[130px] sm:w-[160px] lg:w-[180px]"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center w-full text-center justify-evenly xl:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`mxd-header__nav-link relative pb-1 text-3xl transition-all duration-300 ${
                  pathname === link.path
                    ? "border-b-2 border-[#FEBB12] font-bold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="hidden items-center w-3/12 gap-4 xl:flex">
          {/* <ThemeSwitcherButton /> */}

          <AnimatedButton
            text="Get a Quote!"
            className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right !text-3xl !font-heading"
            href="/get-a-quote"
          >
            <i className="ph-bold ph-arrow-up-right" />
          </AnimatedButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex h-10 w-10 items-center justify-center xl:hidden"
        >
          <div className="space-y-1.5">
            <span className="block h-[2px] w-6 bg-white"></span>
            <span className="block h-[2px] w-6 bg-white"></span>
            <span className="block h-[2px] w-6 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 xl:hidden ${
          mobileMenu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/10 bg-black px-5 py-6">
          
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setMobileMenu(false)}
                  className={`block text-lg transition-all duration-300 ${
                    pathname === link.path
                      ? "font-bold text-[#FEBB12]"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center justify-between gap-4">
            <ThemeSwitcherButton />

            {/* <AnimatedButton
              text="Get a Quote!"
              className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right"
              href="/get-a-quote"
            >
              Get a Quote!
              <i className="ph-bold ph-arrow-up-right" />
            </AnimatedButton> */}
          </div>

        </div>
      </div>
    </header>
  );
}
