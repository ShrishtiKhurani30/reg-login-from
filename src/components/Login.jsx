import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
// import {logo} from './g-logo.webp'

const Login = ({ setCurrentStatus }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="relative flex flex-col m-6 space-y-8 bg-white/40 shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-15 px-6 py-10 sm:px-10 md:p-14">
          <h1 className="mb-2 font-bold text-3xl md:text-4xl text-center">
            Login
          </h1>

          <p className="text-sm sm:text-base text-gray-600 pb-5 flex justify-center items-center">
            Welcome back
          </p>

          <div>
            <div className="py-2 relative">
              <div className="absolute top-5 left-1 px-2 flex items-center justify-center">
                <HiOutlineMailOpen />
              </div>
              <input
                className="w-full p-2 border border-gray-300 rounded-xl placeholder:text-gray-500 px-12 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-duration-200"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="py-2 relative">
              <div className="absolute top-5 left-1 px-2 flex items-center justify-center">
                <RiLockPasswordFill />
              </div>
              <input
                className="w-full p-2 border border-gray-300 rounded-xl placeholder:text-gray-500 px-12 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-duration-200"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <p className="text-right italic text-sm text-gray-700 hover:underline py-1 pb-5 cursor-pointer">
              Forget password?
            </p>

            <div className="w-full">
              <div className="w-full flex justify-center items-center rounded-lg font-semibold bg-gray-800 text-white hover:scale-105 hover:bg-gray-700 p-2 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <button>Login</button>
              </div>
            </div>

            <div className="flex items-center justify-center py-6 text-slate-800">
              <p>
                Not a member ?
                <a
                  href="#"
                  onClick={() => setCurrentStatus("register")}
                  className="text-blue-900 font-semibold hover:underline inline-block cursor-pointer"
                >
                  Register Here{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
