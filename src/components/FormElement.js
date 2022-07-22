import "../css/formElement.css";

const FormElement = ({ id }) => {
  return (
    <div className="FormElement">
      <div className="inputDiv" id="foodDiv">
        <input id={`${id}food`} type="text" className="food" />
      </div>
      <div className="inputDiv" id="weightDiv">
        <input id={`${id}weight`} type="text" className="weight" />
      </div>
      <div className="inputDiv" id="carbsDiv">
        <input id={`${id}carbs`} type="text" className="carbs" />
      </div>
    </div>
  );
};

export default FormElement;
