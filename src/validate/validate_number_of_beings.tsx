import { NumberOfBeings } from "../components/NumberOfBeings";

export const validateNumberOfBeings: (numberOfBeings: number) => string[] = (
  numberOfBeings
) => {
  const errors: string[] = [];
  const regEx = /^[0-9]+$/;

  if (!NumberOfBeings) {
    errors.push("Please enter the number of beings");
  } else {
    if (numberOfBeings < 1000000000) {
      errors.push("Number of beings must be at least 1,000,000,000.");
    }
  }
  if (!regEx.test(numberOfBeings.toString())) {
    errors.push("Only numeric characters are allowed.");
  }
  return errors;
};
