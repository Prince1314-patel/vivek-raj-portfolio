import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App.jsx";

describe("App", () => {
  it("renders the nav, hero, and every major section", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /Hello, I'm Vivek/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Academic Journey" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Professional Development" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Publications" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Expertise" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Get in touch" })).toBeInTheDocument();
  });
});
