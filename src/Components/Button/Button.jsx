import { BsArrowRight } from "react-icons/bs";

import "./styles.scss";

const Button = () => {
  return (
    <div className="btn-pos">
      <button className="btn">
        Next
        <BsArrowRight className="arrow" />
      </button>
    </div>
  );
};
export default Button;
