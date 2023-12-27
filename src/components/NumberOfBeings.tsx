import { ErrorMessage } from "./ErrorMessage";

interface NumberOfBeingsProps {
  numberOfBeings: number;
  onChangeNumberOfBeings: (value: number) => void;
  validate: (value: number) => string[];
}
export const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numberOfBeings,
  onChangeNumberOfBeings,
  validate,
}) => {
  const errorMessage = validate(numberOfBeings);
  return (
    <>
      <div>
        <label id="numberOfBeings" htmlFor="numberOfBeings">
          Number of Beings:
        </label>
        <input
          type="number"
          value={numberOfBeings}
          onChange={(e) => onChangeNumberOfBeings(parseInt(e.target.value))}
          title="Enter the number of beings"
          placeholder="2, 30, 45"
          aria-labelledby="numberOfBeings"
        />
      </div>
      <ErrorMessage warnings={errorMessage} />
    </>
  );
};
