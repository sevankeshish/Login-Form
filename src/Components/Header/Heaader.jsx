import { BsArrowLeft } from "react-icons/bs";

import "../../Styles/FormInput.scss";

const Header = ({ no, resetButton, previousButton, disable, handleClick }) => {
  // console.log("header", no);
  // console.log("disable", disable);
  return (
    <div className="section">
      <div className="btn-previous-pos">
        <button className="btn-previous" onClick={() => handleClick()}>
          {disable && <BsArrowLeft className="arrow" />}
          <span className="btn-text">{previousButton}</span>
        </button>
      </div>
      <div className="circle-pos">
        <div className="circle">
          <span className="circle-text">{no} </span>
        </div>
      </div>
      <div className="btn-reset-pos">
        <button className="btn-reset">
          <span className="btn-text-reset">{resetButton}</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
