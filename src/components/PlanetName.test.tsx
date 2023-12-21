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

  test("component displaying label text correctly", () => {
    //const handleSubmitMock = jest.fn();
    render(<PlanetName planetName="Earth" onChangePlanetName={() => {}} />);
    const inputField = screen.getByLabelText("Planet Name:");
    expect(inputField).toBeInTheDocument();
  });

  test("title attribute is displayed correctly", () => {
    render(<PlanetName planetName="Earth" onChangePlanetName={() => {}} />);
    const title = screen.getByTitle("Enter the Planet Name");
    expect(title).toBeInTheDocument();
  });
});
