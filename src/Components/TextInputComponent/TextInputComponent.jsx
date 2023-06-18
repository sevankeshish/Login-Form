import "./styles.scss";

//this is a custom input
const TextInputComponent = ({
  title,
  borderError,
  errorMsg,
  handleChange,
  defaultvalue,
}) => {
  return (
    <div className="input-form">
      <input
        className={`input ${borderError}`}
        placeholder={title}
        value={defaultvalue}
        type="text"
        onChange={(e) => handleChange(e.target.value)}
      />
      {errorMsg && <p className="text-error">{errorMsg}</p>}
    </div>
  );
};

export default TextInputComponent;
