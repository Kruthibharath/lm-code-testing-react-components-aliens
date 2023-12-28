import { AddNumbers } from "../components/AddNumbers";

export const validateAddNumbers: (addNumbers: string) => string[] = (
  addNumbers
) => {
  const errors: string[] = [];
  if (addNumbers !== "4") {
    errors.push("Please select a valid answer");
  }
  return errors;
};
