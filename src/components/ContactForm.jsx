import { useState } from "react";
import { siteInfo } from "../data/siteInfo.js";
import bannerC from "../assets/photos/banner-c.jpg";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_FORM_ID";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new URLSearchParams(form),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative px-6 py-24 overflow-hidden">
      <div
        data-testid="contact-banner"
        className="absolute inset-0 opacity-[0.06] bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerC})` }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl grid md:grid-cols-2 gap-12">
        <div>
          <p className="uppercase tracking-[0.3em] text-gold text-xs mb-3">[ Contact ]</p>
          <h2 className="font-display text-4xl mb-6">Get in touch</h2>
          <p className="text-muted mb-2">{siteInfo.email}</p>
          <p className="text-muted mb-2">{siteInfo.phone}</p>
          <p className="text-muted">{siteInfo.location}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-cream placeholder:text-muted focus:outline-none focus:border-gold"
          />
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-cream placeholder:text-muted focus:outline-none focus:border-gold"
          />
          <textarea
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-cream placeholder:text-muted focus:outline-none focus:border-gold"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-cream text-ink font-medium rounded-lg px-6 py-3 hover:bg-gold transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "success" && (
            <p className="text-gold text-sm">Thanks — I&apos;ll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">
              Something went wrong. Please email me directly instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
