import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import VendorProductList from "../../components/vendor/VendorProductList";
import { Navigator, useNavigate, useParams } from "react-router-dom";

import store from 'store'

const SuggestedVendor = () => {
  const navigate = useNavigate();
  const [vendorList, setVendorList] = useState([]);
  const [isVendorClicked, setIsVendorClicked] = useState(false);
  const [vendorId, setVendorId] = useState("");
  {
    isVendorClicked && <VendorProductList vendorId={vendorId} />
  }
  store.set('user', { name: vendorId })
  const vendors = async() => {
    try {
      let { data } = await axios.post(
        "https://machao-backend.herokuapp.com/all_vendors"
      );
      console.log(data.result);
      setVendorList(data.result);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    vendors();
  },[])

  return (
    <div className="flex justify-center flex-wrap">
      
      {vendorList.map((item, index) => {
        let rotate = 1;
        rotate *= 75 * index;
        return (
          <div key={index}
           onClick={()=>{
            setVendorId(item.vendorid);
            setIsVendorClicked(true)
            navigate('/searchResult')
           }}
            className="transition ease-in-out delay-550 p-12 m-4 rounded-lg cursor-pointer flex flex-col justify-center items-center flex-auto shadow-md hover:shadow-xl"
            style={{
              background: "rgb(221, 214, 254)",
              filter: `hue-rotate(${rotate}deg)`,
            }}
          >
            <h2 className="text-2xl font-bold text-gray-700">{item.name}</h2>
            
          </div>
        );
      })}
    </div>
  );
};

export default SuggestedVendor;
