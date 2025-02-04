import { fireEvent, render, screen } from "@testing-library/react";
import { AddNumbers } from "./AddNumbers";

describe("Adding Numbers", () => {
  test("renders with default value selected", () => {
    render(
      <AddNumbers
        addNumbers=""
        onChangeOfSelection={() => {}}
        validate={() => []}
      />
    );
    const selected = screen.getByRole("combobox");
    expect(selected).toHaveValue("4");
  });
  test("select input to have correct label", () => {
    render(
      <AddNumbers
        addNumbers="Select your answer"
        onChangeOfSelection={() => {}}
        validate={() => []}
      />
    );
    const select = screen.getByLabelText("What is 2+2?");
    expect(select).toBeInTheDocument();
  });

  test("calls onChangeOfSelection when an option is selected", () => {
    const onChangeMock = jest.fn();
    render(
      <AddNumbers
        addNumbers="Not 4"
        onChangeOfSelection={onChangeMock}
        validate={() => []}
      />
    );
    const select = screen.getByLabelText("What is 2+2?");
    fireEvent.change(select, { target: { value: "Not 4" } });
    expect(onChangeMock).toHaveBeenCalledWith("Not 4");
  });

  test("options to have correct values", () => {
    render(
      <AddNumbers
        addNumbers="Select your answer"
        onChangeOfSelection={() => {}}
        validate={() => []}
      />
    );
    const options = screen.getAllByRole("option");
    const optionsValues = options.map((option) => option.textContent);
    expect(optionsValues).toEqual(["4", "Not 4"]);
  });

  /* test("renders with different default value passed", () => {
    render(<AddNumbers addNumbers="Not 4" onChangeOfSelection={() => {}} defaultValue="Please choose your option"/>);
    const defaultValue = screen.getByRole("option");
    expect(defaultValue).toHaveValue("Not 4");
  });
  
  test('renders disabled select input', () => {
  const { getByLabelText } = render(
    <AddNumbers result="4" onChangeOfSelection={() => {}} disabled />
  );
  const selectElement = getByLabelText('What is 2+2?');
  expect(selectElement).toBeDisabled();
});*/
});
