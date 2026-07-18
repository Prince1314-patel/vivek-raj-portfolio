import landscapePhoto from "../assets/photos/landscape-photo.jpg";

export default function SectionDivider() {
  return (
    <div
      className="relative h-64 md:h-80 bg-cover bg-center"
      style={{ backgroundImage: `url(${landscapePhoto})` }}
      role="img"
      aria-label="Landscape photograph"
    >
      <div className="absolute inset-0 bg-ink/50" />
    </div>
  );
}
