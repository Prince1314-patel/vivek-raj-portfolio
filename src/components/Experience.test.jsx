import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Experience from "./Experience.jsx";
import { experience } from "../data/experience.js";

describe("Experience", () => {
  it("renders every role and its index number", () => {
    render(<Experience />);
    const headings = screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
    expect(headings).toEqual(experience.map((job) => job.role));
    experience.forEach((job, index) => {
      expect(screen.getByText(String(index + 1).padStart(2, "0"))).toBeInTheDocument();
    });
  });

  it("renders a link for roles with an orgUrl", () => {
    render(<Experience />);
    const pucl = experience.find((job) => job.id === "pucl");
    expect(screen.getByText(pucl.org).closest("a")).toHaveAttribute("href", pucl.orgUrl);
  });
});
