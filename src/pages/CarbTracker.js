import { useState } from "react";
import Tracker from "../components/Tracker";

import "../css/carbTracker.css";

const CarbTracker = () => {
 // Counts how many carbs user has set
  const [numForms, setFormElements] = useState(5);

  
  return (
    <div className="CarbTrackerDiv">
      <h1 className="trackerh1"> Carb tracker </h1>
      <h1>{totalCarbs}</h1>
      <Tracker
        totalCarbs={totalCarbs}
        setTotalCarbs={setTotalCarbs}
        addForm={addForm}
        numForms={[...Array(numForms).keys()]}
      />
    </div>
  );
};

export default CarbTracker;
