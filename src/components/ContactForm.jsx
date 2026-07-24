import { useState } from "react";
import { Upload, File, Check } from "lucide-react";
import { siteInfo } from "../data/siteInfo.js";

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

const inputClass =
  "w-full border-2 border-sumi bg-paper px-4 py-3 font-sans text-sumi placeholder:text-sumi/45 focus:outline-none focus:bg-riso-yellow/40 focus:ring-0";

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
    <section
      id="contact"
      data-testid="contact-banner"
      className="grain relative border-t-2 border-sumi bg-riso-blue px-5 py-24 text-paper sm:px-8"
    >
      <div className="relative mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        {/* ---- left: the studio order desk ---- */}
        <div>
          <p className="slug mb-3 text-paper/60">ORDER DESK · OPEN FOR COMMISSIONS</p>
          <h2 className="misprint-paper font-display text-5xl font-black tracking-poster sm:text-6xl">
            Get in touch
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-paper/85">
            Send the brief. I&apos;ll pull a proof and get back to you — policy work,
            campaigns, writing, or a project that needs an artist&apos;s eye.
          </p>
          <dl className="mt-8 space-y-3 font-mono text-sm">
            <div className="flex gap-3">
              <dt className="slug w-16 text-riso-yellow">MAIL</dt>
              <dd className="text-paper">{siteInfo.email}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="slug w-16 text-riso-yellow">TEL</dt>
              <dd className="text-paper">{siteInfo.phone}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="slug w-16 text-riso-yellow">STUDIO</dt>
              <dd className="text-paper">{siteInfo.location}</dd>
            </div>
          </dl>
        </div>

        {/* ---- right: the commission slip ---- */}
        <form
          onSubmit={handleSubmit}
          className="crops relative border-2 border-sumi bg-paper p-6 text-sumi shadow-pull sm:p-7"
        >
          <span className="crops-b" aria-hidden="true" />
          <p className="slug mb-5 flex items-center justify-between text-sumi/55">
            <span>COMMISSION SLIP</span>
            <span>FORM VR-C</span>
          </p>

          <div className="space-y-4">
            <label className="block">
              <span className="slug mb-1.5 block text-sumi/70">Name</span>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="slug mb-1.5 block text-sumi/70">Phone or Email</span>
              <input
                required
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="How to reach you"
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="slug mb-1.5 block text-sumi/70">The brief</span>
              <textarea
                required
                name="summary"
                value={form.summary}
                onChange={handleChange}
                placeholder="What do you have in mind?"
                rows={5}
                className={inputClass}
              />
            </label>

            <div>
              <span className="slug mb-1.5 block text-sumi/70">
                Attach a PDF or Word doc (optional, max 4MB)
              </span>
              <div className="relative">
                <input
                  id="document"
                  type="file"
                  accept={ACCEPTED_FILE_TYPES}
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full cursor-pointer opacity-0"
                />
                <span className="flex w-full items-center justify-center gap-2 border-2 border-dashed border-sumi bg-paper px-4 py-3 font-mono text-sm uppercase tracking-wide text-sumi transition-colors hover:bg-riso-yellow/40">
                  <Upload size={16} />
                  {attachedFile ? attachedFile.name : "Choose File"}
                </span>
              </div>
              {fileError && <p className="mt-2 font-mono text-sm text-sumi">⚠ {fileError}</p>}
              {attachedFile && (
                <div className="mt-2 flex items-center gap-2 font-mono text-sm text-riso-blue">
                  <File size={14} />
                  <span>{attachedFile.name}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="stamp w-full justify-center border-sumi bg-riso-pink py-3 text-sumi transition-transform hover:rotate-0 disabled:opacity-60"
            >
              {status === "sending" ? "Pulling proof…" : "✦ Send the brief"}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 font-mono text-sm text-riso-blue">
                <Check size={16} /> Printed &amp; filed — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="border-2 border-riso-pink bg-riso-pink/15 px-3 py-2 font-mono text-sm text-sumi">
                ⚠ Jam in the press. Please email me directly instead.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
