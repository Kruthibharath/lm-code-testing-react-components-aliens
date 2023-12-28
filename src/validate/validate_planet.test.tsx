import { validatePlanetName } from "./validate_planet_name";
describe("Validate Planet Name", () => {
  test("validate for error messages when an empty input is passed", () => {
    expect(validatePlanetName("")).toEqual([
      "Please enter the valid planet name",
      "No special characters allowed in Planet Name.",
    ]);
  });
  test("validate for special characters", () => {
    expect(validatePlanetName("_Mar$")).toEqual([
      "No special characters allowed in Planet Name.",
    ]);
  });
  test("validate for the characters between 2 and 49", () => {
    expect(validatePlanetName("E")).toEqual([
      "Planet Name should be between 2 and 49 characters!",
    ]);
  });
  test("Validate for the correct input values", () => {
    expect(validatePlanetName("Earth02")).toEqual([]);
    expect(validatePlanetName("05Jupiter")).toEqual([]);
  });
});
