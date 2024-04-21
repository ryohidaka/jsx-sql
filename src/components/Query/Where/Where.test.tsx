import { render, screen } from "@testing-library/react";
import { Where } from ".";

describe("Where component", () => {
  it("renders children correctly", () => {
    const testText = "Test child node";
    render(<Where>{testText}</Where>);

    expect(screen.getByText(testText)).toBeInTheDocument();
  });
});
