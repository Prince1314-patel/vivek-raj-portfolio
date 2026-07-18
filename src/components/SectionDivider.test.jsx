import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionDivider from "./SectionDivider.jsx";

describe("SectionDivider", () => {
  it("renders the landscape photo as a full-bleed image break", () => {
    render(<SectionDivider />);
    expect(screen.getByRole("img", { name: "Landscape photograph" })).toBeInTheDocument();
  });
});
