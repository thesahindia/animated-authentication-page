import React from "react";
import SignInForm from "../sign-in-form/Sign-in";
import SignUpForm from "../sign-up-form/Sign-up";
import illustration1 from "../../assets/images/illustration1.png";
import illustration2 from "../../assets/images/illustration2.png";
import "./authenticationPage.scss";
import backgroundImage from "../../assets/images/bg.jpg"

const AuthenticationPage = () => {
  return (
    <div className="authentication-page" style={{backgroundImage:`url(${backgroundImage})`}}>
    <div className="form-container">
      <div className="book">
        <div className="page one">
          <SignInForm />
          <label htmlFor="page-2" className="page-label">don't have an account?<span>Sign up</span></label>
        </div>

        <div className="page four">
          <div
            className="illustration"
            style={{ backgroundImage: `url(${illustration2})` }}
          ></div>
        </div>

        <input type="radio" name="page" id="page-1" />
        <input type="radio" name="page" id="page-2" />

        <div className="page two">
          <div className="front-page">
            <div
              className="illustration"
              style={{ backgroundImage: `url(${illustration1})` }}
            ></div>
          </div>
          <div className="back-page">
            <SignUpForm />
            <label htmlFor="page-1" className="page-label">already have an account?<span>Sign in</span></label>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AuthenticationPage;
