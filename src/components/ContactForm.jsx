import { useState } from "react";
import { siteInfo } from "../data/siteInfo.js";
import bannerC from "../assets/photos/banner-c.jpg";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_FORM_ID";
const AIRTABLE_BASE_ID = "appdhrmfsjspfdFcs";
const AIRTABLE_TABLE_ID = "tblVwbEHGvhTRAtBW";
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
const MAX_FILE_BYTES = 4 * 1024 * 1024;
const ACCEPTED_FILE_TYPES =
  "application/pdf,.pdf,application/msword,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx";

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      resolve(result.slice(result.indexOf(",") + 1));
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [fileError, setFileError] = useState("");
  const [form, setForm] = useState({ name: "", contact: "", summary: "" });
  const [attachedFile, setAttachedFile] = useState(null);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0] ?? null;
    if (file && file.size > MAX_FILE_BYTES) {
      setFileError("File must be under 4MB.");
      setAttachedFile(null);
      e.target.value = "";
      return;
    }
    setFileError("");
    setAttachedFile(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const createResponse = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${AIRTABLE_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              Name: form.name,
              Contact: form.contact,
              "Case Summary": form.summary,
            },
          }),
        }
      );

      if (!createResponse.ok) throw new Error("Airtable record creation failed");
      const record = await createResponse.json();

      if (attachedFile) {
        const base64 = await fileToBase64(attachedFile);
        await fetch(
          `https://content.airtable.com/v0/${AIRTABLE_BASE_ID}/${record.id}/Document/uploadAttachment`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${AIRTABLE_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contentType: attachedFile.type || "application/octet-stream",
              filename: attachedFile.name,
              file: base64,
            }),
          }
        );
      }

      try {
        await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new URLSearchParams({
            name: form.name,
            contact: form.contact,
            summary: form.summary,
          }),
        });
      } catch {
        // Email notification is best-effort; Airtable is the source of truth.
      }

      setStatus("success");
      setForm({ name: "", contact: "", summary: "" });
      setAttachedFile(null);
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
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Phone or Email"
            className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-cream placeholder:text-muted focus:outline-none focus:border-gold"
          />
          <textarea
            required
            name="summary"
            value={form.summary}
            onChange={handleChange}
            placeholder="Summary of the case"
            rows={5}
            className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-cream placeholder:text-muted focus:outline-none focus:border-gold"
          />
          <div>
            <label htmlFor="document" className="block text-muted text-sm mb-2">
              Attach a PDF or Word document (optional, max 4MB)
            </label>
            <input
              id="document"
              type="file"
              accept={ACCEPTED_FILE_TYPES}
              onChange={handleFileChange}
              className="w-full text-cream text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-border file:bg-surface file:text-cream file:cursor-pointer hover:file:border-gold"
            />
            {fileError && <p className="text-red-400 text-sm mt-2">{fileError}</p>}
          </div>
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
