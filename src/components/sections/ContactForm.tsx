"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { personal } from "@/data/portfolio";

type Status = "idle" | "loading" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", subject: "", message: "" };

function validate(values: FormState) {
  const errors: Partial<FormState> = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) errors.message = "Message can't be empty.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
  };

 
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  const validationErrors = validate(values);
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) return;

  setStatus("loading");

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/delwindcruz299@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          _subject: `Portfolio Contact: ${values.subject}`,
          _template: "table",
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Email submission failed");
    }

    const result = await response.json();

console.log("FormSubmit response:", result);

if (!response.ok || result.success === false) {
  throw new Error(
    result.message || result.error || "Email submission failed"
  );
}

    setStatus("success");
    setValues(initialState);
    setErrors({});
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
};


  return (
    <form onSubmit={handleSubmit} noValidate className="glass rounded-2xl p-6 sm:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-mono uppercase tracking-widest text-muted-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={handleChange("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="focus-ring w-full rounded-lg border border-border bg-surface-2/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-2"
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-mono uppercase tracking-widest text-muted-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="focus-ring w-full rounded-lg border border-border bg-surface-2/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-2"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-xs font-mono uppercase tracking-widest text-muted-2">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={values.subject}
          onChange={handleChange("subject")}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className="focus-ring w-full rounded-lg border border-border bg-surface-2/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-2"
          placeholder="Let's work together"
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-xs text-red-400">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-mono uppercase tracking-widest text-muted-2">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="focus-ring w-full resize-none rounded-lg border border-border bg-surface-2/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-2"
          placeholder="Tell me about your project or opportunity..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-5 py-3.5 text-sm font-semibold text-background transition-all hover:brightness-110 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={16} /> Send Message
          </>
        )}
      </button>

      {status === "success" && (
        <p role="status" className="flex items-center gap-2 text-sm text-emerald-400">
          <CheckCircle2 size={16} /> Your message has been submitted successfully!
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle size={16} /> Something went wrong. Please email me directly instead.
        </p>
      )}
    </form>
  );
}
