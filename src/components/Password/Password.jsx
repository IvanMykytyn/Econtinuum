import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import { ReactComponent as PasswordEye } from "../../assets/eye.svg";

import "./password.styles.scss";

const Password = ({ ...otherProps }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const v = otherProps.value?.length ? "block" : "none";
  return (
    <div className="password-container">
      <FormInput type={passwordShown ? "text" : "password"} {...otherProps} />
      <PasswordEye
        className={otherProps.labelText ? "eye eye-with-label" : "eye"}
        style={{ display: v }}
        onClick={() => setPasswordShown(!passwordShown)}
      />
    </div>
  );
};

export default Password;
