import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ContactStrip from "./ContactStrip.jsx";
import { siteInfo } from "../data/siteInfo.js";

describe("ContactStrip", () => {
  it("renders phone, email, and location", () => {
    render(<ContactStrip />);
    expect(screen.getByText(siteInfo.phone)).toBeInTheDocument();
    expect(screen.getByText(siteInfo.email)).toBeInTheDocument();
    expect(screen.getByText(siteInfo.location)).toBeInTheDocument();
  });
});
