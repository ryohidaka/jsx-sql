import { render } from "@testing-library/react";
import { Limit } from ".";

describe("Limit component", () => {
  it("logs the amount", () => {
    const consoleSpy = vi.spyOn(console, "log");

    render(<Limit amount={5} />);

    expect(consoleSpy).toHaveBeenCalledWith(5);
  });
});
