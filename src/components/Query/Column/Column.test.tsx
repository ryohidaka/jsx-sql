import { render } from "@testing-library/react";
import { Column } from ".";

describe("Column component", () => {
  it("logs the name and value", () => {
    const consoleSpy = vi.spyOn(console, "log");

    render(<Column name="test name" value="test value" />);

    expect(consoleSpy).toHaveBeenCalledWith("test name", "test value");
  });
});
