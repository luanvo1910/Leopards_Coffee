import React from "react";
import LoginForm from "../../components/forms/loginForm";
import Leocf from "../../assets/icons/leopardcf.svg";
import Background from "../../assets/image/background.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center px-6 py-12" style={{ backgroundImage: `url(${Background})` }}>
      <div className="flex flex-col gap-8 p-10 sm:flex-row sm:items-center sm:gap-6 rounded-3xl bg-[#D8D2C2] shadow-loginForm w-full max-w-2xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center"> 
            <img alt="Leopards Coffee" src={Leocf} className="mx-auto h-20 w-auto text-[#B17457]" />
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-[#B17457]">LEOPARDS COFFEE</h2>
            <Link to="/login" className="font-semibold text-[#B17457] hover:underline mt-4 text-center">Go to Login</Link>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm self-center">
          <LoginForm formType="register" />
        </div>
      </div>
    </div>
  );
};

export default Register;