import Button from "../Components/Button/Button";
import Header from "../Components/Header/Heaader";
import TextInputComponent from "../Components/TextInputComponent/TextInputComponent";
import { Language } from "../Assets/Language";
import { LoginLogic } from "../Logic/LoginLogic";

import "../Styles/FormInput.scss";
import "./styles.scss";
import "../Components/TextInputComponent/styles.scss";

const FirstLoginForm = () => {
  const { onSubmit, Event, navigateSecondPage } = LoginLogic();
  // console.log(Event);

  return (
    <div className="form">
      <Header no={"1/3"} disable={false} />
      <h1 className="body-text">
        Submit your
        <br /> personal Information
      </h1>
      <div className="input-pos">
        <TextInputComponent
          title={Language.firstName}
          borderError={"error-msg-border"}
          //// errorMsg={Language.firstNameErrorMsg}
          errorMsg={Event.firstname === "" ? Language.firstNameErrorMsg : ""}
          handleChange={(value) => onSubmit("firstname", value)}
          defaultValue={Event.firstName}
        />
        <TextInputComponent
          title={Language.lastName}
          borderError={"error-msg-border"}
          errorMsg={Event.lastname === "" ? Language.lastNameErrorMsg : ""}
          handleChange={(value) => onSubmit("lastname", value)}
          defaultValue={Event.lastName}
        />
      </div>
      <div className="input-email">
        <TextInputComponent
          title={Language.email}
          borderError={"error-msg-border"}
          errorMsg={
            (Event.email === "" && Language.emailErrorMsg) ||
            (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Event.email) &&
              Language.emailInvalidErrorMsg)
          }
          handleChange={(value) => onSubmit("email", value)}
          defaultValue={Event.email}
        />
      </div>
      <Button
        handleClick={() =>
          // console.log("first")
          navigateSecondPage()
        }
        // handleClick={navigateSecondPage}
      />
    </div>
  );
};

export default FirstLoginForm;
