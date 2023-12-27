import { ErrorMessage } from "./ErrorMessage";

interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (value: string) => void;
  validate: (value: string) => string[];
}

export const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
  validate,
}) => {
  const errorMessage = validate(planetName);
  return (
    <>
      <div>
        <label htmlFor="planetName">Planet Name:</label>
        <input
          id="planetName"
          type="text"
          value={planetName}
          onChange={(e) => onChangePlanetName(e.target.value)}
          title="Enter the Planet Name"
          placeholder="Earth, Mars, Jupiter"
        />
        <ErrorMessage warnings={errorMessage} />
      </div>
    </>
  );
};
