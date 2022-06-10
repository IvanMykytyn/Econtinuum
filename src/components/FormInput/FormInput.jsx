import "./form-input.styles.scss";

const FormInput = ({ label, error, labelText, ...otherProps }) => {
  return (
    <div className="form-input-container">
      {labelText && <p>{labelText}</p>}
      <input
        className={`form-input ${error ? "has-error" : ""}`}
        {...otherProps}
        autoComplete="on"
        placeholder={label}
      />
      {error && <span className="help-block">{error}</span>}
    </div>
  );
};

export default FormInput;
