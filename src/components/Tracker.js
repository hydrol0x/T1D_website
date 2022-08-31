import { useState } from "react";
import FormElement from "./FormElement";
import CreateButton from "./CreateButton";
import SubmitButton from "./SubmitButton";

import "../css/tracker.css";

const Tracker = () => {
  const [forms, setForms] = useState({
    0: { carbs: 0, amount: 0 },
    1: { carbs: 0, amount: 0 },
    2: { carbs: 0, amount: 0 },
    3: { carbs: 0, amount: 0 },
  });

  const addForm = () => {
    // setForms({...dic.len()+1: { carbs: 0, amount: 0}})
    // TODO: implement above
  };

  return (
    <div className="Tracker">
      <div className="headingWrapper">
        <h1>Food</h1> <h1>Amount</h1> <h1>Carbs</h1>
      </div>
      <form>
        {Object.keys(forms).map((key, index) => {
          const val = forms[key];
          return (
            <FormElement
              forms={forms}
              setForms={setForms}
              id={key}
              carbs={val.carbs}
              amount={val.amount}
            />
          );
        })}
      </form>
      {/* <SubmitButton handleSubmit={handleSubmit} /> */}
      <CreateButton addForm={addForm} />
    </div>
  );
};

export default Tracker;
