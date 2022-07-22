import FormElement from "./FormElement";
import CreateButton from "./CreateButton";
import "../css/tracker.css";

const Tracker = ({ addForm, numForms }) => {
  return (
    <div className="Tracker">
      <div className="headingWrapper">
        <h1>Food</h1> <h1>Amount</h1> <h1>Carbs</h1>
      </div>
      <form>
        {numForms.map((id) => {
          return <FormElement id={id} />;
        })}
      </form>
      <CreateButton addForm={addForm} />
    </div>
  );
};

export default Tracker;
