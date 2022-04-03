import React from "react";
import Header from "./Header";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import "../../styles/general.css";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';

const columns = [
  {
    name: "POCO F3 GT",
    shortSpec: " (Predator Black, 128 GB)  (6 GB RAM)",
    rating: "",
    address: {
      long: "64.1232",
      lat: "45.346",
    },
    price: "",
    offers: [
      "Bank OfferFlat ₹50 Instant Cashback on Paytm Wallet. Min Order Value ₹500. Valid once per Paytm accountT&C",
      "Bank Offer5% Cashback on Flipkart Axis Bank CardT&C,Special PriceGet extra ₹4000 off (price inclusive of discount)T&C",
      "Freebie25% Off on Discovery+ Subscription",
    ],
  },
];

function Product_spec() {
  return (
    <div className="home">
      <Header
        icon={
          <CategoryRoundedIcon sx={{ fontSize: 40, verticalAlign: "middle" }} />
        }
        title="Product Details"
        display={true}
        isThereNotification={true}
      />
      
      <Grid container spacing={3}>
        <Grid
          item
          justifyContent="center"
          direction="column"
          alignItems="center"
          xs={5}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            className="prod_image"
            alt="The house from the offer."
            src="https://rukminim2.flixcart.com/image/416/416/krf91u80/mobile/i/f/m/f3-gt-mzb09huin-poco-original-imag57hec6wkrk77.jpeg?q=70"
          />
        </Grid>
        <Grid item xs={5} >
          <h2>{columns[0].name}</h2><h2>{columns[0].shortSpec}</h2><br></br><br></br>
          {columns[0].offers.map((index) => {
            return <h4 key={index}>{index}</h4>;
          })}
          <div className="operations"><br></br><br></br>
          <Button variant="contained">Buy Now</Button>&nbsp;
          <Button variant="outlined">Add to cart</Button>
          </div>
        </Grid>
        <Grid item xs={1}>
        
        </Grid>
      </Grid>
    </div>
  );
}

export default Product_spec;