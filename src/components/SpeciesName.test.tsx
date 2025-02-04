import { fireEvent, render, screen } from "@testing-library/react";
import { SpeciesName } from "./SpeciesName";

describe("Species Component", () => {
  test("component renders without fail", () => {
    render(
      <SpeciesName
        speciesName="Humans"
        onChangeSpeciesName={() => {}}
        validate={() => []}
      />
    );
  });
  test("displays input field with the provided value", () => {
    render(
      <SpeciesName
        speciesName="Humans"
        onChangeSpeciesName={() => {}}
        validate={() => []}
      />
    );
    const inputFieldValue = screen.getByDisplayValue("Humans");
    expect(inputFieldValue).toBeInTheDocument();
  });
  test("renders with different props", () => {
    const { rerender } = render(
      <SpeciesName
        speciesName="Humans"
        onChangeSpeciesName={() => {}}
        validate={() => []}
      />
    );
    rerender(
      <SpeciesName
        speciesName="Alliens"
        onChangeSpeciesName={() => {}}
        validate={() => []}
      />
    );
    const inputValue = screen.getByDisplayValue("Alliens");
    expect(inputValue).toBeInTheDocument();
  });
  test("calls onChangeSpeciesName with the correct parameters", () => {
    const onChangeMock = jest.fn();
    render(
      <SpeciesName
        speciesName="Humans"
        onChangeSpeciesName={onChangeMock}
        validate={() => []}
      />
    );
    const inputField = screen.getByPlaceholderText("Humans, Alliens, Animals");
    fireEvent.change(inputField, { target: { value: "Animals" } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith("Animals");
  });
});
