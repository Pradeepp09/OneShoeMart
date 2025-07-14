import React, { useEffect, useState } from 'react';
import {
  Container, Grid, Card, CardMedia, CardContent, Typography, CircularProgress
} from '@mui/material';

const ShoeList = () => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/shoes');
        const data = await response.json();
        setShoes(data);
      } catch (error) {
        console.error('❌ Failed to fetch shoes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShoes();
  }, []);

  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', mt: 5 }}>
        <CircularProgress />
        <Typography>Loading shoes...</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {shoes.map((shoe) => (
          <Grid item xs={12} sm={6} md={4} key={shoe._id}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                width="200px"
                image={shoe.shoeImage}
                alt={shoe.model}
              />
              <CardContent>
                <Typography variant="h6">{shoe.brand} - {shoe.model}</Typography>
                <Typography variant="body2">Gender: {shoe.gender}</Typography>
                <Typography variant="body2">Type: {shoe.type}</Typography>
                <Typography variant="body2">Price: ₹{shoe.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ShoeList;
