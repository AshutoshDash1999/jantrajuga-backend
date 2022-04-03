import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";

const SearchResult = () => {
  const [result, setResult] = useState([]);

  const products = async () => {
    try {
      let { data } = await axios.post(
        "https://machao-backend.herokuapp.com/products"
      );
      console.log(data.result);
      setResult(data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    products();

  })  //   console.log(result);

  return (
    <>
      <div className="flex flex-wrap justify-center m-auto">
        {result.map((item) => {
          return (
            <div className="bg-gray-200 my-2 mx-4 p-3 rounded-md w-1/3 h-auto">
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img className="rounded-md h-auto" src={item.photo}/>
                </Grid>
                <Grid item xs={7} className="whitespace-normal">
                  <a className="font-semibold text-xl cursor-pointer">{item.name}</a>
                  <h3>₹{item.price}</h3>
                  <p>Vendor name, 2km away from you</p>
                  <p>Delivery expected time: 2hour</p>
                </Grid>
              </Grid>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchResult;
