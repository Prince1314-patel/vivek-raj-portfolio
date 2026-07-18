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

  it("renders name, contact, case summary, and PDF fields", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Phone or Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Summary of the case")).toBeInTheDocument();
    expect(screen.getByLabelText(/attach a pdf/i)).toBeInTheDocument();
  });

  it("submits the form data to Airtable and shows a success message", async () => {
    global.fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ id: "recTest123" }),
    });
    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText("Name"), { target: { value: "Jane Doe" } });
    fireEvent.change(screen.getByPlaceholderText("Phone or Email"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Summary of the case"), {
      target: { value: "Need help with a labor dispute case." },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/thanks/i)).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("api.airtable.com"),
      expect.objectContaining({ method: "POST" })
    );
  });

  it("shows an error message when the Airtable request fails", async () => {
    global.fetch.mockResolvedValueOnce({ ok: false });
    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText("Name"), { target: { value: "Jane Doe" } });
    fireEvent.change(screen.getByPlaceholderText("Phone or Email"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Summary of the case"), {
      target: { value: "Need help with a labor dispute case." },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
  });

  it("rejects a PDF file larger than 4MB", () => {
    render(<ContactForm />);
    const bigFile = new File([new Uint8Array(5 * 1024 * 1024)], "big.pdf", {
      type: "application/pdf",
    });
    const input = screen.getByLabelText(/attach a pdf/i);
    fireEvent.change(input, { target: { files: [bigFile] } });

    expect(screen.getByText(/must be under 4mb/i)).toBeInTheDocument();
  });
});
