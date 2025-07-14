import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Box,
  TextField,
  Typography,
  Button
} from '@mui/material';

const StoreSignup = () => {
  const navigate = useNavigate();

  const [storeData, setStoreData] = useState({
    store_name: '',
    store_email: '',
    password: '',
    store_mobile: '',
    store_Address: ''
  });

  const handleChange = (e) => {
    setStoreData({ ...storeData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API_BASE}/api/store/register`,
        storeData
      );
      alert('Signup successful');
      navigate('/store/login');
    } catch (error) {
      alert(error.response?.data?.msg || 'Signup failed');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Store Signup
        </Typography>
        <Box component="form" onSubmit={handleSignup} noValidate autoComplete="off">
          <TextField
            fullWidth
            margin="normal"
            label="Store Name"
            name="store_name"
            value={storeData.store_name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            name="store_email"
            value={storeData.store_email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            name="password"
            value={storeData.password}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Mobile Number"
            name="store_mobile"
            value={storeData.store_mobile}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Store Address"
            name="store_Address"
            value={storeData.store_Address}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Signup
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default StoreSignup;
