import { useState } from "react";
import Tracker from "../components/Tracker";

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
      <Tracker addForm={addForm} numForms={[...Array(numForms).keys()]} />
    </div>
  );
};

export default CarbTracker;
