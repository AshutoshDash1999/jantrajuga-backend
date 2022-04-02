import { Container } from '@mui/material';
import Categories from '../categories/Categories';

const Home = () => {
  return (
    <Container> 
      <div className='' style={{height:"80vh"}}>
        <h2>Suggested Categories</h2>
        <Categories/>
      </div>
    </Container>
  );
};

export default Home;
