import { Container } from '@mui/material';
import Categories from '../categories/Categories';
import SuggestedVendor from '../categories/SuggestedVendor';
// import HeroCarousal from '../carousal/HeroCarousal';

const Home = () => {
  const services = ["AC Services", "Medical Service", "Car/Bike Services", "Plumber"]
  return (
    <Container> 
      <div className='' style={{height:"80vh"}}>
        {/* <HeroCarousal/> */}
        <h2 className='font-bold text-gray-700 text-2xl underline underline-offset-1'>Suggested Categories</h2>
        <Categories/>
        <h2 className='font-bold text-gray-700 text-2xl underline underline-offset-1'>Suggested Vendors</h2>
        <SuggestedVendor/>
        

      </div>
    </Container>
  );
};

export default Home;
