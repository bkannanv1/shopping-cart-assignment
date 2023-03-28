import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { Button } from "./button";

describe("Test Button Functionality", () => {
  it("renders button", () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole("button", { name: /test/i })).toBeInTheDocument();
  });
});
