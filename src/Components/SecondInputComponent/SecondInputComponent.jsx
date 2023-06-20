import { Language } from "../../Assets/Language";
import "./styles.scss";

const SecondInputComponent = ({ name2, value, title }) => {
  return (
    <div className="second-input">
      <input
        type="radio"
        id="1"
        name={name2}
        value={value}
        placeholder={title}
        // className="second-input"
      />
      <input
        type="radio"
        id="2"
        name={name2}
        value={value}
        // className="second-input"
      />
    </div>
  );
};

export default SecondInputComponent;
