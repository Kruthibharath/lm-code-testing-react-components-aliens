import { ErrorMessage } from "./ErrorMessage";

interface reasonForSparingProps {
  reason: string;
  onChangeOfReason: (value: string) => void;
  validate: (value: string) => string[];
}
export const ReasonForSparing: React.FC<reasonForSparingProps> = ({
  reason,
  onChangeOfReason,
  validate,
}) => {
  const errorMessage = validate(reason);
  return (
    <>
      <div>
        <label htmlFor="reason">Reason for sparing</label>
        <textarea
          id="reason"
          value={reason}
          onChange={(e) => onChangeOfReason(e.target.value)}
          title="Enter the reason for sparing"
        />
      </div>
      <ErrorMessage warnings={errorMessage} />
    </>
  );
};
