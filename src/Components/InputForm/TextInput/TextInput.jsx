import "./styles.scss";

const TextInput = ({ name, placeholders }) => {
  return (
    <div className="input-form">
      <input className="input" name={name} placeholder={placeholders} />
    </div>
  );
};

export default TextInput;
