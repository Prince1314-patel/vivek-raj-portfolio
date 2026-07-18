import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SocialLinks from "./SocialLinks.jsx";
import { siteInfo } from "../data/siteInfo.js";

describe("SocialLinks", () => {
  it("renders a link for each social platform", () => {
    render(<SocialLinks />);
    expect(screen.getByLabelText("LinkedIn")).toHaveAttribute("href", siteInfo.social.linkedin);
    expect(screen.getByLabelText("Facebook")).toHaveAttribute("href", siteInfo.social.facebook);
    expect(screen.getByLabelText("Twitter")).toHaveAttribute("href", siteInfo.social.twitter);
    expect(screen.getByLabelText("Instagram")).toHaveAttribute("href", siteInfo.social.instagram);
  });
});
