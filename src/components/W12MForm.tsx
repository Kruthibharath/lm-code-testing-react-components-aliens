import { useState } from "react";
import W12MHeader from "./W12MHeader";
import { SpeciesName } from "./SpeciesName";
import { PlanetName } from "./PlanetName";
import { NumberOfBeings } from "./NumberOfBeings";
import { AddNumbers } from "./AddNumbers";
import { ReasonForSparing } from "./ReasonForSparing";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("Humans");
  const [planetName, setPlanetName] = useState("Earth");
  const [numberOfBeings, setNumberOfBeings] = useState(0);
  const [addNumbers, setAddNumbers] = useState("Please select your answer");
  const [reason, setReason] = useState("");
  return (
    <section className="w12MForm">
      <W12MHeader />
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
    </section>
  );
};

export default W12MForm;
