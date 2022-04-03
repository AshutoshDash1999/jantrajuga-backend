import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";

const VendorProductList = ({vendorId}) => {
    const [productList, setProductList] = useState([]);

    const vendor_product = async () => {
      try {
        let { data } = await axios.post(
          'https://machao-backend.herokuapp.com/specific_products',
          {
            vendorid: vendorId
          }
        );
        console.log(data.result);
        setProductList(data.result);
      } catch (error) {
        
        console.log(error);
      }
    };
    useEffect(() => {
    vendor_product()
    })
    return(<>
        <h1>Vendor Name</h1>
        <h4>Vendor Id</h4>
        {productList.map(() => {
            return (<div>
                <div className="bg-gray-200 my-2 mx-4 p-3 rounded-md w-1/3 h-auto">
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img className="rounded-md h-auto" src={productList.photo}/>
                </Grid>
                <Grid item xs={7} className="whitespace-normal">
                  <a className="font-semibold text-xl cursor-pointer">{productList.name}</a>
                  <h3>₹{productList.price}</h3>
                </Grid>
              </Grid>
            </div>
            </div>)
        })}
    </>)
}

export default VendorProductList;