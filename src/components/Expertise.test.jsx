import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Expertise from "./Expertise.jsx";
import { expertise } from "../data/expertise.js";

describe("Expertise", () => {
  it("renders every expertise area's title and description", () => {
    render(<Expertise />);
    expertise.forEach((area) => {
      expect(screen.getByText(area.title)).toBeInTheDocument();
      expect(screen.getByText(area.description)).toBeInTheDocument();
    });
  });
});
