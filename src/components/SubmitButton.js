const SubmitButton = ({ handleSubmit }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <button type="button" onClick={handleClick}>
      Calculate // TODO: add symbol or change text
    </button>
  );
};

export default SubmitButton;
