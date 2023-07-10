import { BsArrowRight } from "react-icons/bs";
import "../../Styles/FormInput.scss";

const Button = ({ handleClick }) => {
  return (
    <div className="btn-pos">
      <button onClick={handleClick} className="btn">
        Next
        <BsArrowRight className="arrow" />
      </button>
    </div>
  );
};
export default Button;
