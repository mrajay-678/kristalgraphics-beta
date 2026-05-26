"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  UserRound,
  Building2,
  PencilRuler,
  Package,
  Layers,
  Calendar,
  Hourglass,
  Palette,
  Ear,
  PencilLine
} from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  serviceType: "",
  quantity: "",
  timeline: "",
  projectDetails: "",
  privacy: false,
};

const inputClasses =
  "peer w-full border-0 border-b border-neutral-300 bg-transparent px-16 pb-3 pt-1 text-3xl font-body text-black outline-none transition placeholder:text-neutral-800 focus:border-[#FEBB12]";

const fields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    icon: UserRound,
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    icon: Mail,
    required: true,
  },
  { name: "phone", label: "Phone", type: "tel", icon: Phone },
  {
    name: "companyType",
    label: "Company Type",
    type: "text",
    icon: Building2,
    required: false,
  },
];

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(event) {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (!form.privacy) {
      setStatus({
        type: "error",
        message: "Please agree to the privacy policy before sending.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Something went wrong. Please try again.",
        );
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message: "Thanks, your message has been sent.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-between flex-wrap">
      {fields.map(({ name, label, type, icon: Icon, required }) => (
        <label key={name} className="relative block w-[48%] mb-5">
          <Icon
            aria-hidden="true"
            className="absolute left-0 top-5 h-10 w-10 text-black"
            strokeWidth={1.8}
          />
          <span className="sr-only">{label}</span>
          <input
            className={inputClasses}
            type={type}
            name={name}
            value={form[name]}
            onChange={updateField}
            placeholder={label}
            required={required}
          />
        </label>
      ))}
      {/* service type */}
      <div className="w-[48%] mb-5">
        <label htmlFor="serviceType" className="relative block">
          <PencilRuler
            aria-hidden="true"
            className="absolute left-0 top-5 h-10 w-10 text-black"
            strokeWidth={1.8}
          />
          <span className="pl-20">What service do you need?*</span>
        </label>
        <select id="serviceType" className={inputClasses}>
          <option value=""></option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
      {/* products */}
      <div className="w-[48%] mb-5">
        <label htmlFor="serviceType" className="relative block">
          <Package
            aria-hidden="true"
            className="absolute left-0 top-5 h-10 w-10 text-black"
            strokeWidth={1.8}
          />
          <span className="pl-20">What products are you looking for?*</span>
        </label>
        <select id="serviceType" className={inputClasses}>
          <option value=""></option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
      {/* units */}
      <div className="w-[48%] mb-5">
        <label htmlFor="serviceType" className="relative block">
          <Layers
            aria-hidden="true"
            className="absolute left-0 top-5 h-10 w-10 text-black"
            strokeWidth={1.8}
          />
          <span className="pl-20">How many units do you need?*</span>
        </label>
        <select id="serviceType" className={inputClasses}>
          <option value=""></option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
      {/* timeline */}
      <div className="w-[48%] mb-5">
        <label className="relative block">
          <Calendar
            aria-hidden="true"
            className="absolute left-0 top-5 h-10 w-10 text-black"
            strokeWidth={1.8}
          />
          <span className="sr-only">When do you need this by?*</span>
          <input
            className={inputClasses}
            type="text"
            name="timeline"
            value={form.timeline}
            onChange={updateField}
            placeholder="When do you need this by?*"
            required
          />
        </label>
      </div>
      {/* Rush Service */}
      <div className="w-full mb-5">
        <label htmlFor="serviceType" className="relative block">
          <Hourglass
            aria-hidden="true"
            className="absolute left-0 top-5 h-10 w-10 text-black"
            strokeWidth={1.8}
          />
          <input
            className={inputClasses}
            type="text"
            name="rushService"
            value={form.rushService}
            onChange={updateField}
            placeholder="Rush service needed?"
            required
          />
        </label>
        <label htmlFor="rushCheck" className="flex gap-5 items-center pt-10">
          <input
            type="checkbox"
            name="rush"
            id="rushCheck"
            checked={form.rush}
            onChange={updateField}
            className="h-8 w-8 rounded border-neutral-300 text-black focus:ring-[#FEBB12]"
          />
          <span>
            Yes, I need this faster than standard production time (7-14 business
            days)
          </span>
        </label>
      </div>
      {/* Artwork */}
      <div className="w-full mb-5">
        <label htmlFor="serviceType" className="relative block">
          <Palette
            aria-hidden="true"
            className="absolute left-0 top-5 h-10 w-10 text-black"
            strokeWidth={1.8}
          />
          <input
            className={inputClasses}
            type="text"
            name="artwork"
            value={form.artwork}
            onChange={updateField}
            placeholder="Do you have artwork?"
            required
          />
        </label>
        <label htmlFor="artworkCheck" className="flex gap-5 items-center pt-10">
          <input
            type="checkbox"
            name="artwork"
            id="artworkCheck"
            checked={form.artwork}
            onChange={updateField}
            className="h-8 w-8 rounded border-neutral-300 text-black focus:ring-[#FEBB12]"
          />
          <span>
            Yes, I have production-ready files (editable .ai OR .pdf files)
          </span>
        </label>
        <label htmlFor="artworkCheck" className="flex gap-5 items-center pt-10">
          <input
            type="checkbox"
            name="artwork"
            id="artworkCheck"
            checked={form.artwork}
            onChange={updateField}
            className="h-8 w-8 rounded border-neutral-300 text-black focus:ring-[#FEBB12]"
          />
          <span>I have rough artwork that needs refinement</span>
        </label>
        <label htmlFor="artworkCheck" className="flex gap-5 items-center pt-10">
          <input
            type="checkbox"
            name="artwork"
            id="artworkCheck"
            checked={form.artwork}
            onChange={updateField}
            className="h-8 w-8 rounded border-neutral-300 text-black focus:ring-[#FEBB12]"
          />
          <span>No, I need design help ($65/hour design service)</span>
        </label>
        <label htmlFor="artworkCheck" className="flex gap-5 items-center pt-10">
          <input
            type="checkbox"
            name="artwork"
            id="artworkCheck"
            checked={form.artwork}
            onChange={updateField}
            className="h-8 w-8 rounded border-neutral-300 text-black focus:ring-[#FEBB12]"
          />
          <span>Not sure if my files are ready</span>
        </label>
      </div>
      {/* Where did you here about us?  */}
      <div className="w-full mb-5">
        <label htmlFor="serviceType" className="relative block">
          <Ear
            aria-hidden="true"
            className="absolute left-0 top-5 h-10 w-10 text-black"
            strokeWidth={1.8}
          />
          <span className="pl-20">How did you hear about us?*</span>
        </label>
        <select id="serviceType" className={inputClasses}>
          <option value=""></option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
      {/* additional notes */}
      <div className="w-full mb-5">
        <label htmlFor="serviceType" className="relative block">
          <PencilLine
            aria-hidden="true"
            className="absolute left-0 top-5 h-10 w-10 text-black"
            strokeWidth={1.8}
          />
          <span className="pl-20">Additional notes</span>
        </label>
        <textarea id="serviceType" className={inputClasses} rows={4}></textarea>
      </div>
      <div className="flex flex-col gap-4 pt-1 md:col-span-2 md:fl§ex-row md:items-center ">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#FEBB12] p-10 text-3xl font-normal text-black transition hover:bg-[#FEBB12] disabled:cursor-not-allowed md:w-auto"
        >
          {isSubmitting ? "Sending..." : "Get in touch"}
        </button>

        <label className="flex items-center gap-3 text-3xl text-neutral-500">
          <input
            type="checkbox"
            name="privacy"
            checked={form.privacy}
            onChange={updateField}
            className="h-4 w-4 rounded border-neutral-300 text-bla focus:ring-[#FEBB12]"
          />
          <span>
            I agree with the site&apos;s{" "}
            <a className="underline underline-offset-2" href="/privacy-policy">
              privacy policy
            </a>
            .
          </span>
        </label>
      </div>

      {status.message && (
        <p
          className={`rounded-full px-5 py-3 text-sm md:col-span-2 ${
            status.type === "success"
              ? "bg-emerald-50 text-emerald-700"
              : "bg-red-50 text-red-700"
          }`}
          role="status"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
