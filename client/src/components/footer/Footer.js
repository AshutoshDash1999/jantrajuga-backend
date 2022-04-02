import { Container, Link } from '@mui/material';
import './footer.css';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <footer>
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'space-between',
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <div>
            <h2>Machao</h2>
            <p>About Company</p>
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Link
                href='#'
                sx={{
                  color: '#fff',
                  marginRight: '8px',
                }}
              >
                Home
              </Link>
              <Link
                href='#'
                sx={{
                  color: '#fff',
                  marginRight: '8px',
                }}
              >
                About
              </Link>
              <Link
                href='#'
                sx={{
                  color: '#fff',
                  marginRight: '8px',
                }}
              >
                Contact
              </Link>
              <Link
                href='#'
                sx={{
                  color: '#fff',
                  marginRight: '8px',
                }}
              >
                Blog
              </Link>
            </Box>
          </div>
          <div>
            <h2>Contact form</h2>
          </div>
          <div>
            <h2>Social</h2>
            social links here
          </div>
        </Box>
        <div className='text-center'>
          <p>
            Copyright © 2021 <strong>Machao</strong> All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
