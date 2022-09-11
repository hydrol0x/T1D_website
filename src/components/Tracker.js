import { useState } from "react";
import FormElement from "./FormElement";
import CreateButton from "./CreateButton";

import "../css/tracker.css";

const Tracker = () => {
  const [forms, setForms] = useState([
    { id: 0, carbs: 0, amount: 0 },
    { id: 1, carbs: 0, amount: 0 },
    { id: 2, carbs: 0, amount: 0 },
    { id: 3, carbs: 0, amount: 0 },
  ]);

  const [totalCarbs, setTotalCarbs] = useState(0);

  const addForm = () => {
    setForms([...forms, { id: forms.length, carbs: 0, amount: 0 }]);
  };

  const handleSubmit = (e) => {
    // display form vals
    e.preventDefault();
    let total_carbs = 0;
    console.log(forms);
    forms.map((form) => {
      const carb = parseInt(e.target[form.id + "food"].value);
      const amount = parseInt(e.target[form.id + "weight"].value);
      const carbs = carb * amount;
      total_carbs += carbs;
      form.carbs = carbs;
    });
    setForms(forms);
    setTotalCarbs(total_carbs);
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
