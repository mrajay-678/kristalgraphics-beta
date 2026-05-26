"use client";

import { useMemo, useState } from "react";
import { useForm as useFormspree } from "@formspree/react";
import {
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  Layers3,
  Mail,
  Package,
  Paintbrush,
  Pencil,
  PencilRuler,
  Phone,
  UserRound,
  Wrench,
  X,
} from "lucide-react";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  services: [],
  products: [],
  units: "",
  neededBy: "",
  rush: false,
  artwork: "",
  referral: "",
  details: "",
  privacy: false,
};

const CONTACT_FIELDS = [
  { name: "fullName", label: "Full Name", icon: UserRound, required: true },
  { name: "email", label: "Email", icon: Mail, type: "email", required: true },
  {
    name: "phone",
    label: "Phone Number",
    icon: Phone,
    type: "tel",
    required: true,
  },
  {
    name: "company",
    label: "Company/Organization (optional)",
    icon: Building2,
  },
];

const SERVICE_OPTIONS = [
  "Screen Printing",
  "Embroidery",
  "DTF / UV DTF Transfers",
  "Labels & Decals",
  "Packaging (Boxes & Mylar Bags)",
  "Promotional Items (Totes, Mugs, Buttons, etc)",
  "Wide Format Printing (Posters, Banners, Signage, etc)",
  "Flyers, Brochures, Menu, Invitations",
  "Fulfillment & Delivery",
  "Design Services",
  "Not sure yet / Need guidance",
];

const PRODUCT_OPTIONS_BY_SERVICE = {
  "Screen Printing": [
    "T-shirts",
    "Hoodies",
    "Sweatshirts",
    "Tote bags",
    "Polos",
    "Other (please specify in detail below)",
  ],
  Embroidery: [
    "Hats/Caps",
    "Polos",
    "Jackets",
    "Bags",
    "Uniforms",
    "Beanies",
    "Graduation Stoles",
    "Other (please specify in details below)",
  ],
  "Labels & Decals": [
    "Product labels (bottles, jars, packaging)",
    "Decals/Stickers (promotional, branded)",
    "Custom shapes",
    "Roll labels",
    "Sheet labels",
    "Other (please specify in details below)",
  ],
  "Packaging (Boxes & Mylar Bags)": [
    "Corrugated boxes",
    "Custom boxes",
    "Mylar bags",
    "Product packaging",
    "PR boxes/Kits",
    "Other (please specify in details below)",
  ],
  "Promotional Items (Totes, Mugs, Buttons, etc)": [
    "Mugs",
    "Tumblers/Water bottles",
    "Tech accessories",
    "Office supplies",
    "Custom buttons/Pins",
    "Magnets",
    "Drinkware",
    "Other (please specify in details below)",
  ],
  "Wide Format Printing (Posters, Banners, Signage, etc)": [
    "Posters",
    "Banners",
    "Signage",
    "Window decals",
    "Other (please specify in details below)",
  ],
};

const DEFAULT_PRODUCT_OPTIONS = [
  "Other (please specify in details below)",
  "Not sure yet / Need guidance",
];

const UNIT_OPTIONS = [
  "50-100",
  "100-250",
  "250-500",
  "500-1,000",
  "1,000-2,500",
  "2,500-5,000",
  "5,000+",
  "Not sure yet",
  "Other (please specify in details below)",
];

const ARTWORK_OPTIONS = [
  "Yes, I have production-ready files (editable .ai OR .pdf files)",
  "I have rough artwork that needs refinement",
  "No, I need design help ($65/hour design service)",
  "Not sure if my files are ready",
];

const REFERRAL_OPTIONS = [
  "Google search",
  "Instagram",
  "Yelp",
  "LinkedIn",
  "Referral from a friend/colleague",
  "Repeat customer",
  "Drive-by/Local",
  "Trade show/Event",
  "Other",
];

const NEXT_STEPS = [
  "Within 24 hours on a weekday: We'll review your project details and send you a detailed quote with pricing, timeline, and next steps.",
  "If we need clarification: We'll reach out via email or phone to discuss your project in more detail.",
  "Design files not ready? No problem. We'll guide you through the artwork preparation process or offer our design services.",
];

const fieldBase =
  "w-full border-0 border-b border-neutral-300 bg-transparent pb-3 px-12 pt-1 font-body text-neutral-900 outline-none transition placeholder:text-neutral-900 focus:border-[#FEBB12] text-3xl";

const ERROR_REQUIRED = "We need this info to give you an accurate quote.";
const ERROR_EMAIL = "Email doesn't look right. Double-check it?";
const ERROR_SUBMIT =
  "Something went wrong. Try again or email us directly on info@kristalgraphics.net";

function RequiredMark() {
  return <span className="text-[#FEBB12]">*</span>;
}

function FieldIcon({ icon: Icon, className = "top-5 h-10 w-10" }) {
  return (
    <Icon
      aria-hidden="true"
      className={`absolute left-0 ${className} text-neutral-700`}
      strokeWidth={1.6}
    />
  );
}

function FieldError({ message }) {
  if (!message) return null;

  return <p className="mt-2 pl-9 text-sm text-red-600">{message}</p>;
}

function TextField({ error, field, onChange, value }) {
  const { helperText, icon, label, name, required, type = "text" } = field;

  return (
    <label className="relative block">
      <FieldIcon icon={icon} />
      <span className="sr-only">{label}</span>
      <input
        aria-invalid={Boolean(error)}
        aria-label={label}
        className={fieldBase}
        name={name}
        onChange={onChange}
        placeholder={label}
        type={type}
        value={value}
      />
      {helperText && (
        <p className="mt-2 pl-9 text-sm text-neutral-500">{helperText}</p>
      )}
      <FieldError message={error} />
    </label>
  );
}

function NativeSelectField({
  error,
  icon,
  label,
  name,
  onChange,
  options,
  required,
  value,
}) {
  return (
    <label className="relative block">
      <FieldIcon icon={icon} />
      <span className="sr-only">{label}</span>
      <select
        aria-invalid={Boolean(error)}
        aria-label={label}
        className={`${fieldBase} appearance-none pr-10 ${value ? "" : "text-transparent"}`}
        name={name}
        onChange={onChange}
        value={value}
      >
        <option value="" disabled>
          {label}
          {required ? "*" : ""}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-0 top-1 grid h-5 w-5 place-items-center rounded-md bg-neutral-950 text-white">
        <ChevronDown
          aria-hidden="true"
          className="h-3.5 w-3.5"
          strokeWidth={2.4}
        />
      </span>
      <FieldError message={error} />
    </label>
  );
}

function MultiSelectField({
  error,
  icon: Icon,
  label,
  name,
  onChange,
  options,
  required,
  values,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const displayValue = values.length ? values.join(", ") : "";

  return (
    <div className="relative md:col-span-2">
      <label htmlFor={name} className="flex flex-col">
        <div className="flex items-center gap-2">
          <Icon className={` text-neutral-700`} strokeWidth={1.6} />
          {label}
          {required && <RequiredMark />}
        </div>
        <select
          name={name}
          id={name}
          className={fieldBase}
          aria-expanded={isOpen}
          aria-invalid={Boolean(error)}
        >
          {options.map((option) => (
            <option checked={values.includes(option)} onChange={onChange} key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <FieldError message={error} />
    </div>
  );
}

function Checkbox({ checked, label, name, onChange, value }) {
  return (
    <label className="flex items-start gap-2 text-[15px] leading-tight text-neutral-900 md">
      <input
        checked={checked}
        className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded-none border-neutral-400 text-[#FEBB12] focus:ring-[#FEBB12]"
        name={name}
        onChange={onChange}
        type="checkbox"
        value={value}
      />
      <span>{label}</span>
    </label>
  );
}

function RadioGroup({ error, icon, name, onChange, options, title, value }) {
  return (
    <div className="md:col-span-2">
      <SectionLabel icon={icon}>
        {title}
        <RequiredMark />
      </SectionLabel>
      <div className="space-y-1.5 pl-3 pt-4 md:pl-4">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-start gap-2 text-[15px] leading-tight text-neutral-900 md"
          >
            <input
              checked={value === option}
              className="mt-0.5 h-3.5 w-3.5 shrink-0 border-neutral-400 text-[#FEBB12] focus:ring-[#FEBB12]"
              name={name}
              onChange={onChange}
              type="radio"
              value={option}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      <FieldError message={error} />
    </div>
  );
}

function SectionLabel({ children, icon }) {
  return (
    <div className="relative border-b border-neutral-300 pb-3 pl-9 text-neutral-900 text-xl">
      <FieldIcon icon={icon} className="top-0 h-5 w-5" />
      {children}
    </div>
  );
}

function SuccessModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/50 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-success-title"
    >
      <div className="relative w-full max-w-xl rounded-lg bg-white p-8 font-body text-neutral-900 shadow-2xl">
        <button
          aria-label="Close success message"
          className="absolute right-4 top-4 text-neutral-500 hover:text-black"
          onClick={onClose}
          type="button"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>
        <CheckCircle2
          aria-hidden="true"
          className="mb-5 h-10 w-10 text-[#FEBB12]"
          strokeWidth={1.8}
        />
        <h2
          id="quote-success-title"
          className="font-heading text-xl leading-none text-neutral-950"
        >
          We&apos;re on it!
        </h2>
        <p className="mt-5 text-lg leading-snug">
          Thanks for reaching out! We&apos;ll review your project details and
          send you a quote within 24 hours, usually sooner.
        </p>
        <p className="mt-4 text-neutral-600">
          Check your email (and spam folder, just in case) for our response.
        </p>
        <p className="mt-4 text-neutral-600">
          Need it urgently? Call us at{" "}
          <a
            className="font-semibold text-neutral-950 underline underline-offset-2"
            href="tel:18183427822"
          >
            (818) 342-7822
          </a>{" "}
          (Monday - Friday, 9am - 5pm PST)
        </p>
      </div>
    </div>
  );
}

function getProductOptions(services) {
  const products = services.flatMap(
    (service) => PRODUCT_OPTIONS_BY_SERVICE[service] || [],
  );
  return [...new Set(products.length ? products : DEFAULT_PRODUCT_OPTIONS)];
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(form) {
  const nextErrors = {};

  if (!form.fullName.trim()) nextErrors.fullName = ERROR_REQUIRED;
  if (!form.email.trim()) nextErrors.email = ERROR_REQUIRED;
  else if (!isValidEmail(form.email)) nextErrors.email = ERROR_EMAIL;
  if (!form.phone.trim()) nextErrors.phone = ERROR_REQUIRED;
  if (form.services.length === 0) nextErrors.services = ERROR_REQUIRED;
  if (form.products.length === 0) nextErrors.products = ERROR_REQUIRED;
  if (!form.units) nextErrors.units = ERROR_REQUIRED;
  if (!form.neededBy) nextErrors.neededBy = ERROR_REQUIRED;
  if (!form.artwork) nextErrors.artwork = ERROR_REQUIRED;
  if (!form.privacy)
    nextErrors.privacy = "Please agree to the privacy policy before sending.";

  return nextErrors;
}

function buildSubmissionPayload(form) {
  return {
    "Form Type": "Quote Request",
    "Full Name": form.fullName,
    Email: form.email,
    "Phone Number": form.phone,
    "Company/Organization": form.company,
    Services: form.services.join(", "),
    Products: form.products.join(", "),
    Units: form.units,
    "Needed By": form.neededBy,
    "Rush Service": form.rush ? "Yes" : "No",
    "Artwork Status": form.artwork,
    "Additional Project Details": form.details,
    "How They Heard About Us": form.referral,
    "Privacy Policy Accepted": "Yes",
  };
}

export default function QuoteForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formspreeState, submitToFormspree] = useFormspree("meoljlry");
  const productOptions = useMemo(
    () => getProductOptions(form.services),
    [form.services],
  );

  function updateField(event) {
    const { name, value, checked, type } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function updateMultiSelect(event) {
    const { name, value, checked } = event.target;

    setForm((current) => {
      const nextValues = checked
        ? [...current[name], value]
        : current[name].filter((item) => item !== value);
      const nextForm = { ...current, [name]: nextValues };

      if (name === "services") {
        const availableProducts = getProductOptions(nextValues);
        nextForm.products = current.products.filter((product) =>
          availableProducts.includes(product),
        );
      }

      return nextForm;
    });
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitError("");

    const nextErrors = validateForm(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    try {
      await submitToFormspree(buildSubmissionPayload(form));
      setForm(INITIAL_FORM);
      setShowSuccess(true);
    } catch {
      setSubmitError(ERROR_SUBMIT);
    }
  }

  return (
    <>
      <div className="font-body text-neutral-950">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="grid gap-x-8 gap-y-8"
        >
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {CONTACT_FIELDS.map((field) => (
              <TextField
                key={field.name}
                error={errors[field.name]}
                field={field}
                value={form[field.name]}
                onChange={updateField}
              />
            ))}

            <MultiSelectField
              error={errors.services}
              icon={PencilRuler}
              label="What service do you need?"
              name="services"
              onChange={updateMultiSelect}
              options={SERVICE_OPTIONS}
              required
              values={form.services}
            />

            <MultiSelectField
              error={errors.products}
              icon={Package}
              label="What products are you looking for?"
              name="products"
              onChange={updateMultiSelect}
              options={productOptions}
              required
              values={form.products}
            />

            <NativeSelectField
              error={errors.units}
              icon={Layers3}
              label="How many units do you need?"
              name="units"
              onChange={updateField}
              options={UNIT_OPTIONS}
              required
              value={form.units}
            />

            <TextField
              error={errors.neededBy}
              field={{
                name: "neededBy",
                label: "When do you need this by?",
                helperText: "Select your deadline or event date",
                icon: CalendarDays,
                type: "date",
                required: true,
              }}
              value={form.neededBy}
              onChange={updateField}
            />

            <div className="md:col-span-2">
              <SectionLabel icon={Clock3}>Rush service needed?</SectionLabel>
              <div className="pl-9 pt-4">
                <Checkbox
                  checked={form.rush}
                  label="Yes, I need this faster than standard production time (7-14 business days)"
                  name="rush"
                  onChange={updateField}
                />
                {form.rush && (
                  <p className="mt-3 max-w-3xl text-sm leading-snug text-neutral-600">
                    Rush orders available based on current production schedule.
                    We&apos;ll confirm the timeline in your quote based on our
                    team&apos;s availability and current backlog.
                  </p>
                )}
              </div>
            </div>

            <RadioGroup
              error={errors.artwork}
              icon={Paintbrush}
              name="artwork"
              onChange={updateField}
              options={ARTWORK_OPTIONS}
              title="Do you have artwork ready?"
              value={form.artwork}
            />

            <label className="relative block md:col-span-2">
              <FieldIcon icon={Pencil} className="top-2 h-5 w-5" />
              <span className="block pb-3 pl-9 text-neutral-900 text-xl">
                Additional Project Details (optional)
              </span>
              <textarea
                className="min-h-24 w-full resize-none border-0 border-b border-neutral-300 bg-transparent pb-3 pl-9 pr-3 font-body text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-[#FEBB12] text-xl"
                name="details"
                onChange={updateField}
                placeholder={
                  "Tell us anything else we should know: colors, sizes, special requests, shipping considerations, etc.\nNote: The more details you provide, the more accurate our quote will be."
                }
                value={form.details}
              />
            </label>

            <NativeSelectField
              icon={CircleHelp}
              label="How did you hear about us?"
              name="referral"
              onChange={updateField}
              options={REFERRAL_OPTIONS}
              value={form.referral}
            />
          </div>

          <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center">
            <button
              className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-[#FEBB12] px-7 text-sm font-semibold text-black transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
              disabled={formspreeState.submitting}
              type="submit"
            >
              {formspreeState.submitting ? "Sending..." : "Get My Quote"}
            </button>

            <label className="flex items-center gap-3 text-[15px] text-neutral-900 md">
              <input
                checked={form.privacy}
                className="h-5 w-5 rounded border-neutral-300 text-[#FEBB12] focus:ring-[#FEBB12]"
                name="privacy"
                onChange={updateField}
                type="checkbox"
              />
              <span>
                I agree with the site&apos;s{" "}
                <a
                  className="underline underline-offset-2"
                  href="/privacy-policy"
                >
                  privacy policy
                </a>
              </span>
            </label>
          </div>
          <FieldError message={errors.privacy || submitError} />
        </form>

        <section className="mt-20 grid gap-8 border-t border-neutral-200 pt-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="font-heading text-xl leading-none">
              What Happens Next?
            </h3>
            <div className="mt-6 space-y-4 text-lg leading-snug text-neutral-700">
              {NEXT_STEPS.map((step) => (
                <p key={step}>{step}</p>
              ))}
            </div>
          </div>
          <div className="text-lg leading-snug text-neutral-700">
            <h3 className="font-heading text-xl leading-none text-neutral-950">
              Prefer to talk directly?
            </h3>
            <p className="mt-6">
              Call us:{" "}
              <a
                className="font-semibold text-neutral-950 underline underline-offset-2"
                href="tel:18183427822"
              >
                (818) 342-7822
              </a>
            </p>
            <p>Monday - Friday, 9am - 5pm PST</p>
            <p className="mt-4">
              Email us:{" "}
              <a
                className="font-semibold text-neutral-950 underline underline-offset-2"
                href="mailto:info@kristalgraphics.net"
              >
                info@kristalgraphics.net
              </a>
            </p>
            <p className="mt-4">
              Visit us:
              <br />
              9607 Canoga Ave
              <br />
              Chatsworth, CA 91311
            </p>
          </div>
        </section>
      </div>

      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </>
  );
}
