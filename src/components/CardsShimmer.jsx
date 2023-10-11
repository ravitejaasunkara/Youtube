import React from "react";

const CardsShimmer = () => {
  const arr = Array(20).fill("");
  return arr.map((item,index) => {
    return (
      <div className="flex flex-wrap gap-2" key={index}>
        <div className="p-2 m-2 w-64 h-64 shadow-lg rounded-lg bg-gray-200">
            <div className="bg-gray-400 rounded-lg w-60 h-32 animate-pulse"></div>
            <div className="bg-gray-400 my-2 w-50 h-8 rounded-lg"></div>
            <div className="bg-gray-400 my-2 w-50 h-8 rounded-lg"></div>
            <div className="bg-gray-400 my-2 w-50 h-6 rounded-lg"></div>
        </div>
      </div>
    );
  });
};

export default CardsShimmer;
