import "../../Styles/FormInput.scss";

//this is a custom input
const TextInputComponent = ({
  title,
  borderError,
  errorMsg,
  handleChange,
  defaultvalue,
}) => {
  return (
    <div className="input-form">
      <input
        className="input"
        style={{ borderColor: borderError }}
        placeholder={title}
        value={defaultvalue}
        type="text"
        onChange={(e) => handleChange(e.target.value)}
      />
      <span className="text-error">{errorMsg}</span>
    </div>
  );
};

export default TextInputComponent;
