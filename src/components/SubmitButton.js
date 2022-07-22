const SubmitButton = ({ handleSubmit }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <button type="button" onClick={handleClick}>
      Calculate
    </button>
  );
};

export default SubmitButton;
