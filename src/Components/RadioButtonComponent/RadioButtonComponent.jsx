import { Language } from "../../Assets/Language";
import "./styles.scss";

const RadioButtonComponent = ({ label, radioValue, handleChange }) => {
  return (
    <div className="radio-input">
      <input
        type="radio"
        id="1"
        name={label}
        value={radioValue}
        onChange={(e) => handleChange(e.target.value)}
        // className="radio-input"
      />
    </div>
  );
};

export default RadioButtonComponent;
