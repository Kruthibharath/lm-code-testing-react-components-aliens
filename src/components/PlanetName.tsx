interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (value: string) => void;
}

export const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
}) => (
  <>
    <div>
      <label htmlFor="planetName">Planet Name:</label>
      <input
        type="text"
        value={planetName}
        onChange={(e) => onChangePlanetName(e.target.value)}
        title="Enter the Planet Name"
        placeholder="Earth, Mars, Jupiter"
      />
    </div>
  </>
);
