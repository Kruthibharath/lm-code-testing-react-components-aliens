import { useState } from "react";
import "./App.css";
import W12MForm from "./components/W12MForm";

interface AppFormData {
  speciesName: string;
  planetName: string;
  numberOfBeings: number;
  addNumbers: string;
  reason: string;
}

function App() {
  const [formEntries, setFormEntries] = useState<AppFormData | null>(null);
  const updateAppFormData = (data: AppFormData) => {
    setFormEntries(data);
  };
  return (
    <>
      <h1>W-12-M :- APPLICATION TO SPARE PLANET FROM DESTRUCTION</h1>
      <W12MForm updateAppFormData={updateAppFormData} />
      <p>FormData: {JSON.stringify(formEntries)}</p>
    </>
  );
}

export default App;
