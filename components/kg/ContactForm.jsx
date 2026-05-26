"use client";

import { useMemo, useState } from "react";
import { Building2, Calendar, CheckCircle2, Ear, Hourglass, Layers, Mail, Package, Palette, PencilLine, PencilRuler, Phone, UserRound, X } from "lucide-react";
import Image from "next/image";
import checkCircle from "@/public/img/kg/success.svg";
import { serviceOptions, productOptionsByService } from "@/data/quote";

const inputClasses =
  "peer w-full border-0 border-b border-neutral-300 bg-transparent px-16 pb-3 pt-1 text-3xl font-body text-black outline-none transition placeholder:text-neutral-800 focus:border-[#FEBB12]";

const ERROR_REQUIRED = "We need this info to give you an accurate quote.";
const ERROR_EMAIL = "Email doesn't look right. Double-check it?";
const ERROR_SUBMIT = "Something went wrong. Try again or email us directly on info@kristalgraphics.net";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  companyType: "",

  serviceType: "",
  products: [],

  quantity: "",
  deadline: "",

  rushService: false,

  artwork: [],

  hearAbout: "",

  notes: "",
};

const quantityOptions = ["50-100", "100-250", "250-500", "500-1,000", "1,000-2,500", "2,500-5,000", "5,000+", "Not sure yet", "Other"];

const hearAboutOptions = ["Google search", "Instagram", "Yelp", "LinkedIn", "Referral from a friend/colleague", "Repeat customer", "Drive-by/Local", "Trade show/Event", "Other"];

const artworkOptions = [
  "Yes, I have production-ready files (editable .ai OR .pdf files)",
  "I have rough artwork that needs refinement",
  "No, I need design help ($65/hour design service)",
  "Not sure if my files are ready",
];

function FieldError({ message }) {
  if (!message) return null;

  return <p className="mt-2 pl-16 text-base text-red-600">{message}</p>;
}

function SuccessModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/50 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-success-title"
    >
      <div className="relative rounded-lg bg-[#181818] w-1/2 p-20 flex items-center font-body text-white shadow-2xl">
        <button
          aria-label="Close success message"
          className="absolute right-10 top-10 text-white hover:text-white"
          onClick={onClose}
          type="button"
        >
          <X
            aria-hidden="true"
            className="h-20 w-20"
          />
        </button>
        <div className="w-1/2">
          <Image
            src={checkCircle}
            alt="Success"
            className="h-3/4 w-3/4"
          />
        </div>
        <div className="w-1/2 pl-10">
          <div
            id="quote-success-title"
            className="font-heading text-7xl leading-none text-[#FEBB12]"
          >
            We&apos;re on it!
          </div>
          <p className="mt-5 text-2xl text-white leading-snug">Thanks for reaching out! </p>
          <p className="mt-5 text-2xl text-white leading-snug">We&apos;ll review your project details and send you a quote within 24 hours, usually sooner.</p>
          <p className="mt-4 text-2xl text-white">Check your email (and spam folder, just in case) for our response.</p>
          <p className="mt-4 text-2xl text-white">
            Need it urgently? Call us at{" "}
            <a
              className="font-semibold text-white underline underline-offset-2"
              href="tel:18183427822"
            >
              (818) 342-7822
            </a>{" "}
            (Monday - Friday, 9am - 5pm PST)
          </p>
        </div>
      </div>
    </div>
  );
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(form) {
  const nextErrors = {};

  if (!form.name.trim()) nextErrors.name = ERROR_REQUIRED;
  if (!form.email.trim()) nextErrors.email = ERROR_REQUIRED;
  else if (!isValidEmail(form.email)) nextErrors.email = ERROR_EMAIL;
  if (!form.phone.trim()) nextErrors.phone = ERROR_REQUIRED;
  if (!form.serviceType) nextErrors.serviceType = ERROR_REQUIRED;
  if (form.products.length === 0) nextErrors.products = ERROR_REQUIRED;
  if (!form.quantity) nextErrors.quantity = ERROR_REQUIRED;
  if (!form.deadline) nextErrors.deadline = ERROR_REQUIRED;
  if (form.artwork.length === 0) nextErrors.artwork = ERROR_REQUIRED;

  return nextErrors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const productOptions = useMemo(() => {
    return productOptionsByService[form.serviceType] || [];
  }, [form.serviceType]);

  const updateField = event => {
    const { name, value, type, checked } = event.target;

    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors(prev => ({ ...prev, [name]: "" }));
    setSubmitError("");
  };

  const handleArtworkChange = value => {
    setForm(prev => {
      const exists = prev.artwork.includes(value);

      return {
        ...prev,
        artwork: exists ? prev.artwork.filter(item => item !== value) : [...prev.artwork, value],
      };
    });
    setSubmitError("");
  };

  const handleProductsChange = value => {
    setForm(prev => {
      const exists = prev.products.includes(value);

      return {
        ...prev,
        products: exists ? prev.products.filter(item => item !== value) : [...prev.products, value],
      };
    });
    setErrors(prev => ({ ...prev, products: "" }));
    setSubmitError("");
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setSubmitError("");

    const nextErrors = validateForm(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        companyType: form.companyType,
        serviceType: form.serviceType,
        products: form.products,
        quantity: form.quantity,
        deadline: form.deadline,
        rushService: form.rushService,
        artwork: form.artwork,
        hearAbout: form.hearAbout,
        notes: form.notes,
      };

      console.log("SEND TO BACKEND =>", payload);

      /**
       * API CALL
       */

      // await fetch("/api/contact", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(payload),
      // });

      setForm(initialForm);
      setShowSuccess(true);
    } catch (error) {
      console.error(error);
      setSubmitError(ERROR_SUBMIT);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-wrap justify-between"
      >
        {/* NAME */}
        <label className="relative mb-5 block w-[48%]">
          <UserRound
            className="absolute left-0 top-5 h-10 w-10 text-black"
            strokeWidth={1.8}
          />

          <input
            type="text"
            name="name"
            placeholder="Name*"
            required
            aria-invalid={Boolean(errors.name)}
            value={form.name}
            onChange={updateField}
            className={inputClasses}
          />
          <FieldError message={errors.name} />
        </label>

        {/* EMAIL */}
        <label className="relative mb-5 block w-[48%]">
          <Mail
            className="absolute left-0 top-5 h-10 w-10 text-black"
            strokeWidth={1.8}
          />

          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            aria-invalid={Boolean(errors.email)}
            value={form.email}
            onChange={updateField}
            className={inputClasses}
          />
          <FieldError message={errors.email} />
        </label>

        {/* PHONE */}
        <label className="relative mb-5 block w-[48%]">
          <Phone
            className="absolute left-0 top-5 h-10 w-10 text-black"
            strokeWidth={1.8}
          />

          <input
            type="number"
            name="phone"
            placeholder="Phone*"
            required
            aria-invalid={Boolean(errors.phone)}
            value={form.phone}
            onChange={updateField}
            className={inputClasses}
          />
          <FieldError message={errors.phone} />
        </label>

        {/* COMPANY TYPE */}
        <label className="relative mb-5 block w-[48%]">
          <Building2
            className="absolute left-0 top-5 h-10 w-10 text-black"
            strokeWidth={1.8}
          />

          <input
            type="text"
            name="companyType"
            placeholder="Company Type"
            value={form.companyType}
            onChange={updateField}
            className={inputClasses}
          />
        </label>

        {/* SERVICE */}
        <div className="mb-5 w-full">
          <label className="relative block">
            <PencilRuler
              className="absolute left-0 top-5 h-10 w-10 text-black"
              strokeWidth={1.8}
            />

            <span className="pl-20">What service do you need?*</span>
          </label>

          <select
            name="serviceType"
            required
            aria-invalid={Boolean(errors.serviceType)}
            value={form.serviceType}
            onChange={updateField}
            className={inputClasses + " !pt-10"}
          >
            <option value="">Select service</option>

            {serviceOptions.map(option => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          <FieldError message={errors.serviceType} />
        </div>

        {/* PRODUCTS */}
        <div className="mb-5 w-full">
          <label className="relative flex gap-5 pt-5">
            <Package
              className="h-10 w-10 text-black"
              strokeWidth={1.8}
            />

            <span>What products are you looking for?*</span>
          </label>

          <div className="mt-8 flex flex-col gap-5 border-b border-neutral-300 pb-8 pl-16">
            {productOptions.length > 0 ? (
              productOptions.map(option => (
                <label
                  key={option.value}
                  className="flex items-center gap-5 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={form.products.includes(option.value)}
                    onChange={() => handleProductsChange(option.value)}
                    className="h-7 w-7 rounded border-neutral-300 text-black focus:ring-[#FEBB12]"
                  />

                  <span className="text-2xl text-black">{option.label}</span>
                </label>
              ))
            ) : (
              <p className="text-xl text-neutral-400">Select a service first</p>
            )}
          </div>
          <FieldError message={errors.products} />
        </div>

        {/* QUANTITY */}
        <div className="mb-5 w-[48%]">
          <label className="relative block">
            <Layers
              className="absolute left-0 top-5 h-10 w-10 text-black"
              strokeWidth={1.8}
            />

            <span className="pl-20">How many units do you need?*</span>
          </label>

          <select
            name="quantity"
            required
            aria-invalid={Boolean(errors.quantity)}
            value={form.quantity}
            onChange={updateField}
            className={inputClasses + " !pt-10"}
          >
            <option value="">Select quantity</option>

            {quantityOptions.map(option => (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>
          <FieldError message={errors.quantity} />
        </div>

        {/* DEADLINE */}
        <div className="mb-5 w-[48%]">
          <label className="relative flex gap-5">
            <Calendar
              className="h-10 w-10 text-black"
              strokeWidth={1.8}
            />

            <span>When do you need this by?*</span>
          </label>

          <input
            type="date"
            name="deadline"
            required
            aria-invalid={Boolean(errors.deadline)}
            value={form.deadline}
            onChange={updateField}
            className={inputClasses}
          />
          <FieldError message={errors.deadline} />
        </div>

        {/* RUSH */}
        <div className="mb-10 w-full">
          <label className="relative flex gap-5 pt-10">
            <Hourglass
              className="h-10 w-10 text-black"
              strokeWidth={1.8}
            />
            Rush service needed?
          </label>

          <label className="flex items-center gap-5 pt-10">
            <input
              type="checkbox"
              name="rushService"
              checked={form.rushService}
              onChange={updateField}
              className="h-8 w-8 rounded border-neutral-300 text-black focus:ring-[#FEBB12]"
            />

            <span>Yes, I need this faster than standard production time (7-14 business days)</span>
          </label>
          {form.rushService && (
            <p className="mt-4 pl-16 text-2xl leading-snug text-black">
              Rush orders available based on current production schedule. We&apos;ll confirm the timeline in your quote based on our team&apos;s availability and current backlog.
            </p>
          )}
        </div>

        {/* ARTWORK */}
        <div className="mb-10 w-full">
          <label className="relative flex gap-5 pt-10">
            <Palette
              className="h-10 w-10 text-black"
              strokeWidth={1.8}
            />
            Do you have artwork ready?*
          </label>

          <div className="mt-6 flex flex-col gap-5">
            {artworkOptions.map(option => (
              <label
                key={option}
                className="flex items-center gap-5"
              >
                <input
                  type="checkbox"
                  checked={form.artwork.includes(option)}
                  onChange={() => handleArtworkChange(option)}
                  className="h-8 w-8 rounded border-neutral-300 text-black focus:ring-[#FEBB12]"
                />

                <span>{option}</span>
              </label>
            ))}
          </div>
          <FieldError message={errors.artwork} />
        </div>

        {/* HEAR ABOUT */}
        <div className="mb-5 w-full">
          <label className="relative block">
            <Ear
              className="absolute left-0 top-5 h-10 w-10 text-black"
              strokeWidth={1.8}
            />

            <span className="pl-20">How did you hear about us?</span>
          </label>

          <select
            name="hearAbout"
            value={form.hearAbout}
            onChange={updateField}
            className={inputClasses + " !pt-10"}
          >
            <option value="">Select option</option>

            {hearAboutOptions.map(option => (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* NOTES */}
        <div className="mb-10 w-full">
          <label className="relative block">
            <PencilLine
              className="absolute left-0 top-5 h-10 w-10 text-black"
              strokeWidth={1.8}
            />

            <span className="pl-20">Additional notes</span>
          </label>

          <textarea
            name="notes"
            rows={5}
            value={form.notes}
            onChange={updateField}
            placeholder="Tell us anything else we should know..."
            className={inputClasses + " pt-10"}
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-14 items-center justify-center rounded-full bg-[#FEBB12] p-10 text-3xl text-black transition disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Get Quote"}
        </button>
        <div className="w-full pt-10">
          <label className="flex items-center gap-5">
            <input
              type="checkbox"
              checked={form.privacyPolicy}
              onChange={updateField}
              name="privacyPolicy"
              className="h-8 w-8 rounded border-neutral-300 text-black focus:ring-[#FEBB12]"
            />
            <span>I agree with the site’s privacy policy</span>
          </label>
        </div>
        <div className="w-full">
          <FieldError message={submitError} />
        </div>
      </form>
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </>
  );
}
