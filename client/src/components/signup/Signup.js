import { Alert, Container, Slide } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contactNum, setContactNum] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');

  const clearFields = () => {
    setUsername('');
    setEmail('');
    setContactNum('');
    setPassword('');
  };

  const signup = async () => {
    try {
      let { data } = await axios.post(
        'https://machao-backend.herokuapp.com/sign_up',
        {
          name: username,
          email,
          contact_num: contactNum,
          password,
        }
      );
      console.log(data);
      setStatus(data.status);

      setIsSubmitting(false);
      setMessage(data.message);
      clearFields();
    } catch (err) {
      setMessage(err.message);
      clearFields();
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    username === '' ? setUsernameError(true) : setUsernameError(false);
    email === '' ? setEmailError(true) : setEmailError(false);
    contactNum === '' ? setContactError(true) : setContactError(false);
    password === '' ? setPasswordError(true) : setPasswordError(false);

    if (username && email && password) {
      console.log(username, password, email, contactNum);
      setIsSubmitting(true);
      signup();
    }
  };

  return (
    <div className='full-height flex justify-center align-center'>
      <Container>
        {!status && (
          <Slide
            direction='left'
            in={message.length > 0}
            mountOnEnter
            unmountOnExit
            sx={{
              '& > :not(style)': { m: '8px 0' },
              maxWidth: '360px',
              margin: '0 auto',
            }}
          >
            {status === true ? (
              <Alert severity='success'>{message}</Alert>
            ) : (
              <Alert severity='error'>{message}</Alert>
            )}
          </Slide>
        )}
        <h2 className='text-center'>Sign Up </h2>
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
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            id='outlined-basic-1'
            label='Name'
            variant='outlined'
            fullWidth
            autoComplete='off'
            error={usernameError}
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id='outlined-basic-2'
            label='Email'
            variant='outlined'
            fullWidth
            error={emailError}
          />
          <TextField
            onChange={(e) => setContactNum(e.target.value)}
            value={contactNum}
            id='outlined-basic-3'
            label='Mobile'
            variant='outlined'
            fullWidth
            error={contactError}
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id='outlined-basic-4'
            label='Password'
            type='password'
            variant='outlined'
            fullWidth
            error={passwordError}
          />
          <br />
          <Button type='submit' variant='contained' fullWidth>
            {isSubmitting ? 'Signing up...' : 'Signup'}
          </Button>
          <p>
            Existing User? <Link to='/login'>Login</Link>
          </p>
        </Box>
      </Container>
    </div>
  );
};

export default Signup;
