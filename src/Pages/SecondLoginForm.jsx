import { Language } from "../Assets/Language";
import Button from "../Components/Button/Button";
import Header from "../Components/Header/Heaader";
import SecondInputComponent from "../Components/SecondInputComponent/SecondInputComponent";
import TextInputComponent from "../Components/TextInputComponent/TextInputComponent";
import { LoginLogic } from "../Logic/LoginLogic";
import "../Styles/FormInput.scss";

const SecondLoginForm = () => {
  const { onSubmit, Event } = LoginLogic();
console.log(Event);
  return (
    <div className="form">
      <Header no={"2/3"}  previousButton="Previous" />
        <h1 className="body-text">
          Submit your
          <br /> personal Information
        </h1>

      <div className="input-row">
        <label className="label">{Language.GenderLabel}</label>

        <div className="radio-pos">

        <SecondInputComponent
          label={Language.labelName}
          value={Language.male}
          title={Language.firstName}
          handleChange={(value)=>onSubmit("value",value)}
          // handleChange={(value)=>console.log("value",value)}

        />
        <SecondInputComponent label={Language.name} value={Language.female} 
          handleChange={(value)=>onSubmit("value2", value)}/>
        </div>
      </div>

      <div className="input-row">
      <label className="label">{Language.DateLabel}</label>

      <div className="input-email">
        <TextInputComponent title={Language.Date} defaultValue={Event.date}
         handleChange={(value) => onSubmit("date", value)} />
      </div>  
      </div>
      <Button />
    </div>
  );
};

export default SecondLoginForm;
