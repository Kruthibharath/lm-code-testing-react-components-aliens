interface AddNumbersProps {
  result: string;
  onChangeOfSelection: (value: string) => void;
}

export const AddNumbers: React.FC<AddNumbersProps> = ({
  result,
  onChangeOfSelection,
}) => (
  <div>
    <label htmlFor="addNumbers">What is 2+2?</label>
    <select
      value={result}
      onChange={(e) => onChangeOfSelection(e.target.value)}
      title="What is 2 plus 2?git "
    >
      <option value="4">4</option>
      <option value="Not 4">Not 4</option>
    </select>
  </div>
);
