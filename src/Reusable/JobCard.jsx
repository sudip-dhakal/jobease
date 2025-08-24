import React, { useState } from "react";
import FullCardModal from "./FullCardModal";

const JobCard = () => {
  const [cardModal, setCardModal] = useState(false);
  return (
    <>
      <div className="text-white border w-[30%] border-gray-700 rounded-xl p-6 bg-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center ">
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border-2 border-amber-500 overflow-hidden">
              <img
                src="/jobimg.jpg"
                alt="Job"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-3">
            <h2 className="text-white font-bold text-3xl md:text-xl">
              Product Designer
            </h2>
          </div>
          <svg
            onClick={() => setCardModal(true)}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-arrow-up-right-circle-fill cursor-pointer hover:text-yellow-400 duration-300"
            viewBox="0 0 16 16"
          >
            <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
          </svg>
        </div>

        <div className="mt-5">
          <div className="flex gap-x-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="yellow"
              className="bi bi-dot"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            </svg>
            <p>Infotech Pokhara</p>
          </div>
          <div className="flex gap-x-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="yellow"
              className="bi bi-dot"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            </svg>
            <p>Pokhara</p>
          </div>
        </div>
      </div>
      {cardModal && <FullCardModal setCardModal={setCardModal} />}
    </>
  );
};

export default JobCard;
