import image from "../addicon.png";

const CreateButton = ({ addForm }) => {
  const handleClick = (e) => {
    e.preventDefault();
    addForm();
  };
  return (
    <img
      src={image}
      onClick={handleClick}
      alt="add input"
      height={100}
      width={100}
    />
  );
};

export default CreateButton;
