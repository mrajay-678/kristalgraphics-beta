import Link from "next/link";
import QuoteForm from "../../components/kg/QuoteForm";
import ContactForm from "../../components/kg/ContactForm";
import ContactDetails from "../../components/kg/ContactDetails";
import Image from "next/image";
import divider from "@/public/img/kg/get-a-quote-divider.svg";

export const page = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="py-52">
        <h1 className="font-heading">
          Let's talk <br /> about your project!
        </h1>
        <div className="text-black pt-20 text-5xl font-body">
          Have questions? We've got the answers! Here, you'll find clear and
          concise information about our services, process, and what to expect
          when working with us. If you need more details, feel free to reach
          out!
        </div>
      </section>
      {/* <QuoteForm /> */}
      <ContactForm />
      <Image src={divider} alt="divider" className="w-full pt-52 pb-52" />
      <ContactDetails />
    </main>
  );
};

export default page;
