import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CurrentRole from "./CurrentRole.jsx";
import { siteInfo } from "../data/siteInfo.js";

describe("CurrentRole", () => {
  it("renders the current role details and photo", () => {
    render(<CurrentRole />);
    expect(screen.getByText(siteInfo.currentRole.institution)).toBeInTheDocument();
    expect(screen.getByText(siteInfo.currentRole.description)).toBeInTheDocument();
    expect(
      screen.getByAltText(`${siteInfo.name} at ${siteInfo.currentRole.institution}`)
    ).toBeInTheDocument();
  });
});
