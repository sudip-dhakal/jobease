import React from "react";
import Navbar from "../Reusable/Navbar";
import Background from "../Reusable/Background";

const Profile = () => {
  return (
    <>
      <div className="fixed inset-0">
        <Background />
      </div>
      <Navbar />

      <div className="mx-10 relative">
        <div className="bg-gray-800/95 min-h-full min-w-screen py-5 mt-4 text-white rounded-lg px-5">
          hello
        </div>
      </div>
    </>
  );
};

export default Profile;
