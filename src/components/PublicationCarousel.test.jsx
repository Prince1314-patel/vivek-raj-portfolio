import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import PublicationCarousel from "./PublicationCarousel.jsx";
import { publicationCovers } from "../data/publicationCovers.js";

describe("PublicationCarousel", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the first slide's title and image by default", () => {
    render(<PublicationCarousel />);
    const first = publicationCovers[0];
    expect(screen.getByRole("heading", { name: first.title })).toBeInTheDocument();
    expect(screen.getByAltText(first.title)).toBeInTheDocument();
  });

  it("advances to the next slide when the next arrow is clicked", () => {
    render(<PublicationCarousel />);
    fireEvent.click(screen.getByLabelText("Next publication"));
    const second = publicationCovers[1];
    expect(screen.getByRole("heading", { name: second.title })).toBeInTheDocument();
  });

  it("wraps to the last slide when the previous arrow is clicked on the first slide", () => {
    render(<PublicationCarousel />);
    fireEvent.click(screen.getByLabelText("Previous publication"));
    const last = publicationCovers[publicationCovers.length - 1];
    expect(screen.getByRole("heading", { name: last.title })).toBeInTheDocument();
  });

  it("renders a dot indicator for every publication cover", () => {
    render(<PublicationCarousel />);
    publicationCovers.forEach((pub) => {
      expect(screen.getByLabelText(`Go to ${pub.title}`)).toBeInTheDocument();
    });
  });

  it("does not render venue or description for the entry that lacks them", () => {
    render(<PublicationCarousel />);
    const oliveOrLife = publicationCovers.find((p) => p.id === "olive-or-life");
    expect(oliveOrLife.venue).toBeNull();
  });
});
