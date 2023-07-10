// import { useReducer, useState } from "react";
// import { Language } from "../Assets/Language";

// export const LoginLogic = () => {
//   const options = [Language.male, Language.female];

//   // const [romel, setromel] = useState({
//   //   firstName: "",
//   //   lastName: "",
//   //   email: "",
//   // });

//   const [Event, updateEvent] = useReducer(
//     (next, prev) => {
//       return { ...next, ...prev };
//     },
//     //these are my states
//     {
//       firstName: "",
//       lastName: "",
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

//    // if (key === "firstName") {
//   //   updateEvent({
//   //     firstName: val,
//   //   });
//   // } else if (key === "lastName") {
//   //   updateEvent({
//   //     lastName: val,
//   //   });
//   // } else {
//   //   updateEvent({
//   //     email: val,
//   //   });
//   // }

//   //min return mesle props mimanad
//   return { onSubmit, Event, options };
// };
