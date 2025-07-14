import React, { useEffect, useState } from 'react';
import {
  Box, Button, Card, CardContent, Container, Grid, Typography, CardActions
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';


const StoreDashboard = () => {
  const [storeName, setStoreName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/store/login');
      return;
    }

    try {
      const decoded = jwtDecode(token);
      fetchStoreData(decoded._id, token);
    } catch (err) {
      console.error('Invalid token:', err);
      navigate('/store/login');
    }
  }, [navigate]);

  const fetchStoreData = async (storeId, token) => {
    try {
      const res = await fetch(`https://oneshoemart-server.onrender.com/api/store/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setStoreName(data.store_name);
      } else {
        console.error('Failed to fetch store data');
        navigate('/store/login');
      }
    } catch (error) {
      console.error('Error fetching store data:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/store/login');
  };

  const cards = [
    {
      title: 'View Products',
      desc: 'See all products listed by you.',
      link: '/products',
    },
    {
      title: 'Manage Shoes',
      desc: 'Add, edit, or delete shoes.',
      link: '/addshoe',
    },
    {
      title: 'Customer Feedbacks',
      desc: 'See what your customers are saying.',
      link: '/feedbacks',
    }
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4">Welcome, {storeName || 'Store'} 👋</Typography>
        <Button variant="outlined" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Box>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.title}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>{card.title}</Typography>
                <Typography variant="body2">{card.desc}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => navigate(card.link)}>
                  Open
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default StoreDashboard;
