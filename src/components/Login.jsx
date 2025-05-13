import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = ({ setCurrentStatus }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="relative flex flex-col m-6 space-y-8 bg-white/40 shadow-2xl rounded-2xl md:flex-row md:space-y-0 w-full max-w-sm sm:max-w-md md:max-w-lg">
        <div className="flex flex-col justify-center items-center w-full px-6 py-10 sm:px-10 md:p-14">
          <h1 className="mb-2 font-bold text-3xl md:text-4xl text-center">
            Login
          </h1>

          <p className="text-sm sm:text-base text-gray-600 pb-5 text-center">
            Welcome back
          </p>

          <form className="flex flex-col gap-4 items-center w-full">
            <div className="relative w-full max-w-sm">
              <div className="absolute top-3 left-1 px-2 flex items-center justify-center">
                <HiOutlineMailOpen />
              </div>
              <input
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl placeholder:text-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="relative w-full max-w-sm">
              <div className="absolute top-3 left-1 px-2 flex items-center justify-center">
                <RiLockPasswordFill />
              </div>
              <input
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl placeholder:text-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <p className="text-right italic text-sm text-gray-700 hover:underline w-full max-w-sm cursor-pointer">
              Forgot password?
            </p>

            <button
              type="submit"
              className="w-full max-w-sm text-center rounded-lg font-semibold bg-gray-800 text-white hover:scale-105 hover:bg-gray-700 py-2 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Login
            </button>

            <div className="text-center text-slate-800 text-sm sm:text-base pt-4">
              Not a member?{" "}
              <span
                onClick={() => setCurrentStatus("register")}
                className="text-blue-900 font-semibold hover:underline cursor-pointer"
              >
                Register Here
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
