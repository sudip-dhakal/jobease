import React from "react";
import Navbar from "../Reusable/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-center text-4xl font-bold text-blue-700 mb-6">
            Login
          </h1>
          <form className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="mb-2 font-semibold text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
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
                placeholder="Enter your password"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-center gap-x-8 items-center">
              <label className="flex items-center gap-x-2 text-gray-700">
                <input
                  type="radio"
                  name="role"
                  value="user"
                  className="accent-blue-600"
                />
                User
              </label>
              <label className="flex items-center gap-x-2 text-gray-700">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="accent-blue-600"
                />
                Recruiter
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-700">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 hover:underline font-medium"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
