"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedButton from "../animation/AnimatedButton";
import { usePathname } from "next/navigation";
import ThemeSwitcherButton from "./ColorSwitcher";
import Image from "next/image";

export default function Header1() {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={`mxd-header items-center ${isHidden ? "is-hidden" : ""}`}>
      {/* header logo */}
      <div className="mxd-header__logo loading__fade ">
        <Link href={`/home-main`} className="mxd-logo">
          {/* logo icon */}
          <Image src="../img/kg/Vector.svg" alt="LOGO" width={200} height={100} />
        </Link>
      </div>
      {/* header controls */}
      <ul className="flex justify-between w-2/4">
        <li>
          <Link href="/" className={`mxd-header__nav-link ${pathname === "/" ? "active border-b-2 border-[#FEBB12] font-bold" : ""}`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/service" className={`mxd-header__nav-link ${pathname === "/service" ? "active border-b-2 border-[#FEBB12] font-bold" : ""}`}>
            Our Service
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className={`mxd-header__nav-link ${pathname === "/portfolio" ? "active border-b-2 border-[#FEBB12] font-bold" : ""}`}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/about" className={`mxd-header__nav-link ${pathname === "/about" ? "active border-b-2 border-[#FEBB12] font-bold" : ""}`}>
            About us
          </Link>
        </li>
        <li>
          <Link href="/contact" className={`mxd-header__nav-link ${pathname === "/contact" ? "active border-b-2 border-[#FEBB12] font-bold" : ""}`}>
            Get a Quote
          </Link>
        </li>
      </ul>
      <div className="mxd-header__controls loading__fade">
        {/* <ThemeSwitcherButton /> */}
        <AnimatedButton
          text="Say Hello"
          className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right"
          href="/contact"
        >
          <i className="ph-bold ph-arrow-up-right" />
        </AnimatedButton>
      </div>
    </header>
  );
}
