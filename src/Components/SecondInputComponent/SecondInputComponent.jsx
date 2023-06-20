import { Language } from "../../Assets/Language";
import "./styles.scss";

const SecondInputComponent = ({ label, value, title , handleChange}) => {
  return (
    <div className="second-input">
      <input
        type="radio"
        id="1"
        name={label}
        value={value}
        placeholder={title}
        onChange={(e)=>handleChange(e.target.value)}
        // className="second-input"
      />
    </div>
  );
};

export default SecondInputComponent;
