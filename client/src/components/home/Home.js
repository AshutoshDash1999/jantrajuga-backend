import React, { useState, useContext, useEffect } from "react";
import Categories from "../categories/Categories";
import SuggestedVendor from "../categories/SuggestedVendor";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import {
  Container,
  TextField,
  Stack,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../userContext";
import axios from "axios";

const Home = () => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [isTrue, setIsTrue] = useState(true);
  const [queryResultList, setQueryResultList] = useState([]);
  const [queryInput, setQueryInput] = useState("");

  var searchQuery = async () => {
    try {
      const { data } = await axios.post(
        "https://machao-backend.herokuapp.com/search_products",
        {
          name: queryInput,
        }
      );
      console.log(data.result);
      setQueryResultList(data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const [address, setAddress] = useState("");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocationInfo, handleLocationError);
  }
  
  function displayLocationInfo(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    setLat(lat)
    setLon(lng)
    console.log(`longitude: ${ lng } | latitude: ${ lat }`);
  }

  function handleLocationError(){
    alert("We use your location info to show personlized content, which will be helpful for effective use of our service. Please change your setting to enable geo olocation")
  }
  var getAddress = async (lat, lon) => {
    try {
      var { data } = await axios.get(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}1&longitude=${lon}&localityLanguage=en`
      );

      console.log(data);
      setAddress(data);
    } catch (err) {
      console.log(err);
    }
  };

  getAddress(lat, lon);

  useEffect(() => {
    searchQuery();
  });

  const services = [
    "AC Services",
    "Medical Service",
    "Car/Bike Services",
    "Plumber",
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { user, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handle = () => {
    localStorage.setItem("Search", search);
  };

  const handleLogout = () => {
    console.log(user);
    dispatch({ type: "LOGOUT" });
    console.log(user);
    navigate("/");
  };

  return (
    <Container>
      <nav>
        <Box
          sx={{
            padding: "24px 0",
            boxShadow: "0 0 10px 0 #ccc",
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Link to="/" className="nav-link">
                <h2 className="logo text-2xl">UtkalMart</h2>
              </Link>
            </Box>
            <Box
              display={isMobile ? "none" : "block"}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* <Link to='/dashboard' className='nav-link'>
              Dashboard
            </Link> */}
              <Stack spacing={1} direction="row">
                <FormControl fullWidth>
                  <InputLabel id="select-category">Select Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value="handloom">Handloom</MenuItem>
                    <MenuItem value="handicraft">Handicraft</MenuItem>
                    <MenuItem value="painting">Painting</MenuItem>
                    <MenuItem value="electronics">Electronics</MenuItem>
                    <MenuItem value="households">Households</MenuItem>
                    <MenuItem value="Furniture">Furniture</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  onChange={(e) => setQueryInput(e.target.value)}
                  onClick={(e) => {
                    handle();
                  }}
                  style={{ marginRight: "1rem", width: "100%" }}
                  id="standard-basic"
                  label="Search item"
                  variant="filled"
                />
                <Button
                  variant="contained"
                  style={{ padding: " 0.5rem 2.3rem", marginRight: "1rem" }}
                  onClick={(e) => {
                    // navigate("/searchQueryResult");
                    setIsTrue(false);
                  }}
                >
                  Search
                </Button>
              </Stack>

              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              {user.isAuthenticated ? (
                <Link to="/logout" className="nav-link" onClick={handleLogout}>
                  Logout
                </Link>
              ) : (
                <>
                  <Link to="/login" className="nav-link">
                    Login/Signup
                  </Link>
                  {/* <Link to="/signup" className="nav-link">
                  Signup
                </Link> */}
                </>
              )}
            </Box>
            {isMobile && <MenuIcon fontSize="large" />}
          </Container>
        </Box>
      </nav>

      <div className="" style={{ height: "80vh" }}>
        {/* <Button variant="filled" onClick={() => setIsTrue(false)}>Click me</Button> */}
        {isTrue ? (
          <div>
            <div className="flex">
              <MyLocationIcon
                sx={{
                  fontSize: 40,
                  verticalAlign: "middle",
                  padding: "5px",
                  margin: "10px 2px",
                }}
              />
              <h3 style={{ verticalAlign: "middle" }}>
                {address.locality}, {address.principalSubdivision}, {address.countryName}
              </h3>
            </div>
            <h2 className="font-bold text-gray-700 text-2xl underline underline-offset-1">
              Suggested Categories
            </h2>
            <Categories />
            <h2 className="font-bold text-gray-700 text-2xl underline underline-offset-1">
              Suggested Vendors
            </h2>
            <SuggestedVendor />
          </div>
        ) : (
          <div>
            {queryResultList.map((item) => {
              return (
                <div className="bg-gray-200 my-2 mx-4 p-3 rounded-md w-1/3 h-auto">
                  <Grid container spacing={2}>
                    <Grid item xs={5}>
                      <img className="rounded-md h-auto" src={item.photo} />
                    </Grid>
                    <Grid item xs={7} className="whitespace-normal">
                      <a className="font-semibold text-xl cursor-pointer">
                        {item.name}
                      </a>
                      <h3>₹{item.price}</h3>
                      <p>Vendor name, 2km away from you</p>
                      <p>Delivery expected time: 2hour</p>
                    </Grid>
                  </Grid>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Home;
