import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert, Container, Slide } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../userContext';

const Login = () => {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const login = async () => {
    try {
      let { data } = await axios.post(
        'https://machao-backend.herokuapp.com/login',
        {
          email,
          password,
        }
      );
      console.log(data);
      setStatus(data.status);
      setIsSubmitting(false);

      const user = data.result;
      dispatch({ type: 'LOGIN', user: user });

      setErrorMessage(data.message);
      if (data.status === true) navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email === '') {
      setEmailError(true);
    }

    if (password === '') {
      setPasswordError(true);
    }

    if (email && password) {
      console.log('logged in:', email, password);
      setIsSubmitting(true);
      login();
    }
  };

  return (
    <div className='full-height flex justify-center align-center'>
      <Container>
        {!status ? (
          <Slide
            direction='left'
            in={errorMessage.length > 0}
            mountOnEnter
            unmountOnExit
            sx={{
              '& > :not(style)': { m: '8px 0' },
              maxWidth: '360px',
              margin: '0 auto',
            }}
          >
            <Alert severity='error'> {errorMessage}</Alert>
          </Slide>
        ) : (
          ''
        )}
        <h2 className='text-center'>Login Form </h2>
        <Box
          component='form'
          sx={{
            '& > :not(style)': { m: '8px 0' },
            maxWidth: '360px',
            margin: '0 auto',
          }}
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <TextField
            value={email}
            id='outlined-basic-1'
            label='Email'
            variant='outlined'
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            error={emailError}
          />
          <TextField
            value={password}
            id='outlined-basic-2'
            label='Password'
            type='password'
            variant='outlined'
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            error={passwordError}
          />
          <Button type='submit' variant='contained' fullWidth>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
          <p>
            Not a member yet? <Link to='/signup'>Signup</Link>
          </p>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
