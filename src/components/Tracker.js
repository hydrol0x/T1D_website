import FormElement from "./FormElement";
import CreateButton from "./CreateButton";
import SubmitButton from "./SubmitButton";

import "../css/tracker.css";

const Tracker = () => {
  const [forms, setForms] = useState({
    id0: { carbs: 0, amount: 0 },
    id1: { carbs: 0, amount: 0 },
    id2: { carbs: 0, amount: 0 },
    id3: { carbs: 0, amount: 0 },
  });

  const addForm = () => {
    setFormElements(numForms + 1);
  };

  return (
    <div className="Tracker">
      <h1>{totalCarbs}</h1>
      <div className="headingWrapper">
        <h1>Food</h1> <h1>Amount</h1> <h1>Carbs</h1>
      </div>
      <form>
        {Object.keys(forms).forEach((key, index) => {
          val = forms[key];
          <FormElement
            forms={forms}
            setForms={setForms}
            id={key}
            carbs={val.carbs}
            amount={val.carbs}
          />;
        })}
      </form>
      {/* <SubmitButton handleSubmit={handleSubmit} /> */}
      <CreateButton addForm={addForm} />
    </div>
  );
};

export default Tracker;
