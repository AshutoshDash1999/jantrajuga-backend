import { Container } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../../userContext';

const Contact = () => {
  const { user } = useContext(UserContext);
  return (
    <Container>
      <div className='flex justify-center align-center full-height'>
        <div>
          <h1>Contact</h1>
          <p>
            <b>User: </b>
            {user.isAuthenticated ? user.user.name : ' not logged in'}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
