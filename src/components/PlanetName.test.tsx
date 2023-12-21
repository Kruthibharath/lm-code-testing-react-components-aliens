import { render, screen } from "@testing-library/react";
import { PlanetName } from "./PlanetName";
import { resolveModuleNameFromCache } from "typescript";

describe("Planet Component", () => {
  test("component renders without fail", () => {
    render(<PlanetName planetName={"Earth"} onChangePlanetName={() => {}} />);
  });

  test("components renders with different props", () => {
    const { rerender } = render(
      <PlanetName planetName="Earth" onChangePlanetName={() => {}} />
    );
    rerender(<PlanetName planetName="Mars" onChangePlanetName={() => {}} />);
    const inputValueForPlanet = screen.getByDisplayValue("Mars");
    expect(inputValueForPlanet).toBeInTheDocument();
  });
});
