import { render, screen } from "@testing-library/react";
import { AddNumbers } from "./AddNumbers";

describe("Adding Numbers", () => {
  test("renders with default value selected", () => {
    render(<AddNumbers result="" onChangeOfSelection={() => {}} />);
    const selected = screen.getByRole("combobox");
    expect(selected).toHaveValue("4");
  });
  /*test("renders with different default value passed", () => {
    render(
      <AddNumbers
        result="Please select your answer"
        onChangeOfSelection={() => {}}
      />
    );
    const defaultValue = screen.getByRole("combobox");
    expect(defaultValue).toHaveValue("Please select your answer");
  });*/
  test("select input to have correct label", () => {
    render(
      <AddNumbers
        result="Please select your answer"
        onChangeOfSelection={() => {}}
      />
    );
    const select = screen.getByLabelText("What is 2+2?");
    expect(select).toBeInTheDocument();
  });
});
