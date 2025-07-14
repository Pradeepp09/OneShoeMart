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

const UserLogin = () => {
  const [user_email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE}/api/user/login`, { user_email, password });
      alert('Login successful');
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (error) {
      alert(error.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          User Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate autoComplete="off">
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            value={user_email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default UserLogin;
