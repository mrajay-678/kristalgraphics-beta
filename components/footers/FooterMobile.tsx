import Link from "next/link";
import Image from "next/image";

import unionFooter from "@/public/img/kg/union-footer.svg";
import sageFooter from "@/public/img/kg/sage-footer.svg";
import blacknimonics from "@/public/img/kg/footer-blacknimonics.svg";
import whitenimonics from "@/public/img/kg/footer-whitenimonics.svg";

export default function FooterMobile() {
  return (
    <footer className="md:hidden">
      {/* Pattern */}
      <div className="flex justify-end px-5 pt-5">
        <Image src={blacknimonics} alt="Pattern" className="w-1/4 mb-2" />
      </div>

      <div className="px-5 pb-8 bg-[#181818] pt-5">
        <div className="ms-auto w-8/12">
          <Image
            src={whitenimonics}
            alt="White Monics"
            className="w-8/12 ms-auto"
          />
        </div>
        {/* Heading */}
        <h2 className="mt-8 font-heading text-[40px] leading-[1.05] font-light text-white">
          Ready to print
          <br />
          something people
          <br />
          keep forever?
        </h2>

        {/* CTA */}
        <Link
          href="/contact"
          className="mt-16 inline-block font-heading text-[42px] font-semibold leading-none text-white"
        >
          Get a <span className="text-[#FEBB12]">quote!</span>
        </Link>

        {/* Info */}
        <div className="mt-16 flex">
          {/* Address */}

          <div className="w-3/4 ">
            <div className="flex gap-10">
              <div>
                <h4 className="mb-4 text-[13px] font-bold text-white">
                  Address
                </h4>
                <p className="text-[11px] leading-6 text-white/80">
                  9607 Canoga Ave.
                  <br />
                  Chatsworth,
                  <br />
                  CA 91311
                </p>
              </div>
              {/* Contact */}
              <div>
                <h4 className="mb-4 text-[13px] font-bold text-white">
                  We got you!
                </h4>
                <Link
                  href="mailto:hello@kristalgraphics.com"
                  className="block break-all text-[11px] leading-5 text-white underline"
                >
                  hello@kristalgraphics.com
                </Link>
                <Link
                  href="tel:+18183427822"
                  className="mt-3 block text-[11px] text-white"
                >
                  +1 (818) 342-7822
                </Link>
              </div>
            </div>
            {/* Logos */}
            <div className="flex items-center justify-start gap-6 mt-20">
              <Image src={unionFooter} alt="Union" className="w-2/4" />

              <Image src={sageFooter} alt="Sage" className="w-1/4" />
            </div>
          </div>

          {/* Links */}
          <div>
            <ul className="space-y-2 text-[11px] text-white">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/catalog">Promo Products</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/20 pt-5">
          <p className="text-center text-[10px] text-white/70">
            Privacy Policy | Terms of Service
          </p>

          <p className="mt-2 text-center text-[10px] text-white/70">
            © 1977 Kristal Graphics. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
