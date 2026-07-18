import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import EmblaCarousel from "./EmblaCarousel.jsx";
import { publicationCovers } from "../data/publicationCovers.js";

describe("EmblaCarousel", () => {
  it("renders every slide's image and caption", () => {
    render(<EmblaCarousel slides={publicationCovers} options={{ loop: true }} />);
    publicationCovers.forEach((pub) => {
      expect(screen.getByAltText(pub.title)).toBeInTheDocument();
      expect(screen.getByRole("heading", { name: pub.title })).toBeInTheDocument();
    });
  });

  it("renders previous/next controls", () => {
    render(<EmblaCarousel slides={publicationCovers} options={{ loop: true }} />);
    expect(screen.getByLabelText("Previous publication")).toBeInTheDocument();
    expect(screen.getByLabelText("Next publication")).toBeInTheDocument();
  });
});
