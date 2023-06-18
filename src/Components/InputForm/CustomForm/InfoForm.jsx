import TextInput from "../TextInput/TextInput";

import "./styles.scss";

const InfoForm = ({ showRadioButton }) => {
  const FormData = [
    {
      id: "1",
      type: "text",
      title: "Name",
      placeholderName: "Name",
      name: "Male",
      value: "Male",
    },
    {
      id: "2",
      type: "text",
      title: "Lastname",
      placeholderName: "Last Name",
      name: "Female",
      value: "Female",
    },
    { id: "2", type: "email", title: "E-mail", placeholderName: "E-mail" },
  ];
  return (
    <div className="input-data">
      {showRadioButton && (
        <>
          {FormData.map((e) => (
            <TextInput
              key={e.id}
              name={e.title}
              placeholders={e.placeholderName}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default InfoForm;
