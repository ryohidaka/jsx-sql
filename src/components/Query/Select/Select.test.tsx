import { render, screen } from "@testing-library/react";
import { Select } from ".";

describe("Select component", () => {
  it("renders children correctly", () => {
    const testText = "Test child node";
    render(<Select>{testText}</Select>);

    expect(screen.getByText(testText)).toBeInTheDocument();
  });
});
