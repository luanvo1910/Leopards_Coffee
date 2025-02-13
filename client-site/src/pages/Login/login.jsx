import React from "react";
import Leocf from "../../assets/icons/leopardcf.svg";
import Background from "../../assets/image/background.png"

const Login = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center px-6 py-12" style={{ backgroundImage: `url(${Background})` }}>
      <div className="flex flex-col gap-8 p-10 sm:flex-row sm:items-center sm:gap-6 rounded-3xl bg-[#D8D2C2] shadow-loginForm w-full max-w-2xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="Leopards Coffee" src={Leocf} className="mx-auto h-20 w-auto text-[#B17457]" />
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-[#B17457]">
            LEOPARDS COFFEE
          </h2>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm self-center">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#B17457]">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-[#B17457] text-[#4A4947] px-3 py-1.5 text-base placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F7D060]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-[#B17457]">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-[#B17457] hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-[#B17457] text-[#4A4947] px-3 py-1.5 text-base placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F7D060]"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#B17457] px-3 py-1.5 text-sm font-semibold text-[#4A4947] shadow-md hover:bg-[#e3bb50] focus:outline-none focus:ring-2 focus:ring-[#F7D060]"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
