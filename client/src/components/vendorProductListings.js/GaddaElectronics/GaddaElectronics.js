import React, {useState, useEffect} from "react";
import Grid from "@mui/material/Grid";
import store from "store";
import axios from "axios";

const GaddaElectronics = () => {
  const [productList, setProductList] = useState([]);

  const data = store.get("user");
  console.log(data);

  const vendor_product = async () => {
    try {
      let { data } = await axios.post(
        "https://machao-backend.herokuapp.com/specific_products",
        {
          vendorid: "VIJJ3071",
        }
      );
      console.log(data.result);
      setProductList(data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    vendor_product();
  });
  return (
    <>
      <h1>GaddaElectronics</h1>
      <h4>{productList.vendorId}</h4>
      {productList.map(() => {
        return (
          <div>
            <div className="bg-gray-200 my-2 mx-4 p-3 rounded-md w-1/3 h-auto">
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img className="rounded-md h-auto" src={productList.photo} />
                </Grid>
                <Grid item xs={7} className="whitespace-normal">
                  <a className="font-semibold text-xl cursor-pointer">
                    {productList.name}
                  </a>
                  <h3>₹{productList.price}</h3>
                </Grid>
              </Grid>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default GaddaElectronics;