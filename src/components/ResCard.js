import React from "react";
import logo from "../images/food.jpeg";

const ResCard = ({ resData }) => {
  return (
    <div className="bg-white text-gray-800 w-52 p-4 rounded-lg text-center shadow-md transition-transform transform hover:-translate-y-1 hover:border hover:border-gray-300">
      <img src={logo} alt="Restaurant" className="w-full rounded-md mb-3" />
      <h4 className="font-bold text-lg">{resData.name}</h4>
      <p className="text-yellow-500 font-semibold">Rating: {resData.rating}</p>
      <p className="text-gray-500">Delivery Time: {resData.deliveryTime} mins</p>
    </div>
  );
};

export const PromotedResCard = (ResCard) => {
  return (props) => {
    return (
      <div className="relative">
        {/* Promoted label */}
        <label className="absolute top-0 left-0 bg-black text-white m-2 p-2 rounded-lg z-10">
          Promoted
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
