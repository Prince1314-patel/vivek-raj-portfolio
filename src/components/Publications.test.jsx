import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Publications from "./Publications.jsx";
import { publications } from "../data/publications.js";

describe("Publications", () => {
  it("renders every publication title", () => {
    render(<Publications />);
    publications.forEach((pub) => {
      expect(screen.getByText(pub.title)).toBeInTheDocument();
    });
  });

  it("renders the linked publication as an anchor", () => {
    render(<Publications />);
    const pakadua = publications.find((p) => p.id === "pakadua-vivah");
    expect(screen.getByText(pakadua.title).closest("a")).toHaveAttribute("href", pakadua.url);
  });

  it("does not render a description for the entry with a null description", () => {
    render(<Publications />);
    const malimath = publications.find((p) => p.id === "malimath-committee");
    expect(screen.getByText(malimath.title)).toBeInTheDocument();
    const descriptions = publications.filter((p) => p.description);
    descriptions.forEach((pub) => {
      expect(screen.getByText(pub.description)).toBeInTheDocument();
    });
  });

  it("has the ambient banner background layer", () => {
    render(<Publications />);
    expect(screen.getByTestId("publications-banner")).toBeInTheDocument();
  });
});
