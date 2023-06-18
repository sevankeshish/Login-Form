import InfoForm from "../../InputForm/CustomForm/InfoForm";
import "./styles.scss";

const Body = () => {
  return (
    <div>
      <h1 className="body-text">
        Submit your
        <br /> personal Information
      </h1>
      <InfoForm showRadioButton={true} />
    </div>
  );
};
export default Body;
