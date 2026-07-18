import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import ContactForm from "./ContactForm.jsx";

describe("ContactForm", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders name, email, and message fields", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();
  });

  it("submits the form data to the Formspree endpoint and shows a success message", async () => {
    global.fetch.mockResolvedValueOnce({ ok: true });
    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText("Name"), { target: { value: "Jane Doe" } });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Message"), {
      target: { value: "Hello Vivek" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/thanks/i)).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("formspree.io"),
      expect.objectContaining({ method: "POST" })
    );
  });

  it("shows an error message when the request fails", async () => {
    global.fetch.mockResolvedValueOnce({ ok: false });
    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText("Name"), { target: { value: "Jane Doe" } });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Message"), {
      target: { value: "Hello Vivek" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
  });
});
