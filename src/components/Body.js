import React, { useState } from "react";
import ResCard, { PromotedResCard } from "./ResCard";
import { restroList } from "../utility/reslist";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState(restroList);
  const [searchKey, setSearchKey] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const onlineStatus = useOnlineStatus();
  const PromotedLabel = PromotedResCard(ResCard); // The PromotedLabel should wrap the ResCard component

  if (!onlineStatus) {
    return (
      <h1 className="text-center text-red-500">
        Oops!! Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

  return (
    <>
      <Banner />

      <div className="p-5">
        <div className="flex justify-between items-center mb-5">
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md"
            onClick={() => {
              const filteredList = restroList.filter((res) => res.rating > 4);
              setResList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 text-base w-52 rounded-md border border-gray-300"
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded-md"
              onClick={() => {
                const filteredList = restroList.filter((res) =>
                  res.name.toLowerCase().includes(searchKey.toLowerCase())
                );
                setResList(filteredList);
                setIsSearching(true);
              }}
            >
              Search
            </button>
          </div>
        </div>

        {!isSearching && (
          <>
            <div className="text-center text-xl font-bold mb-4">
              Order Delicious Food
            </div>
            <div className="flex justify-center gap-4">
              <div className="p-4 text-center w-36 rounded-full border border-gray-800 cursor-pointer hover:bg-yellow-500 hover:text-white">
                Veg
              </div>
              <div className="p-4 text-center w-36 rounded-full border border-gray-800 cursor-pointer hover:bg-yellow-500 hover:text-white">
                Non-Veg
              </div>
              <div className="p-4 text-center w-36 rounded-full border border-gray-800 cursor-pointer hover:bg-yellow-500 hover:text-white">
                Free Delivery
              </div>
              <div className="p-4 text-center w-36 rounded-full border border-gray-800 cursor-pointer hover:bg-yellow-500 hover:text-white">
                Below ₹300
              </div>
            </div>
          </>
        )}

        <div className="flex flex-wrap justify-between gap-5 mt-5">
          {resList.length === 0 ? (
            <h1 className="text-center text-gray-500">No restaurants found</h1>
          ) : (
            resList.map((res) => (
              <Link
                to={`/restaurants/${res.id}`}
                key={res.id}
                className="text-decoration-none"
              >
                {res.promoted ? (
                  <PromotedLabel resData={res} /> // Correctly pass the `resData` prop
                ) : (
                  <ResCard resData={res} />
                )}
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
