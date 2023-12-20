interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (value: string) => void;
}

export const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
}) => (
  <>
    <div>
      <label htmlFor="speciesName">Species Name:</label>
      <input
        type="text"
        value={speciesName}
        onChange={(e) => onChangeSpeciesName(e.target.value)}
        title="Enter the Species Name:"
        placeholder="Humans, Alliens, Animals "
      />
    </div>
  </>
);
