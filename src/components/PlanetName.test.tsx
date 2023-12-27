import { render, screen } from "@testing-library/react";
import { PlanetName } from "./PlanetName";

describe("Planet Component", () => {
  test("component renders without fail", () => {
    render(
      <PlanetName
        planetName={"Earth"}
        onChangePlanetName={() => {}}
        validate={() => []}
      />
    );
  });

  test("components renders with different props", () => {
    const { rerender } = render(
      <PlanetName
        planetName="Earth"
        onChangePlanetName={() => {}}
        validate={() => []}
      />
    );
    rerender(
      <PlanetName
        planetName="Mars"
        onChangePlanetName={() => {}}
        validate={() => []}
      />
    );
    const inputValueForPlanet = screen.getByDisplayValue("Mars");
    expect(inputValueForPlanet).toBeInTheDocument();
  });

  test("component displaying label text correctly", () => {
    render(
      <PlanetName
        planetName="Earth"
        onChangePlanetName={() => {}}
        validate={() => []}
      />
    );
    const inputField = screen.getByLabelText("Planet Name:");
    expect(inputField).toBeInTheDocument();
  });

  test("title attribute is displayed correctly", () => {
    render(
      <PlanetName
        planetName="Earth"
        onChangePlanetName={() => {}}
        validate={() => []}
      />
    );
    const title = screen.getByTitle("Enter the Planet Name");
    expect(title).toBeInTheDocument();
  });
});
