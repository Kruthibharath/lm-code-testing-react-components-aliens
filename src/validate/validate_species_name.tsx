export const validateSpeciesName: (speciesName: string) => string[] = (
  speciesName
) => {
  const errors: string[] = [];
  const regEx = /^[a-zA-Z\s]+$/;

  if (!speciesName) {
    errors.push("Please enter the Valid Species Name.");
  } else {
    if (speciesName.length < 3 || speciesName.length > 23) {
      errors.push("Species Name should be between 3 and 23 characters!");
    }
  }
  if (!regEx.test(speciesName)) {
    errors.push("No numbers or special characters allowed in Species Name.");
  }
  return errors;
};
