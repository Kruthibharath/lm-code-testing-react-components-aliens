import { render, screen } from "@testing-library/react";
import { SpeciesName } from "./SpeciesName";

describe("Species Component", () => {
  test("component renders without fail", () => {
    render(<SpeciesName speciesName="Humans" onChangeSpeciesName={() => {}} />);
  });

  test("renders with different props", () => {
    const { rerender } = render(
      <SpeciesName speciesName="Humans" onChangeSpeciesName={() => {}} />
    );
    rerender(
      <SpeciesName speciesName="Alliens" onChangeSpeciesName={() => {}} />
    );
    const inputValue = screen.getByDisplayValue("Alliens");
    expect(inputValue).toBeInTheDocument();
  });
});
