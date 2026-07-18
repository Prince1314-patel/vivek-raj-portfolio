import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer.jsx";
import { siteInfo } from "../data/siteInfo.js";

describe("Footer", () => {
  it("renders the copyright line and social links", () => {
    render(<Footer />);
    expect(screen.getByText(new RegExp(siteInfo.name))).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
  });
});
