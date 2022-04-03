import React, { useState } from "react";
import Grid from "@mui/material/Grid";

const VendorProductList = () => {
    const [productList, setProductList] = useState([]);
    return(<>
        <h1>Vendor Name</h1>
        <h4>Vendor Id</h4>
        {productList.map(() => {
            return (<div>
                <div className="bg-gray-200 my-2 mx-4 p-3 rounded-md w-1/3 h-auto">
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img className="rounded-md h-auto" src={item.photo}/>
                </Grid>
                <Grid item xs={7} className="whitespace-normal">
                  <a className="font-semibold text-xl cursor-pointer">{item.name}</a>
                  <h3>₹{item.price}</h3>
                </Grid>
              </Grid>
            </div>
            </div>)
        })}
    </>)
}

export default VendorProductList;