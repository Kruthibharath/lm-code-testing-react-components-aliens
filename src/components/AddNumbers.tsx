interface AddNumbersProps {
  result: string;
  onChangeOfSelection: (value: string) => void;
  defaultValue: string;
}

export const AddNumbers: React.FC<AddNumbersProps> = ({
  result,
  onChangeOfSelection,
  defaultValue,
}) => (
  <div>
    <label id="addNumbers" htmlFor="addNumbers">
      What is 2+2?
    </label>
    <select
      name="addNumbers"
      value={result}
      defaultValue={defaultValue}
      onChange={(e) => onChangeOfSelection(e.target.value)}
      title="What is 2 plus 2?"
      aria-labelledby="addNumbers"
    >
      <option value="4">4</option>
      <option value="Not 4">Not 4</option>
    </select>
  </div>
);
