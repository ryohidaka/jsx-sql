import { render, screen, within } from "@testing-library/react";
import Home from "./Home";
import { query } from "@/utils";

vi.mock("@/utils", () => ({
  query: vi.fn().mockImplementation(() => [
    [1, "bob", "paid"],
    [2, "alice", "paid"],
  ]),
}));

describe("Home", () => {
  it("renders the table with records", () => {
    render(<Home />);

    const mockRecords = query(<></>);

    mockRecords.forEach((record) => {
      if (record[1] !== null) {
        const row = screen.getByRole("row", {
          name: new RegExp(record[1].toString()),
        });
        expect(row).toBeInTheDocument();

        const cells = within(row).getAllByRole("cell");
        expect(cells[0]).toHaveTextContent(
          record[0] ? record[0].toString() : "",
        );
        expect(cells[1]).toHaveTextContent(record[1].toString());
        expect(cells[2]).toHaveTextContent(
          record[2] ? record[2].toString() : "",
        );
      }
    });
  });
});
