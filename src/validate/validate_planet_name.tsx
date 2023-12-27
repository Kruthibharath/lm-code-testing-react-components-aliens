export const validatePlanetName: (planetName: string) => string[] = (
  PlanetName
) => {
  const errors: string[] = [];
  const regEx = /^[0-9a-zA-Z\s]+$/;

  if (!PlanetName) {
    errors.push("Please enter the valid planet name");
  } else {
    if (PlanetName.length < 2 || PlanetName.length > 49) {
      errors.push("Planet Name should be between 2 and 49 characters!");
    }
  }
  if (!regEx.test(PlanetName)) {
    errors.push("No special characters allowed in Planet Name.");
  }
  return errors;
};
