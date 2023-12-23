import { fireEvent, render, screen } from "@testing-library/react";
import { AddNumbers } from "./AddNumbers";

describe("Adding Numbers", () => {
  test("renders with default value selected", () => {
    render(<AddNumbers addNumbers="" onChangeOfSelection={() => {}} />);
    const selected = screen.getByRole("combobox");
    expect(selected).toHaveValue("4");
  });
  test("select input to have correct label", () => {
    render(
      <AddNumbers
        addNumbers="Select your answer"
        onChangeOfSelection={() => {}}
      />
    );
    const select = screen.getByLabelText("What is 2+2?");
    expect(select).toBeInTheDocument();
  });

  test("calls onChangeOfSelection when an option is selected", () => {
    const onChangeMock = jest.fn();
    render(
      <AddNumbers addNumbers="Not 4" onChangeOfSelection={onChangeMock} />
    );
    const select = screen.getByLabelText("What is 2+2?");
    fireEvent.change(select, { target: { value: "Not 4" } });
    expect(onChangeMock).toHaveBeenCalledWith("Not 4");
  });

  /* test("renders with different default value passed", () => {
    render(<AddNumbers addNumbers="Not 4" onChangeOfSelection={() => {}} />);
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
