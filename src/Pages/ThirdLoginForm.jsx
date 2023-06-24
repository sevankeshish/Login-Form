import { Language } from "../Assets/Language";
import Button from "../Components/Button/Button";
import Header from "../Components/Header/Heaader";
import SelectInputComponent from "../Components/SelectInputComponent/SelectInputComponent";
import TextInputComponent from "../Components/TextInputComponent/TextInputComponent";
import { LoginLogic } from "../Logic/LoginLogic";
import "../Styles/FormInput.scss";

const ThirdLoginForm = () => {
  const { onSubmit, Event, navigateNotExistingPage, navigatePreviousPage } =
    LoginLogic();
  return (
    <div className="form">
      <Header
        no={"3/3"}
        resetButton="Reset"
        previousButton="Previous"
        disable={true}
        handleClick={() => navigatePreviousPage()}
      />
      <h1 className="body-text">
        Submit your
        <br /> personal Information
      </h1>

      <TextInputComponent
        title={Language.companyName}
        defaultvalue={Event.company}
        handleChange={(value) => onSubmit("company", value)}
      />

      <div className="">
        <SelectInputComponent
          select={Language.select0}
          select1={Language.select1}
          select2={Language.select2}
          select3={Language.select3}
          // handleSelectChange={(value)=>onSubmit("select0", value)}
          handleSelectChange={(value) => console.log("select0", value)}
          defaultvalue={Event.select0}
        />
      </div>

      <Button handleClick={() => navigateNotExistingPage()} />
    </div>
  );
};

export default ThirdLoginForm;
