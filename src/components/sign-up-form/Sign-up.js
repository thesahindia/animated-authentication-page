import React, { useState } from "react";
import Field from "../field/Field";
import "./sign-up.scss";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="signUp">
      <h1 className="signUp-header">Sign up</h1>
      <form onSubmit={handleSubmit}>
        <Field
          name="displayName"
          label="Full Name"
          onChange={handleChange}
          value={formData.displayName}
          placeholder="John Doe"
        />
        <Field
          name="email"
          label="Email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="john@gmail.com"
        />
        <Field
          name="password"
          label="Password"
          onChange={handleChange}
          value={formData.password}
          placeholder="Enter Your Password"
        />
        <div className="btn-container">
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
