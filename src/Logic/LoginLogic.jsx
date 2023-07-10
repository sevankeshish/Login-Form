import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Color, Language } from "../Assets/Language";

export const LoginLogic = () => {
  const options = [Language.male, Language.female];
  const navigate = useNavigate();

  const [Event, updateEvent] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    //these are my states
    {
      firstName: "",
      lastName: "",
      email: "",
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      firstNameBorderError: "",
      lastNameBorderError: "",
      emailBorderError: "",
      name: "",
      type: "",
      value: "",
      value2: "",
      date: "",
      company: "",
      select0: "",
      select1: "",
      select2: "",
      select3: "",
      dokme: "",
      selectedOption: "",
    }
  );
  const onSubmit = (key, val) => {
    updateEvent({
      [key]: val,
    });
  };

  const navigateSecondPage = () => {
    const atPos = Event.email.indexOf("@");
    const dotPos = Event.email.lastIndexOf(".");
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Event.email);

    switch (true) {
      case Event.firstName === "" &&
        Event.lastName === "" &&
        Event.email === "":
        updateEvent({
          firstNameError: Language.firstNameErrorMsg,
          lastNameError: Language.lastNameErrorMsg,
          emailError: Language.emailErrorMsg,
          firstNameBorderError: Color.red,
          lastNameBorderError: Color.red,
          emailBorderError: Color.red,
        });
        break;
      case Event.firstName === "" && Event.lastName === "":
        updateEvent({
          firstNameError: Language.firstNameErrorMsg,
          lastNameError: Language.lastNameErrorMsg,
          firstNameBorderError: Color.red,
          lastNameBorderError: Color.red,
        });
        break;
      case Event.firstName === "" && Event.email === "":
        updateEvent({
          firstNameError: Language.firstNameErrorMsg,
          emailError: Language.emailErrorMsg,
          firstNameBorderError: Color.red,
          emailBorderError: Color.red,
        });
        break;
      case Event.lastName === "" && Event.email === "":
        updateEvent({
          lastNameError: Language.lastNameErrorMsg,
          emailError: Language.emailErrorMsg,
          lastNameBorderError: Color.red,
          emailBorderError: Color.red,
        });
        break;
      case Event.firstName === "":
        updateEvent({
          firstNameError: Language.firstNameErrorMsg,
          firstNameBorderError: Color.red,
        });
        break;
      case Event.lastName === "":
        updateEvent({
          lastNameError: Language.lastNameErrorMsg,
          lastNameBorderError: Color.red,
        });
        break;
      case Event.email === "":
        updateEvent({
          emailError: Language.emailErrorMsg,
          emailBorderError: Color.red,
        });
        break;
      case !isValidEmail ||
        atPos < 1 ||
        dotPos < atPos ||
        dotPos + 2 >= Event.email.length:
        updateEvent({
          emailError: "Invalid email format",
          emailBorderError: Color.red,
        });
        break;
      default:
        navigate("/secondPage");
    }
  };

  const navigateThirdPage = () => {
    // if (Event.date === "") {
    //   errorMsg = Language.dateErrorMsg;
    // } else {
    //   navigate("/lastPage");
    // }
  };

  const navigateNotExistingPage = () => {
    navigate("/*");
  };
  const navigatePreviousPage = () => {
    navigate(-1);
  };
  return {
    onSubmit,
    Event,
    options,
    navigateSecondPage,
    navigateThirdPage,
    navigateNotExistingPage,
    navigatePreviousPage,
  };
};
