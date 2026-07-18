import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Skills from "./Skills.jsx";
import { skills } from "../data/skills.js";

describe("Skills", () => {
  it("renders every category heading and its items", () => {
    render(<Skills />);
    skills.forEach((group) => {
      expect(screen.getByText(group.category)).toBeInTheDocument();
      group.items.forEach((item) => {
        expect(screen.getByText(item)).toBeInTheDocument();
      });
    });
  });
});
