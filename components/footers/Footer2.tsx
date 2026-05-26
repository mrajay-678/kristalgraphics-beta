import Link from "next/link";

export default function Footer2({
  text = "rayosttudio",
}: {
  text?: string;
}) {
  return (
    <footer
      id="mxd-footer"
      className="mt-24 md:mt-32 lg:mt-52 bg-[url('/img/kg/footer-bg.svg')] bg-cover bg-top bg-no-repeat"
    >
      {/* Main Content */}
      <div className="relative mx-auto w-12/12 max-w-[1920px] px-28 gap-16 pt-32 pb-20 md:pt-48 lg:flex-row lg:items-end lg:gap-10 lg:pt-72">
        
        {/* Left Content */}
        <div className="flex w-full flex-col justify-between lg:w-7/12">
          
          <h2 className="font-heading text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl lg:text-[5vw]">
            Ready to print something people keep forever?
          </h2>


        </div>

        {/* Right Content */}
        <div className="flex w-full items-end flex-col gap-10 lg:flex-row lg:justify-between pt-12 md:pt-20 lg:pt-40">
          
          <h3 className="font-heading text-5xl font-medium text-white sm:text-6xl md:text-7xl lg:text-[5vw]">
            Get a <span className="text-[#FEBB12]">quote!</span>
          </h3>
          {/* Address */}
          <div>
            <h4 className="mb-3 font-body text-5xl text-white sm:text-2xl lg:text-3xl">
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
            <h4 className="mb-3 font-body text-3xl text-white sm:text-2xl lg:text-3xl">
              We got you!
            </h4>

            <div className="space-y-2">
              <Link
                href="mailto:info@kristalgraphics.com"
                className="block font-body text-2xl text-white/90 transition hover:text-[#FEBB12] sm:text-lg lg:text-3xl"
              >
                info@kristalgraphics.com
              </Link>

              <Link
                href="tel:+18183427822"
                className="block font-body text-2xl text-white/90 transition hover:text-[#FEBB12] sm:text-lg lg:text-3xl"
              >
                +1 (818) 342-7822
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto w-11/12 max-w-[1920px] px-32 pb-10 md:pb-16 lg:pb-24">
        
        <div className="flex flex-col gap-6 border-t border-white/30 pt-8 md:flex-row md:items-center md:justify-between">
          
          <div className="font-body text-sm text-white/80 sm:text-2xl lg:text-xl">
            Privacy Policy | Terms of Service
          </div>

          <div className="font-body text-sm text-white/80 sm:text-2xl lg:text-xl">
            © 1977 Kristal Graphics. All rights reserved
          </div>

        </div>
      </div>
    </footer>
  );
}