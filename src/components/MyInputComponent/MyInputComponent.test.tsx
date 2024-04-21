import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MyInputComponent } from "../..";

describe("MyInputComponent", () => {
  it("should update value when typed into", async () => {
    render(<MyInputComponent />);

    const inputElement = screen.getByRole("textbox");
    userEvent.type(inputElement, "Hello, World!");

    await waitFor(() => {
      expect(inputElement).toHaveValue("Hello, World!");
    });
  });
});
