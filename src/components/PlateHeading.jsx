import Reveal from "./Reveal.jsx";

// Section masthead in the print grammar: a mono job-slug + a misregistered
// poster title, separated by a color rule. `tone` sets the title's echo/text.
export default function PlateHeading({ slug, title, plate, tone = "sumi" }) {
  const titleClass = tone === "paper" ? "misprint-paper text-paper" : "misprint text-sumi";
  return (
    <Reveal className="mb-10">
      <div className="mb-3 flex items-center gap-3">
        <span className={`slug ${tone === "paper" ? "text-paper/70" : "text-sumi/60"}`}>
          {plate ? `PLATE ${plate} — ` : ""}
          {slug}
        </span>
        <span
          className={`h-[2px] flex-1 ${tone === "paper" ? "bg-paper/40" : "bg-sumi/25"}`}
          aria-hidden="true"
        />
      </div>
      <h2 className={`font-display text-5xl font-black tracking-poster sm:text-6xl ${titleClass}`}>
        {title}
      </h2>
    </Reveal>
  );
}
