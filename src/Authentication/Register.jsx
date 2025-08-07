import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Reusable/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-md mx-auto mt-16 p-8 bg-white rounded-lg shadow-md">
        <form className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Register
          </h2>

          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="contact"
              className="mb-2 font-semibold text-gray-700"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              placeholder="Enter your contact number"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-2 font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="mb-2 font-semibold text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter your password"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
