import { useState } from "react";
import W12MHeader from "./W12MHeader";
import { SpeciesName } from "./SpeciesName";
import { PlanetName } from "./PlanetName";
import { NumberOfBeings } from "./NumberOfBeings";
import { AddNumbers } from "./AddNumbers";
import { ReasonForSparing } from "./ReasonForSparing";

interface AppFormData {
  speciesName: string;
  planetName: string;
  numberOfBeings: number;
  addNumbers: string;
  reason: string;
}
interface WebFormProps {
  updateAppFormData: (data: AppFormData) => void;
}

const W12MForm: React.FC<WebFormProps> = ({ updateAppFormData }) => {
  const [speciesName, setSpeciesName] = useState("Humans");
  const [planetName, setPlanetName] = useState("Earth");
  const [numberOfBeings, setNumberOfBeings] = useState(0);
  const [addNumbers, setAddNumbers] = useState("Please select your answer");
  const [reason, setReason] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: AppFormData = {
      speciesName,
      planetName,
      numberOfBeings,
      addNumbers,
      reason,
    };
    updateAppFormData(formData);
    console.log(formData);
  };
  return (
    <section className="w12MForm">
      <W12MHeader />
      <form onSubmit={handleSubmit}>
        <SpeciesName
          speciesName={speciesName}
          onChangeSpeciesName={(value) => setSpeciesName(value)}
        />
        <PlanetName
          planetName={planetName}
          onChangePlanetName={(value) => setPlanetName(value)}
        />
        <NumberOfBeings
          numberOfBeings={numberOfBeings}
          onChangeNumberOfBeings={(value) => setNumberOfBeings(value)}
        />
        <AddNumbers
          result={addNumbers}
          onChangeOfSelection={(value) => setAddNumbers(value)}
        />
        <ReasonForSparing
          reason={reason}
          onChangeOfReason={(value) => setReason(value)}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default W12MForm;
