import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Education from "./Education.jsx";
import { education } from "../data/education.js";

describe("Education", () => {
  it("renders every education entry's title", () => {
    render(<Education />);
    education.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it("renders the section heading", () => {
    render(<Education />);
    expect(screen.getByRole("heading", { name: "Academic Journey" })).toBeInTheDocument();
  });
});
