import { Language } from "../Assets/Language";
import Button from "../Components/Button/Button";
import Header from "../Components/Header/Heaader";
import RadioButtonComponent from "../Components/RadioButtonComponent/RadioButtonComponent";
import TextInputComponent from "../Components/TextInputComponent/TextInputComponent";
import { LoginLogic } from "../Logic/LoginLogic";
import "../Styles/FormInput.scss";

const SecondLoginForm = () => {
  const { onSubmit, Event, options } = LoginLogic();
  console.log(Event);
  return (
    <div className="form">
      <Header no={"2/3"} previousButton="Previous" disable={true} />
      <h1 className="body-text">
        Submit your
        <br /> personal Information
      </h1>

      <div className="input-row">
        <label className="label">{Language.GenderLabel}</label>

        <div className="radio-pos">
          {options.map((e) => (
            <RadioButtonComponent
              label={options}
              radioValue={e}
              handleChange={(value) => onSubmit("value", value)}
              // handleChange={(value)=>console.log("value",value)}
            />
          ))}
        </div>
      </div>

      <div className="input-row">
        <label className="label">{Language.DateLabel}</label>

        <div className="input-email">
          <TextInputComponent
            title={Language.Date}
            defaultValue={Event.date}
            handleChange={(value) => onSubmit("date", value)}
          />
        </div>
      </div>
      <Button />
    </div>
  );
};

export default SecondLoginForm;
