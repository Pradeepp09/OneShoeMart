import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
} from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', mt: 6, pt: 4, pb: 2 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
            <Link component={RouterLink} to="/" color="inherit" underline="hover" display="block">
              Home
            </Link>
            <Link component={RouterLink} to="/products" color="inherit" underline="hover" display="block">
              Products
            </Link>
            <Link component={RouterLink} to="/feedback" color="inherit" underline="hover" display="block">
              Feedback
            </Link>
            <Link component={RouterLink} to="/contact-us" color="inherit" underline="hover" display="block">
              Contact Us
            </Link>
            <Link component={RouterLink} to="/addShoe" color="inherit" underline="hover" display="block">
              ADD SHOE
            </Link>
            <Link component={RouterLink} to="/user/login" color="inherit" underline="hover" display="block">
              user login
            </Link>
            <Link component={RouterLink} to="/user/signup" color="inherit" underline="hover" display="block">
              user signup
            </Link>
            <Link component={RouterLink} to="/store/login" color="inherit" underline="hover" display="block">
              store login
            </Link>
            <Link component={RouterLink} to="/store/signup" color="inherit" underline="hover" display="block">
              store signup
            </Link>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Contact Us</Typography>
            <Typography variant="body2">📧 support@oneshoemart.com</Typography>
            <Typography variant="body2">📞 +91 93732 49141</Typography>
          </Grid>

          {/* About */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>About OneShoeMart</Typography>
            <Typography variant="body2">
              OneShoeMart is your go-to online destination for the latest in branded footwear.
              From Nike to Adidas, we deliver comfort, style, and performance to your doorstep.
              Shop top collections and exclusive offers, all in one place.
            </Typography>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 3 }} />

        {/* Bottom bar */}
        <Box textAlign="center">
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} OneShoeMart. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
