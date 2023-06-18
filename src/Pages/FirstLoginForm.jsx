import Body from "../Components/Molecule/Body/Body";
import Button from "../Components/Button/Button";
import Header from "../Components/Molecule/Header/Heaader";
import "../Styles/FormInput.scss";
import TextInputComponent from "../Components/TextInputComponent/TextInputComponent";
import { Language } from "../Assets/Language";
import { LoginLogic } from "../Logic/LoginLogic";

import "./styles.scss";
import "../Components/TextInputComponent/styles.scss";

const FirstLoginForm = () => {
  const { onSumbit, Event } = LoginLogic();
  console.log(Event);
  return (
    <div className="form">
      {/* <Header no={"1/3"} />
      <Body />
      <Button /> */}
      <div className="input-pos">
        <TextInputComponent
          title={Language.firstName}
          borderError={"error-msg-border"}
          errorMsg={Language.firstNameErrorMsg}
          handleChange={(value) => onSumbit("firstname", value)}
          defaultValue={Event.firstName}
        />
        <TextInputComponent
          title={Language.lastName}
          errorMsg={Language.lastNameErrorMsg}
          handleChange={(value) => onSumbit("lastname", value)}
          defaultValue={Event.lastName}
        />
      </div>

      <TextInputComponent
        title={Language.email}
        errorMsg=""
        handleChange={(value) => onSumbit("email", value)}
        defaultValue={Event.email}
      />
    </div>
  );
};

export default FirstLoginForm;