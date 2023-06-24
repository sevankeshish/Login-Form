// import { useReducer, useState } from "react";
// import { Language } from "../Assets/Language";

// export const LoginLogic = () => {
//   const options = [Language.male, Language.female];

//   // const [romel, setromel] = useState({
//   //   firstname: "",
//   //   lastname: "",
//   //   email: "",
//   // });

//   const [Event, updateEvent] = useReducer(
//     (next, prev) => {
//       return { ...next, ...prev };
//     },
//     //these are my states
//     {
//       firstname: "",
//       lastname: "",
//       email: "",
//       name: "",
//       type: "",
//       value: "",
//       value2: "",
//       date: "",
//       company: "",
//       select0: "",
//       select1: "",
//       select2: "",
//       select3: "",
//       dokme: "",
//       selectedOption: "",
//     }
//   );

//   const onSubmit = (val) => {
//     updateEvent({
//       selectedOption: val,
//     });
//     // setromel({[key]:value})
//     // setromel((prev)=>{
//     //   return{...prev,[key]:value}
//     // })

//     // console.log(key, value, "romel");
//   };

//   //   const hasan = (key, value) => {
//   //     updateEvent({
//   //       date:[]
//   //     });
//   //   };

//    // if (key === "firstname") {
//   //   updateEvent({
//   //     firstname: val,
//   //   });
//   // } else if (key === "lastname") {
//   //   updateEvent({
//   //     lastname: val,
//   //   });
//   // } else {
//   //   updateEvent({
//   //     email: val,
//   //   });
//   // }

//   //min return mesle props mimanad
//   return { onSubmit, Event, options };
// };
