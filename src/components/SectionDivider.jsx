const INKS = ["#EC2A78", "#2340E0", "#FFD200", "#0FA98F", "#FF6A2B", "#6E2CC4", "#181309"];

// A printer's color test bar between runs — the CMYK strip you see on a proof.
export default function SectionDivider() {
  return (
    <div className="border-y-2 border-sumi bg-paper" role="separator" aria-label="Color test bar">
      <div className="mx-auto flex max-w-6xl items-stretch">
        <span className="slug flex items-center px-4 py-2 text-sumi/60">DENSITY</span>
        <div className="flex flex-1">
          {INKS.map((c) => (
            <div key={c} className="h-8 flex-1" style={{ background: c }} />
          ))}
        </div>
        <span className="slug flex items-center px-4 py-2 text-sumi/60">100%</span>
      </div>
    </div>
  );
}
