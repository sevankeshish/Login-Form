import "../../Styles/FormInput.scss";

const RadioButtonComponent = ({
  label,
  radioValue,
  handleChange,
  errorMsg,
}) => {
  return (
    <div className="radio-input">
      <input
        className="radio"
        type="radio"
        id="1"
        name={label}
        value={radioValue}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default RadioButtonComponent;
