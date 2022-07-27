import FormElement from "./FormElement";
import CreateButton from "./CreateButton";
import SubmitButton from "./SubmitButton";

import "../css/tracker.css";

const Tracker = ({ totalCarbs, setTotalCarbs, addForm, numForms }) => {
  const handleSubmit = () => {
    const zip = (rows) => rows[0].map((_, c) => rows.map((row) => row[c]));
    const food = Array.from(document.getElementsByClassName("food"));
    const amount = Array.from(document.getElementsByClassName("weight"));
    const vals = zip([food, amount]);
    console.log(vals);
    vals.map((val) => {
      console.log(val[0].value + val[1].value);
    });
  };
  return (
    <div className="Tracker">
      <div className="headingWrapper">
        <h1>Food</h1> <h1>Amount</h1> <h1>Carbs</h1>
      </div>
      <form>
        {numForms.map((id) => {
          return <FormElement id={id} key={id} />;
        })}
      </form>
      <SubmitButton handleSubmit={handleSubmit} />
      <CreateButton addForm={addForm} />
    </div>
  );
};

export default Tracker;
