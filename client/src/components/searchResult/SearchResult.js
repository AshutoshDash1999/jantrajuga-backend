import React, { useState } from "react";

const SearchResult = () => {
  const [result, setResult] = useState([]);
  return (
    <>
      <div className="w-3/4 flex justify-center flex-col items-center content-center m-auto">
        {result.map((item) => {
          return (
            <div className="bg-gray-200 my-2 mx-4 p-3 rounded-md w-1/2">
              <h2>{item.name}</h2>
              <h3>{item.price}</h3>
              <p>Vendor name, 2km away from you</p>
              <p>Delivery expected time: 2hour</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchResult;
