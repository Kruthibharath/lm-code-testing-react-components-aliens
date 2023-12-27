interface ErrorMessageProps {
  warnings: string[];
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ warnings }) => {
  return (
    <>
      {warnings.length > 0 && (
        <ul style={{ color: "red" }}>
          {warnings.map((warning, index) => (
            <li key={index}>{warning}</li>
          ))}
        </ul>
      )}
    </>
  );
};
