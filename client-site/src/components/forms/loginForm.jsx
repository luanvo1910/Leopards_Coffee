import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const LoginForm = ({ formType }) => {
  return (
    <form className="space-y-6">
      {formType === "login" ? (
        <>
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
                className="block w-full rounded-md bg-[#B17457] text-[#4A4947] px-3 py-1.5 text-base placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4A4947]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#B17457]">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-[#B17457] text-[#4A4947] px-3 py-1.5 text-base placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4A4947]"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#B17457] px-3 py-1.5 text-sm font-semibold text-[#4A4947] shadow-md hover:bg-[#FAF7F0] focus:outline-none focus:ring-2 focus:ring-[#4A4947]"
            >
              Sign in
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <Link to="/forgot-password" className="text-sm text-[#B17457] hover:underline">
              Forgot your password?
            </Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#B17457]">
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-md bg-[#B17457] text-[#4A4947] px-3 py-1.5 text-base placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4A4947]"
              />
            </div>
          </div>

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
                className="block w-full rounded-md bg-[#B17457] text-[#4A4947] px-3 py-1.5 text-base placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4A4947]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#B17457]">
              Phone Number
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="block w-full rounded-md bg-[#B17457] text-[#4A4947] px-3 py-1.5 text-base placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4A4947]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#B17457]">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="new-password"
                className="block w-full rounded-md bg-[#B17457] text-[#4A4947] px-3 py-1.5 text-base placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4A4947]"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#B17457] px-3 py-1.5 text-sm font-semibold text-[#4A4947] shadow-md hover:bg-[#FAF7F0] focus:outline-none focus:ring-2 focus:ring-[#4A4947]"
            >
              Register
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default LoginForm;