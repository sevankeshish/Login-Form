import { Language } from "../Assets/Language";
import Button from "../Components/Button/Button";
import Header from "../Components/Header/Heaader";
import SecondInputComponent from "../Components/SecondInputComponent/SecondInputComponent";
import TextInputComponent from "../Components/TextInputComponent/TextInputComponent";
import "../Styles/FormInput.scss";

const SecondLoginForm = () => {
  return (
    <div className="form">
      <Header no={"2/3"} />
      <div>
        <h1 className="body-text">
          Submit your
          <br /> personal Information
        </h1>
      </div>
      <SecondInputComponent
        name2={Language.name}
        value={Language.value}
        title={Language.name}
      />
      <SecondInputComponent name2={Language.name} value={Language.value2} />

      <Button />
    </div>
  );
};

export default SecondLoginForm;
