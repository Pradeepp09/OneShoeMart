import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import adidas from '../component/assets/adidas_logo.png';
import asic from '../component/assets/asics_logo.png';
import newbalance from '../component/assets/newbalance_logo.png';
import nike from '../component/assets/nike_logo.png';
import puma from '../component/assets/puma_logo.png';
import reebook from '../component/assets/reebok_logo.png';
import skechers from '../component/assets/skechers_logo.png';
import underarmour from '../component/assets/underarmour_logo.png';
import O1 from '../component/assets/O1.jpeg';
import O2 from '../component/assets/O2.jpeg';
import O3 from '../component/assets/O3.jpg';
import O4 from '../component/assets/O4.jpeg';

const Home = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_BASE}/api/shoes`);
        if (!res.ok) throw new Error('Failed to fetch shoes');
        const data = await res.json();
        setShoes(data.slice(0, 6)); // Show top 6 shoes only
      } catch (error) {
        console.error('❌ Error loading shoes:', error);
      }
    };
    fetchShoes();
  }, []);

  return (
    <Box sx={{ px: 4, py: 5 }}>
      
      {/* A. Website Slogan */}
     <Typography
  variant="h3"
  align="center"
  gutterBottom
  sx={{
    fontFamily: "Libre Baskerville ", // You can change this to any imported Google Font
    fontWeight: 700,
    color: '#7d7979ff', // Bold, energetic color
    textShadow: '2px 2px 6px rgba(0,0,0,0.15)',
    letterSpacing: '1.5px',
    lineHeight: 1.2,
  }}
>
 Every Brand. Every Style. OneShoeMart.
</Typography>

      {/* B. Brands Logos */}
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 5, my: 4 }}>
        {/* Replace src with actual brand logo URLs */}
        <img src={nike} alt="Nike" style={{ height: 80 }} />
        <img src={adidas} alt="Adidas" style={{ height: 80 }} />
        <img src={puma} alt="Puma" style={{ height: 80 }} />
        <img src={reebook} alt="Reebok" style={{ height: 80 }} />
        <img src={newbalance} alt="New Balance" style={{ height: 80 }} />
        <img src={asic} alt="Asic" style={{ height: 80 }} />
        <img src={skechers} alt="Skechers" style={{ height: 80 }} />
        <img src={underarmour} alt="Under Armour" style={{ height: 80 }} />
        {/* Add more logos as needed */}
      </Box>

      {/* C. Top Shoes Queue */}
      <Typography variant="h5" gutterBottom>
</Typography>

<Grid container spacing={3}>
  {shoes.map((shoe) => (
    <Grid item xs={12} sm={6} md={4} key={shoe._id}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          image={shoe.shoeImage}
          alt={shoe.model}
          sx={{
            height: 200,
            width: '100%',
            objectFit: 'cover'
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6">
            {shoe.brand} - {shoe.model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ₹{shoe.price} • {shoe.gender} • {shoe.type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to={`/products`}
            size="small"
            variant="outlined"
          >
            View Product
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid>


      {/* D. Discount Offers */}
      <Typography variant="h5" sx={{ mt: 6, mb: 2 }}>
      </Typography>
      <Grid container spacing={6}>
        {/* Sample Offer Images (replace with your real images and links) */}
        <Grid item xs={12} sm={6} md={4}>
          <a href="/products?offer=summer" target="_blank" rel="noopener noreferrer">
            <img src={O1} alt="Offer 1" style={{ height: 200, width: '100%', borderRadius: 8 }} />
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <a href="/products?offer=clearance" target="_blank" rel="noopener noreferrer">
            <img src={O2} alt="Offer 2" style={{ height: 200,width: '100%', borderRadius: 8 }} />
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <a href="/products?offer=flash" target="_blank" rel="noopener noreferrer">
            <img src={O3} alt="Offer 3" style={{height: 200, width: '100%', borderRadius: 8 }} />
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <a href="/products?offer=flash" target="_blank" rel="noopener noreferrer">
            <img src={O4} alt="Offer 3" style={{height: 200, width: '100%', borderRadius: 8 }} />
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
