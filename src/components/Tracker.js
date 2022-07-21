import FormElement from "./FormElement";

const Tracker = ({ numForms }) => {
  return (
    <div className="trackerDiv">
      <form>
        {numForms.map((id) => {
          return <FormElement id={id} />;
        })}
      </form>
    </div>
  );
};

export default Tracker;
