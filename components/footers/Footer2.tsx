import Link from "next/link";
import Image from "next/image";
import unionFooter from "@/public/img/kg/union-footer.svg";
import sageFooter from "@/public/img/kg/sage-footer.svg";

export default function Footer2({ text = "rayosttudio" }: { text?: string }) {
  return (
    <footer
      id="mxd-footer"
      className="mt-24 md:mt-32 lg:mt-52 bg-[url('/img/kg/footer-bg.svg')] bg-cover bg-top bg-no-repeat min-h-screen flex flex-col justify-end gap-20"
    >
      {/* Main Content */}
      <div className="relative mx-auto mxd-container grid-container py-16 md:py-24 !px-0 gap-16 pt-32 pb-20 md:pt-48 lg:flex-row lg:items-end lg:gap-10 lg:pt-72">
        {/* Left Content */}
        <div className="flex w-full flex-col justify-between lg:w-7/12">
          <h2 className="font-heading text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl lg:text-[5vw]">
            Ready to print something people keep forever?
          </h2>
        </div>

        {/* Right Content */}
        <div className="flex w-full items-end flex-col gap-10 lg:flex-row lg:justify-between pt-52">
          <h3 className="font-heading text-5xl w-6/12 font-medium text-white sm:text-6xl md:text-7xl lg:text-[5vw]">
            Get a <span className="text-[#FEBB12]">quote!</span>
          </h3>
          {/* Address */}
          <div className="flex flex-col items-center gap-2">
            <Image src={unionFooter} alt="Union Footer" />
            <Image src={sageFooter} alt="Sage Footer" className="w-3/5" />
          </div>
          <div>
            <h4 className="mb-10 font-body font-bold text-5xl text-white sm:text-2xl lg:text-3xl">
              Address:
            </h4>

            <p className="font-body text-2xl leading-relaxed text-white/90 sm:text-lg lg:text-3xl">
              9607 Canoga Ave,
              <br />
              Woodland Hills,
              <br />
              CA 91367
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-10 font-body font-bold text-5xl text-white sm:text-2xl lg:text-3xl">
              We got you!
            </h4>

            <div className="space-y-2">
              <Link
                href="mailto:info@kristalgraphics.com"
                className="block font-body text-3xl text-white/90 transition hover:text-[#FEBB12] sm:text-lg lg:text-3xl underline pb-8"
              >
                info@kristalgraphics.com
              </Link>
              <Link
                href="tel:+18183427822"
                className="block font-body text-3xl text-white/90 transition hover:text-[#FEBB12]"
              >
                +1 (818) 342-7822
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto pt-20 px-0 pb-10 md:pb-16 lg:pb-24">
          <div className="flex flex-col gap-6 border-t border-white/30 pt-8 md:flex-row md:items-center md:justify-between">
            <div className="font-body text-sm text-white/80 sm:text-2xl lg:text-xl">
              <p className="text-white text-xl pb-5">Privacy Policy | Terms of Service</p>
              <p className="text-white text-xl">© 1977 Kristal Graphics. All rights reserved</p>
            </div>

            <div className="font-body text-white/80 flex gap-28">
              <ul>
                <li className="pb-2 text-3xl">
                  <Link href="#" className="text-white">
                    Home
                  </Link>
                </li>
                <li className="pb-2 text-3xl">
                  <Link href="#" className="text-white">
                    Service
                  </Link>
                </li>
                <li className="pb-2 text-3xl">
                  <Link href="#" className="text-white">
                    Portfolio
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="pb-2 text-3xl">
                  <Link href="#" className="text-white">
                    About Us
                  </Link>
                </li>
                <li className="pb-2 text-3xl">
                  <Link href="#" className="text-white">
                    Catalog
                  </Link>
                </li>
                <li className="pb-2 text-3xl">
                  <Link href="#" className="text-white">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
    </footer>
  );
}
