"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GithubIcon,
  LinkedinIcon,
  CheckIcon,
} from "./Icons";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const formConfigured =
    profile.formspreeId && profile.formspreeId !== "your_form_id";

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formConfigured) return;

    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${profile.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const contactItems = [
    { icon: MailIcon, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: PhoneIcon, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPinIcon, label: "Location", value: profile.location, href: null },
  ];

  return (
    <section id="contact" className="scroll-mt-[68px] pt-12 pb-16 sm:pt-14 sm:pb-24">
      <div className="section">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-6 bg-mute" /> Contact
          </p>
          <h2 className="heading">Let&apos;s build something together</h2>
          <p className="mt-3 max-w-2xl text-mute">
            Have a project, role, or idea in mind? I&apos;m open to opportunities and
            collaborations — drop me a message and I&apos;ll get back to you.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info column */}
          <Reveal delay={80}>
            <div className="card flex h-full flex-col gap-4 p-7">
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const Inner = (
                  <div className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-ink-700 bg-ink-800 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-mute">{label}</p>
                      <p className="text-sm font-medium text-fg break-all">{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} className="rounded-md transition hover:bg-ink-800">
                    {Inner}
                  </a>
                ) : (
                  <div key={label}>{Inner}</div>
                );
              })}

              <div className="mt-2 h-px bg-ink-800" />

              <div className="flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid h-11 w-11 place-items-center rounded-md border border-ink-700 text-fg transition hover:border-accent/50 hover:text-accent"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-11 w-11 place-items-center rounded-md border border-ink-700 text-fg transition hover:border-accent/50 hover:text-accent"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={160}>
            <form onSubmit={handleSubmit} className="card p-7">
              {status === "success" ? (
                <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-accent/10 text-accent">
                    <CheckIcon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">Message sent!</h3>
                  <p className="mt-1 text-sm text-mute">
                    Thanks for reaching out — I&apos;ll reply as soon as I can.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="btn-ghost mt-5"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <div className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" name="name" type="text" placeholder="Your name" required />
                    <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
                  </div>
                  <Field label="Subject" name="subject" type="text" placeholder="What's this about?" />
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fg">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me a bit about it..."
                      className="w-full resize-none rounded-md border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-fg placeholder:text-dim outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                    />
                  </div>

                  {!formConfigured && (
                    <p className="rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2 text-xs text-amber-300/90">
                      Heads up: add your Formspree form ID in <code>lib/data.js</code> to
                      start receiving messages.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-red-400">
                      Something went wrong. Please email me directly at {profile.email}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending" || !formConfigured}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-fg">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-fg placeholder:text-dim outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}
