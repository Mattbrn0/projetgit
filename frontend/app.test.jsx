// app/tests/app.test.jsx
import { describe, it, expect } from "vitest";
import { add } from "../frontend/src/App";

describe("add function", () => {
  it("adds two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });
});
