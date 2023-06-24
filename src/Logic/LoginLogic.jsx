import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Language } from "../Assets/Language";
import { ToastContainer, toast } from "react-toastify";

export const LoginLogic = () => {
  const options = [Language.male, Language.female];
  const navigate = useNavigate();

  let errorMsg = "";

  const [Event, updateEvent] = useReducer(
    (next, prev) => {
      return { ...next, ...prev };
    },
    //these are my states
    {
      firstname: "",
      lastname: "",
      email: "",
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

    // if (key === "firstname" && val === "") {
    //   console.log("error");
    // }
    if (Event.firstname === "") {
      errorMsg = Language.firstNameErrorMsg;
    } else if (Event.lastname === "") {
      errorMsg = Language.lastNameErrorMsg;
    } else if (
      !isValidEmail ||
      atPos < 1 ||
      dotPos < atPos ||
      dotPos + 2 >= Event.email.length
    ) {
      errorMsg = Language.emailErrorMsg;
    } else {
      navigate("/secondPage");
    }
  };

  const navigateThirdPage = () => {
    if (Event.date === "") {
      errorMsg = Language.dateErrorMsg;
    } else {
      navigate("/lastPage");
    }
  };
  const navigateNotExistingPage = () => {
    navigate("/lastPage");
  };
  const navigatePreviousPage = () => {
    navigate(-1);
  };
  //min return mesle props mimanad
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
