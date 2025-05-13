import React from "react";
import { IoPersonAdd } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbMapPinCode } from "react-icons/tb";

const Registration = ({ setCurrentStatus }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="relative flex flex-col m-6 space-y-8 bg-white/40 shadow-2xl rounded-2xl md:flex-row md:space-y-0 w-full max-w-sm sm:max-w-md md:max-w-lg">
        <div className="flex flex-col justify-center p-15 px-6 py-10 sm:px-10 md:p-14">
          <h1 className="mb-2 font-bold text-3xl sm:text-4xl text-center">
            Registration
          </h1>

          <p className="text-sm sm:text-base text-gray-600 pb-5 flex justify-center items-center">
            It only takes a miniute to register and get started!
          </p>

          <form className="justify-center items-center">
            <div className="flex flex-col">
              <div className="py-2 relative">
                <div className="absolute top-5 left-1 px-2 flex items-center justify-center">
                  <IoPersonAdd />
                </div>
                <input
                  className="w-full p-2 border border-gray-300 rounded-xl placeholder:text-gray-500 px-12 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-duration-200"
                  type="text"
                  placeholder="Enter Name"
                  required
                />
              </div>

              <div className="py-2 relative">
                <div className="absolute top-5 left-1 px-2 flex items-center justify-center">
                  <MdAttachEmail />
                </div>
                <input
                  className="w-full p-2 border border-gray-300 rounded-xl placeholder:text-gray-500 px-12 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-duration-200"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="py-2 relative">
                <div className="absolute top-5 left-1 px-2 flex items-center justify-center">
                  <FaPhoneAlt />
                </div>
                <input
                  className="w-full p-2 border border-gray-300 rounded-xl placeholder:text-gray-500 px-12 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-duration-200"
                  type="Number"
                  placeholder="Phone No."
                  required
                />
              </div>

              <div className="py-2 relative">
                <div className="absolute top-5 left-1 px-2 flex items-center justify-center">
                  <FaLocationDot />
                </div>
                <input
                  className="w-full p-2 border border-gray-300 rounded-xl placeholder:text-gray-500 px-12 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-duration-200"
                  type="text"
                  placeholder="Location/city"
                  required
                />
              </div>

              <div className="py-2 relative">
                <div className="absolute top-5 left-1 px-2 flex items-center justify-center">
                  <TbMapPinCode />
                </div>
                <input
                  className="w-full p-2 border border-gray-300 rounded-xl placeholder:text-gray-500 px-12 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-duration-200"
                  type="Number"
                  placeholder="Pin code"
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
                  placeholder="Enter Password"
                  required
                />
              </div>

              <div className="p-6 relative">
                <div>
                  <input
                    className="w-4 h-4 absolute top-7 left-1 flex items-center justify-center"
                    type="checkbox"
                    required
                  />
                  <p className="text-sm text-gray-700 w-full px-3">
                    By continuing , i agree to the term of use & privacy policy
                    .
                  </p>
                </div>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full rounded-lg font-semibold bg-gray-800 text-white hover:scale-105 hover:bg-gray-700 p-2 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Create Account
                </button>
              </div>

              <div className="text-sm sm:text-base flex items-center justify-center py-6 text-slate-800">
                <p>
                  Already have an account ?
                  <a
                    href="#"
                    onClick={() => setCurrentStatus("login")}
                    className="text-blue-900 font-semibold hover:underline inline-block cursor-pointer"
                  >
                    {" "}
                    Login Here{" "}
                  </a>{" "}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
