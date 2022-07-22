import "../css/formElement.css";

// const Heading = ({ text, id }) => {
//   if (id === 0) {
//     return <p className="formHeading">{text}</p>;
//   } else {
//     return;
//   }
// };

const FormElement = ({ id }) => {
  // const handleChange = (e) => {
  //   console.log(e.currentTarget.value, e.currentTarget.id);
  // };
  return (
    <div className="FormElement">
      <div className="inputDiv" id="foodDiv">
        {/* <Heading text="Food" id={id} /> */}
        <input
          // onChange={handleChange}
          id={`${id}food`}
          type="text"
          className="food"
        />
      </div>
      <div className="inputDiv" id="weightDiv">
        {/* <Heading text="Amount" id={id} /> */}
        <input id={`${id}weight`} type="text" className="weight" />
      </div>
      <div className="inputDiv" id="carbsDiv">
        {/* <Heading text="Carbs" id={id} /> */}
        <input id={`${id}carbs`} type="text" className="carbs" />
      </div>
    </div>
  );
};

export default FormElement;
