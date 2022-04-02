import {
  Container,
  TextField,
  Stack,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./navbar.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../userContext";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { user, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log(user);
    dispatch({ type: "LOGOUT" });
    console.log(user);
    navigate("/");
  };

  return (
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
                style={{ marginRight: "1rem", width:"100%" }}
                id="standard-basic"
                label="Search item"
                variant="filled"
              />
              <Button variant="contained" style={{padding: " 0.5rem 2.3rem", marginRight: "1rem"}}>Search</Button>
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
  );
};

export default Navbar;
