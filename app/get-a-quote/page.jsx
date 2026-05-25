import Link from "next/link";
import ContactForm from "../../components/kg/ContactForm";

export const page = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="py-52">
        <h1 className="font-heading">
          Let's talk <br /> about your project!
        </h1>
        <h1 className="">
          <Link
            href="mailto:info@kristalgraphics.net"
            className="text-[#B3B3B3] hover:text-[#FEBB12] font-heading flex group"
          >
            info@kristalgraphics.net
            <svg
              width="68"
              height="69"
              viewBox="0 0 68 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 0H42V18H36.333L25 6.00041V0Z"
                fill="#B3B3B3"
                className="group-hover:fill-[#FEBB12]"
              />
              <path
                d="M0 0H18V18H11.9996L0 6.00041V0Z"
                fill="#B3B3B3"
                className="group-hover:fill-[#FEBB12]"
              />
              <path
                d="M50 26H68V43H61.9996L50 31.6671V26Z"
                fill="#B3B3B3"
                className="group-hover:fill-[#FEBB12]"
              />
              <path
                d="M50 52H68V69H61.9996L50 57.6671V52Z"
                fill="#B3B3B3"
                className="group-hover:fill-[#FEBB12]"
              />
              <path
                d="M50 0H68V18H61.9996L50 6.00041V0Z"
                fill="#B3B3B3"
                className="group-hover:fill-[#FEBB12]"
              />
            </svg>
          </Link>
        </h1>
        <div className="text-black pt-20 text-5xl font-body">
          Have questions? We've got the answers! Here, you'll find clear and
          concise information about our services, process, and what to expect
          when working with us. If you need more details, feel free to reach
          out!
        </div>
      </section>
      <ContactForm />
    </main>
  );
};

export default page;
