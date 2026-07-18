import { describe, it, expect } from "vitest";
import { siteInfo } from "./siteInfo.js";
import { education } from "./education.js";
import { experience } from "./experience.js";
import { publications } from "./publications.js";
import { skills } from "./skills.js";
import { expertise } from "./expertise.js";

describe("content data modules", () => {
  it("siteInfo has the expected shape", () => {
    expect(siteInfo.name).toBe("Vivek Raj");
    expect(siteInfo.social.linkedin).toMatch(/linkedin\.com/);
    expect(siteInfo.currentRole.title).toBe("Secretary");
  });

  it("education has 5 entries", () => {
    expect(education).toHaveLength(5);
    education.forEach((item) => {
      expect(item).toHaveProperty("title");
      expect(item).toHaveProperty("period");
      expect(item).toHaveProperty("description");
    });
  });

  it("experience has 6 entries", () => {
    expect(experience).toHaveLength(6);
    experience.forEach((job) => {
      expect(Array.isArray(job.bullets)).toBe(true);
      expect(job.bullets.length).toBeGreaterThan(0);
    });
  });

  it("publications has 7 entries, with the two documented content fixes applied", () => {
    expect(publications).toHaveLength(7);
    const malimath = publications.find((p) => p.id === "malimath-committee");
    expect(malimath.description).toBeNull();
    const gogoi = publications.find((p) => p.id === "gogoi-review");
    expect(gogoi.title).toBe("A Critical Review of Justice Ranjan Gogoi's Autobiography");
  });

  it("skills has 6 categories", () => {
    expect(skills).toHaveLength(6);
  });

  it("expertise has 3 areas", () => {
    expect(expertise).toHaveLength(3);
  });
});
