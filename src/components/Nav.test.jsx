import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Nav from "./Nav.jsx";

describe("Nav", () => {
  it("renders a link for each section", () => {
    render(<Nav />);
    ["Education", "Experience", "Publications", "Skills", "Expertise", "Contact"].forEach(
      (label) => {
        expect(screen.getAllByText(label, { exact: false }).length).toBeGreaterThan(0);
      }
    );
  });

  it("toggles the mobile menu open and closed", () => {
    render(<Nav />);
    const toggle = screen.getByLabelText("Open menu");
    fireEvent.click(toggle);
    expect(screen.getByLabelText("Close menu")).toBeInTheDocument();
  });
});
