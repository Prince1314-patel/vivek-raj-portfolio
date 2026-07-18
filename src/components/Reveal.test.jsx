import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Reveal from "./Reveal.jsx";

describe("Reveal", () => {
  it("renders its children", () => {
    render(<Reveal>Test Child</Reveal>);
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("renders as the given element type", () => {
    render(
      <ul>
        <Reveal as="li">List Item</Reveal>
      </ul>
    );
    const item = screen.getByText("List Item");
    expect(item.tagName).toBe("LI");
  });
});
