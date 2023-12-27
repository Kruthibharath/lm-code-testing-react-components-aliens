import { ErrorMessage } from "./ErrorMessage";

interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (value: string) => void;
  validate: (value: string) => string[];
}

export const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
  validate,
}) => {
  const errorMessage = validate(speciesName);
  return (
    <>
      <div>
        <label htmlFor="speciesName">Species Name:</label>
        <input
          id="speciesName"
          type="text"
          value={speciesName}
          onChange={(e) => onChangeSpeciesName(e.target.value)}
          title="Enter the Species Name"
          placeholder="Humans, Alliens, Animals"
        />
        <ErrorMessage warnings={errorMessage} />
      </div>
    </>
  );
};
