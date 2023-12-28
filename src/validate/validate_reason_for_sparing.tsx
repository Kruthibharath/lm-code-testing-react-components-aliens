export const validateReasonForSparing: (
  reasonForSparing: string
) => string[] = (reasonForSparing) => {
  const errors: string[] = [];
  if (!reasonForSparing) {
    errors.push("Please enter your reason for sparing");
  } else {
    if (reasonForSparing.length < 17 || reasonForSparing.length > 153) {
      errors.push("Reasoning should be between 17 to 153 characters");
    }
  }
  return errors;
};
