import { useReducer, useState } from "react";

export const LoginLogic = () => {
  // const [romel, setromel] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  // });

  const [Event, updateEvent] = useReducer(
    (next, prev) => {
      return { ...next, ...prev };
    },
    //these are my states
    {
      firstname: "",
      lastname: "",
      email: "",
      // data: [],
    }
  );

  const onSumbit = (key, value) => {
    // setromel({[key]:value})
    // setromel((prev)=>{
    //   return{...prev,[key]:value}
    // })
    updateEvent({
      [key]: value,
    });
  };

  //   const hasan = (key, value) => {
  //     updateEvent({
  //       date:[]
  //     });
  //   };
  return { onSumbit, Event };
};
