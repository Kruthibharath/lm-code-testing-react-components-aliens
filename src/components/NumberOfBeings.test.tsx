import { fireEvent, render, screen } from "@testing-library/react";
import { NumberOfBeings } from "./NumberOfBeings";

describe("Number of beings", () => {
  test("input field has correct type attribute", () => {
    render(
      <NumberOfBeings numberOfBeings={0} onChangeNumberOfBeings={() => {}} />
    );
    const inputField = screen.getByPlaceholderText("2, 30, 45");
    expect(inputField).toHaveAttribute("type", "number");
  });

  test("component renders with the initial values without any fail", () => {
    render(
      <NumberOfBeings numberOfBeings={0} onChangeNumberOfBeings={() => {}} />
    );
    const inputField = screen.getByTitle("Enter the number of beings");
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveValue(0);
  });

  test("calls onChangeSpeciesName with updated value", () => {
    const onChangeMock = jest.fn();
    render(
      <NumberOfBeings
        numberOfBeings={0}
        onChangeNumberOfBeings={onChangeMock}
      />
    );
    const inputField = screen.getByLabelText("Number of Beings:");
    fireEvent.change(inputField, { target: { value: 5 } });
    expect(onChangeMock).toHaveBeenCalled();
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(5);
  });
});
