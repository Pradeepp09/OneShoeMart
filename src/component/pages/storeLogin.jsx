import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper
} from '@mui/material';

const StoreLogin = () => {
  const [store_email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE}/api/store/login`,
        { store_email, password }
      );

      alert('Login successful');
      localStorage.setItem('token', res.data.token);
      navigate('/store/dashboard');
    } catch (error) {
      console.error('Login Error:', error);
      alert(error.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Store Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate autoComplete="off">
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            name="store_email"
            value={store_email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default StoreLogin;
