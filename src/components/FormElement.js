import "../css/formElement.css";

const FormElement = ({ key, id }) => {
  return (
    <div className="FormElement">
      <div className="inputDiv" id="foodDiv">
        <select id={`${id}food`} className="food">
          {/* TODO: unhardcode values, pass in through json */}
          <option value="default"> </option>
          <option value="apple">Apple</option>
          <option value="rice">Rice</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
          <option value="bread">Bread</option>
        </select>
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
