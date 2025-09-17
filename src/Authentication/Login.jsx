import React from "react";
import Navbar from "../Reusable/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="relative w-full min-h-screen flex items-center justify-center px-4">
        <img
          src="/job.jpg"
          alt="Job Opportunities"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>

        <div className="relative z-10 w-full max-w-md p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
          <h1 className="text-center text-3xl font-extrabold text-amber-500 drop-shadow-lg mb-6">
            Login
          </h1>
          <form className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="mb-2 font-medium text-gray-200"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="border border-white/30 bg-white/10 text-white placeholder-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
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
                placeholder="Enter your password"
                className="border border-white/30 bg-white/10 text-white placeholder-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-center gap-x-8 items-center">
              <label className="flex items-center gap-x-2 text-gray-200">
                <input
                  type="radio"
                  name="role"
                  value="user"
                  className="accent-blue-500"
                />
                User
              </label>
              <label className="flex items-center gap-x-2 text-gray-200">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="accent-blue-500"
                />
                Recruiter
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-md shadow-lg transform hover:scale-[1.02] transition duration-300"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-blue-400 hover:underline font-medium"
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
