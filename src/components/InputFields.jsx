/* eslint-disable react/prop-types */
import { useState } from "react";
import "./style.css";

const InputFields = ({ labelText, onChange, errorMessage, ...otherProps }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="inputField">
      <label>{labelText}</label>
      <input
        {...otherProps}
        onChange={onChange}
        onBlur={() => setFocused(true)}
        onFocus={() =>
          otherProps.name === "confirmPassword" && setFocused(true)
        }
        // eslint-disable-next-line react/no-unknown-property
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default InputFields;
