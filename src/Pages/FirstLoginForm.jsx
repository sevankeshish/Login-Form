import Button from "../Components/Button/Button";
import Header from "../Components/Header/Heaader";
import TextInputComponent from "../Components/TextInputComponent/TextInputComponent";
import { Language } from "../Assets/Language";
import { LoginLogic } from "../Logic/LoginLogic";

import "../Styles/FormInput.scss";
import "./styles.scss";
import "../Components/TextInputComponent/styles.scss";

const FirstLoginForm = () => {
  const { onSumbit, Event } = LoginLogic();
  console.log(Event);
  return (
    <div className="form">
      <Header no={"1/3"} />
      <div>
        <h1 className="body-text">
          Submit your
          <br /> personal Information
        </h1>
      </div>
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
      <div className="input-email">
        <TextInputComponent
          title={Language.email}
          errorMsg={Language.emailErrorMsg}
          handleChange={(value) => onSumbit("email", value)}
          defaultValue={Event.email}
        />
      </div>
      <Button />;
    </div>
  );
};

export default FirstLoginForm;
