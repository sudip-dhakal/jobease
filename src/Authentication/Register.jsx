import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Reusable/Navbar";

const Register = () => {
  return (
    <>
      <div className="relative w-full min-h-screen flex items-center justify-center px-4">
        <img
          src="/job.jpg"
          alt="Job Opportunities"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>

        <div className="relative z-10 w-full max-w-md h-[85vh] flex items-center justify-center">
          <div className="w-full p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
            <form className="space-y-6">
              <h2 className="text-3xl font-extrabold text-center text-amber-500 drop-shadow-lg">
                Create an Account
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="mb-2 font-medium text-gray-200"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter full name"
                    className="border border-white/30 bg-white/10 text-white placeholder-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="contact"
                    className="mb-2 font-medium text-gray-200"
                  >
                    Contact
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    placeholder="Contact number"
                    className="border border-white/30 bg-white/10 text-white placeholder-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="mb-2 font-medium text-gray-200"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="border border-white/30 bg-white/10 text-white placeholder-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 font-medium text-gray-200"
                  >
                    Confirm
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm"
                    className="border border-white/30 bg-white/10 text-white placeholder-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="mb-2 font-medium text-gray-200">
                  Register As
                </span>
                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-2 text-gray-200">
                    <input
                      type="radio"
                      name="role"
                      value="user"
                      className="text-blue-500 focus:ring-blue-500"
                    />
                    <span>User</span>
                  </label>
                  <label className="flex items-center space-x-2 text-gray-200">
                    <input
                      type="radio"
                      name="role"
                      value="recruiter"
                      className="text-blue-500 focus:ring-blue-500"
                    />
                    <span>Recruiter</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-md shadow-lg transform hover:scale-[1.02] transition duration-300"
              >
                Register
              </button>

              <p className="text-center text-sm text-gray-300">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-400 hover:underline font-medium"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
