import { useState } from "react";
import InputFields from "./components/InputFields";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const formFields = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      labelText: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      autocomplete: "off",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      labelText: "Email",
      required: true,
      autocomplete: "off",
      errorMessage: "It should be balid email address",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      labelText: "Password",
      required: true,
      autocomplete: "off",
      errorMessage:
        "Passwoed should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      labelText: "Confirm Password",
      required: true,
      autocomplete: "off",
      errorMessage: "Password should be match!",
      pattern: values.password,
    },
  ];

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field) => (
        <InputFields
          key={field.id}
          {...field}
          onChange={onChange}
          value={values[field.name]}
        />
      ))}
      <button className="button">Submit</button>
    </form>
  );
};

export default App;
