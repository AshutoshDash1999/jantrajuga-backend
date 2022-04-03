import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import SearchResult from './components/searchResult/SearchResult';
// import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Vlogin from './components/vendor/login';
import Vsignup from './components/vendor/signup';
import Vaddproduct from './components/vendor/AddProduct';
import Product_spec from './components/buypage/buypage'
import { useReducer } from 'react';
import { UserContext } from './userContext';
import VendorProductList from './components/vendor/VendorProductList';
import GangotriHandlooms from './components/vendorProductListings.js/GangotriHandlooms/GangotriHandlooms';
import GaddaElectronics from "./components/vendorProductListings.js/GaddaElectronics/GaddaElectronics"
import SearchQueryResult from './components/searchResult/searchQueryResult';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const reducer = (state, { type, user }) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default function App() {
  const [user, dispatch] = useReducer(reducer, initialState);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocationInfo, handleLocationError);
  }
  
  function displayLocationInfo(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    console.log(`longitude: ${ lng } | latitude: ${ lat }`);
  }

  function handleLocationError(){
    alert("We use your location info to show personlized content, which will be helpful for effective use of our service. Please change your setting to enable geo olocation")
  }

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      <Router>
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/vendor/signup' element={<Vsignup />} />
          <Route path='/vendor/login' element={<Vlogin />} />
          <Route path='/vendor/addProduct' element={<Vaddproduct/>} />
          <Route path="/searchResult" element={<SearchResult/>} />
          <Route path="/searchQueryResult" element={<SearchQueryResult/>} />
          <Route path="/buypage" element={<Product_spec/>}/>
          <Route path="/vendorProductList/:vendorId" element={<VendorProductList/>}/>
          <Route path='./GangotriHandlooms' element={<GangotriHandlooms/>}/>
          <Route path="./GaddaElectronics" element={<GaddaElectronics/>}/>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </UserContext.Provider>
  );
}
