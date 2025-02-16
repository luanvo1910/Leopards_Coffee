import React, { useState } from "react";
import LoginForm from "../../components/forms/LoginForm";
import Leocf from "../../assets/icons/leopardcf.svg";
import Background from "../../assets/image/background.png";
import LinkButton from "../../components/buttons/LinkButton";

const AuthPage = () => {
  const [formType, setFormType] = useState("login");

  return (
    <div
      className="flex min-h-screen flex-1 flex-col items-center justify-center px-6 py-12"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex flex-col gap-8 p-10 sm:flex-row sm:items-center sm:gap-6 rounded-3xl bg-[#D8D2C2] shadow-loginForm w-full max-w-2xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
          <img
            alt="Leopards Coffee"
            src={Leocf}
            className="mx-auto h-20 w-auto text-[#B17457]"
          />
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-[#B17457]">
            {formType === "login"
              ? "Login to Leopards Coffee"
              : formType === "register"
              ? "Register for Leopards Coffee"
              : "Reset Your Password"}
          </h2>
          {formType !== "forgot-password" && (
            <LinkButton
              onClick={() =>
                setFormType(formType === "login" ? "register" : "login")
              }
            >
              {formType === "login"
                ? "Create an account"
                : "Already have an account? Login"}
            </LinkButton>
          )}
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm self-center">
          <LoginForm formType={formType} setFormType={setFormType} />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;