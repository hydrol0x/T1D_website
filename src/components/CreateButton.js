const CreateButton = ({ addForm }) => {
  const handleClick = (e) => {
    e.preventDefault();
    addForm();
  };
  return (
    <button type="button" onClick={handleClick}>
      +
    </button>
  );
};

export default CreateButton;
