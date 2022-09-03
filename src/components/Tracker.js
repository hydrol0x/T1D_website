import { useState } from "react";
import FormElement from "./FormElement";
import CreateButton from "./CreateButton";
import SubmitButton from "./SubmitButton";

import "../css/tracker.css";

const Tracker = () => {
  const [forms, setForms] = useState([
    { id: 0, carbs: 0, amount: 0 },
    { id: 1, carbs: 0, amount: 0 },
    { id: 2, carbs: 0, amount: 0 },
    { id: 3, carbs: 0, amount: 0 },
  ]);

  const [totalCarbs, setTotalCarbs] = useState(0);

  const handleSubmit = (e) => {
    // display form vals
    e.preventDefault();
    let carbs = 0;
    forms.map((form) => {
      const carb = parseInt(e.target[form.id + "food"].value);
      const amount = parseInt(e.target[form.id + "weight"].value);
      carbs += carb * amount;
    });
    setTotalCarbs(carbs);
  };

  const addForm = () => {
    // setForms({...dic.len()+1: { carbs: 0, amount: 0}})
    // TODO: implement above
  };

  return (
    <div className="Tracker">
      <h1> Total carbs is {totalCarbs}</h1>
      <div className="headingWrapper">
        <h1>Food</h1> <h1>Amount</h1> <h1>Carbs</h1>
      </div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">submit</button>
      </form>
      <CreateButton addForm={addForm} />
    </div>
  );
};

export default Tracker;
