import { useState } from "react";
import Tracker from "../components/Tracker";
import CreateButton from "../components/CreateButton";
import "../css/carbTracker.css";

const CarbTracker = () => {
  const [numForms, setFormElements] = useState(5);

  const addForm = () => {
    setFormElements(numForms + 1);
    console.log(numForms);
  };
  return (
    <div className="CarbTrackerDiv">
      <h1 className="trackerh1"> Carb tracker </h1>
      <Tracker numForms={Array(numForms).fill(null)} />
      <CreateButton addForm={addForm} />
    </div>
  );
};

export default CarbTracker;
