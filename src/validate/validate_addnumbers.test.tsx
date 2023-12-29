import { validateAddNumbers } from "./validate_add_numbers";

describe("validate add numbers", () => {
  test("validate for error messages when empty input passed", () => {
    expect(validateAddNumbers("")).toEqual(["Please select a valid answer"]);
  });
  test("validate for error messages when wrong selection is made", () => {
    expect(validateAddNumbers("Not 4")).toEqual([
      "Please select a valid answer",
    ]);
  });
});
