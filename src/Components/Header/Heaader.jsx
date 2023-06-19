import { BsArrowLeft } from "react-icons/bs";

import "./styles.scss";

const Header = ({ no }) => {
  console.log("header", no);
  return (
    <div className="section">
      <div className="btn-previous-pos">
        <button className="btn-previous">
          <BsArrowLeft className="arrow" />
          <span className="btn-text">previous</span>
        </button>
      </div>
      <div className="circle-pos">
        <div className="circle">
          <span className="circle-text">{no} </span>
        </div>
      </div>
      <div className="btn-reset-pos">
        <button className="btn-reset">
          <span className="btn-text-reset">Reset</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
