import { validateNumberOfBeings } from "./validate_number_of_beings";

describe("Validate Number of beings", () => {
  /*test("Display correct error message when empty input is passed", () => {
    expect(validateNumberOfBeings(0)).toEqual([
      "Please enter the number of beings",
      "Only numeric characters are allowed.",
    ]);
  });*/

  test("validate for the numeric inputs only and for the correct values", () => {
    expect(validateNumberOfBeings(234)).toEqual([
      "Number of beings must be at least 1,000,000,000.",
    ]);
  });

  test("validate for the numeric inputs only", () => {
    expect(validateNumberOfBeings(3 % 789)).toEqual([
      "Number of beings must be at least 1,000,000,000.",
    ]);
  });

  test("validate for the correct value provided", () => {
    expect(validateNumberOfBeings(2343422441)).toEqual([]);
  });
});
