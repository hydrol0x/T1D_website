const FormElement = ({ id }) => {
  return (
    <div>
      <input id={`${id}food`} type="text" className="food" />
      <input id={`${id}food`} type="text" className="weight" />
      <input id={`${id}food`} type="text" className="carbs" />
      <br />
    </div>
  );
};

export default FormElement;
