import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero.jsx";

describe("Hero", () => {
  it("renders the greeting heading and profile photo", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { name: /Hello, I'm Vivek/i })).toBeInTheDocument();
    expect(screen.getByAltText("Vivek Raj")).toBeInTheDocument();
  });

  it("has the ambient banner background layer", () => {
    render(<Hero />);
    expect(screen.getByTestId("hero-banner")).toBeInTheDocument();
  });
});
