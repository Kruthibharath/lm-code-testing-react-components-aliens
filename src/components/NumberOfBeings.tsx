interface NumberOfBeingsProps {
  numberOfBeings: number;
  onChangeNumberOfBeings: (value: number) => void;
}
export const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numberOfBeings,
  onChangeNumberOfBeings,
}) => (
  <>
    <div>
      <label htmlFor="numberOfBeings">Number of Beings:</label>
      <input
        type="number"
        value={numberOfBeings}
        onChange={(e) => onChangeNumberOfBeings(parseInt(e.target.value))}
        title="Enter the number of beings"
        placeholder="2, 30, 45"
      />
    </div>
  </>
);
