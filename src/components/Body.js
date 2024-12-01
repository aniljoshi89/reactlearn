import React, { useState } from "react";
import ResCard from "./ResCard";
import { restroList } from "../utility/reslist";
import Banner from "./Banner";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setresList] = useState(restroList);
  const [SearchKey, setSearchKey] = useState("");
  const [isSearching, setIsSearching] = useState(false); // State to control visibility

  return (
    <>
      <Banner />

      <div className="body">
        <div className="filter-buttons-container">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = restroList.filter((res) => res.rating > 4);
              setresList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>

          <div className="search-container">
            <label>
              <input
                style={{ marginRight: 0 }}
                name="search"
                placeholder="Search..."
                onChange={(e) => setSearchKey(e.target.value)}
              />

              <button
                className="filter-btn"
                onClick={() => {
                  const filteredList = restroList.filter((res) =>
                    res.name.toLowerCase().includes(SearchKey.toLowerCase())
                  );
                  setresList(filteredList);
                  setIsSearching(true); // Set searching state to true when search is clicked
                }}
              >
                Search
              </button>
            </label>
          </div>
        </div>

        

        {/* Conditionally render res-filter-btn-container */}
        {!isSearching && (
          <>
          <div
          style={{
            justifyContent: "center",
            marginBottom: "16px",
            display: "flex",
            fontSize: "larger",
            fontWeight: "800",
          }}
        >
          Order Delicious Food
        </div>
          <div className="res-filter-btn-container">
            <div>Veg</div>
            <div>Non veg</div>
            <div>Free Delivery</div>
            <div>Below Rs.300</div>
          </div>
          </>
        )}

        <div className="res-container">
          {resList.length === 0 ? (
            <h1>No restaurants found</h1>
          ) : (
            resList.map((res) => {
              return <Link to={"/restaurants/"+res.id} key={res.id} style={{ textDecoration: "none"}}><ResCard resData={res} /></Link>;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
