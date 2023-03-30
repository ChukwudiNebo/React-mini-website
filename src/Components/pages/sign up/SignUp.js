import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom'
import Text from "../../atoms/text/Text";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import BgText from "../../molecules/bgText/BgText";
import "./signup.css";

const SignUp = () => {
  return (
    <>
      <div className="d-flex signUp">
        <div className="d-none d-lg-block">
          <BgText text="Sign Up" />
        </div>
        <div className="signUp__two">
          <div className="signUp__header">
            <div className="signUp__heading">
              <Text text="Welcome" />
            </div>
            <div className="signUp__heading-paragraph">
              <Text text="Let's sign you up quickly" />
            </div>
          </div>
          <div>
            <form className="signUp__form">
              <div className="signUp__input my-3">
                <Input
                  inputType="text"
                  inputName="name"
                  inputValue="name"
                  inputPlaceholder="Enter your name"
                />
              </div>
              <div className="signUp__input my-3">
                <Input
                  inputType="email"
                  inputName="email"
                  inputValue="email"
                  inputPlaceholder="Enter your email"
                />
              </div>
              <div className="signUp__input my-3">
                <Input
                  inputType="password"
                  inputName="password"
                  inputValue="password"
                  inputPlaceholder="Enter password"
                />
              </div>
              <div className="signUp__input my-3">
                <Input
                  inputType="password"
                  inputName="password2"
                  inputValue="password2"
                  inputPlaceholder="Confirm password"
                />
              </div>
            </form>
          </div>
          <div className="d-flex align-items-center justify-content-between flex-wrap signUp__button">
            <Link to="/blog">
              <div>
                <Button buttonText="SUBMIT" />
              </div>
            </Link>
            <div className="signUp__bottomText">
              <div>
                <Text text="already have an account?" />
              </div>
              <div className="signUp__bottomText-login">
                <Text text="log-in" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
