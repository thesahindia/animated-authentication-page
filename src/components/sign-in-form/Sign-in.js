import React, { useState } from "react";
import Field from "../field/Field";
import { ReactComponent as GoogleLogo } from "../../assets/images/google.svg";
import "./sign-in.scss";

const SignInForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="signIn">
      <div className="signIn-header">
        <h1 className="heading">Sign In</h1>
        <h3 className="sub-heading">I Already have an account</h3>
      </div>
      <form className="" onSubmit={handleSubmit}>
        <Field
          name="email"
          label="Email"
          onChange={handleChange}
          type="email"
          required
          value={formData.email}
          placeholder="joe@gmail.com"
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
      <div className="or">
        <hr />
        or
        <hr />
      </div>
      <button className="google btn">
        <GoogleLogo /> Log in with google
      </button>
    </div>
  );
};

export default SignInForm;
