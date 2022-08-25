import Tracker from "../components/Tracker";

import "../css/carbTracker.css";

const CarbTracker = () => {
  // Counts how many carbs user has set

  return (
    <div className="CarbTrackerDiv">
      <h1 className="trackerh1"> Carb tracker </h1>
      <Tracker />
    </div>
  );
};

export default CarbTracker;
