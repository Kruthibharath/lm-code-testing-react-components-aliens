interface reasonForSparingProps {
  reason: string;
  onChangeOfReason: (value: string) => void;
}
export const ReasonForSparing: React.FC<reasonForSparingProps> = ({
  reason,
  onChangeOfReason,
}) => (
  <>
    <div>
      <label htmlFor="reason">Reason for sparing</label>
      <textarea
        value={reason}
        onChange={(e) => onChangeOfReason(e.target.value)}
      />
    </div>
  </>
);
