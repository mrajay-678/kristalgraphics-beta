import Link from "next/link";
import footerNav from "@/data/footer-nav.json";
import socials from "@/data/socials.json";
import AnimatedButton from "../animation/AnimatedButton";
import SubscribeForm from "./SubscribeForm";

export default function Footer2({ text = "rayosttudio" }: { text?: string }) {
  return (
    <footer
      id="mxd-footer"
      className="bg-[url('/img/kg/footer-bg.svg')] bg-cover bg-top mt-52 min-h-screen"
    >
      <div className="relative pt-96 w-10/12 mx-auto flex flex-row items-end">
        <div className="w-9/12 flex flex-col h-full justify-between">
          <h2 className="text-white text-[5vw] font-light font-heading">
            Ready to print something people keep forever?
          </h2>
          <div className="text-white text-[5vw] pt-52 font-medium font-heading">
            Get a <span className="text-[#FFD700]">quote!</span>
          </div>
        </div>
        <div className="w-7/12 flex flex-row h-full justify-evenly pb-20">
          <div className="text-white text-4xl font-body">
            Addres: <br />
            9607, Canoga Ave,<br />
            Woodland Hills,<br /> CA 91367
          </div>
          <div className="text-white text-4xl font-body">
            We got you!: <br />
            info@kristalgraphics.com<br />
            +1 (818) 342-7822
          </div>
        </div>
      </div>
      <div className="w-9/12 mt-20 mx-auto pb-32">
        <div className="border-t border-white flex flex-row justify-between">
          <div className="text-white text-2xl mt-10">
            Privacy Policy | Terms of Service
          </div>
          <div className="text-white text-2xl mt-10">
            © 1977 Kristal Graphics. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
