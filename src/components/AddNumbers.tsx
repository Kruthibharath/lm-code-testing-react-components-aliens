import { ErrorMessage } from "./ErrorMessage";

interface AddNumbersProps {
  addNumbers: string;
  onChangeOfSelection: (value: string) => void;
  validate: (value: string) => string[];
  //defaultValue: string; can't have both controlled and uncontrolled value at the same time
}

export const AddNumbers: React.FC<AddNumbersProps> = ({
  addNumbers,
  onChangeOfSelection,
  validate,
  //defaultValue,
}) => {
  const errorMessage = validate(addNumbers);
  return (
    <>
      <div>
        <label id="addNumbers" htmlFor="addNumbers">
          What is 2+2?
        </label>
        <select
          name="addNumbers"
          value={addNumbers === "Select your answer" ? "" : addNumbers}
          //defaultValue={defaultValue}
          onChange={(e) => onChangeOfSelection(e.target.value)}
          title="What is 2 plus 2?"
          aria-labelledby="addNumbers"
        >
          <option value="">Select your answer</option>
          <option value="4">4</option>
          <option value="Not 4">Not 4</option>
        </select>
      </div>
      <ErrorMessage warnings={errorMessage} />
    </>
  );
};
