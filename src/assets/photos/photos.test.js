import { existsSync, statSync } from "node:fs";
import { describe, it, expect } from "vitest";

const files = [
  "src/assets/photos/profile-headshot.jpg",
  "src/assets/photos/secondary-photo.jpg",
  "src/assets/photos/landscape-photo.jpg",
  "src/assets/photos/banner-a.jpg",
  "src/assets/photos/banner-b.jpg",
  "src/assets/photos/banner-c.jpg",
];

describe("photo assets", () => {
  it.each(files)("%s exists and is non-empty", (file) => {
    expect(existsSync(file)).toBe(true);
    expect(statSync(file).size).toBeGreaterThan(0);
  });
});
