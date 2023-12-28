import { validateSpeciesName } from "./validate_species_name";

describe("ValidateSpeciesName", () => {
  test("valid error messages for an empty input", () => {
    expect(validateSpeciesName("")).toEqual([
      "Please enter the Valid Species Name.",
      "No numbers or special characters allowed in Species Name.",
    ]);
  });
  test("Validating for 3 to 23 characters input", () => {
    expect(validateSpeciesName("An")).toEqual([
      "Species Name should be between 3 and 23 characters!",
    ]);
  });
  test("validate for the numbers and special characters", () => {
    expect(validateSpeciesName("123gtr")).toEqual([
      "No numbers or special characters allowed in Species Name.",
    ]);
    expect(validateSpeciesName("$we*")).toEqual([
      "No numbers or special characters allowed in Species Name.",
    ]);
  });
  test("Validating for alphabets only input", () => {
    expect(validateSpeciesName("Alliens")).toEqual([]);
  });
});
