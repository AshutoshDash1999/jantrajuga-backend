import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Vlogin from './components/vendor/login';
import Vsignup from './components/vendor/signup';
import Vaddproduct from './components/vendor/AddProduct';
import { useReducer } from 'react';
import { UserContext } from './userContext';

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
  return (
    <UserContext.Provider value={{ user, dispatch }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/vendor/signup' element={<Vsignup />} />
          <Route path='/vendor/login' element={<Vlogin />} />
          <Route path='/vendor/addProduct' element={<Vaddproduct/>} />
        </Routes>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}
