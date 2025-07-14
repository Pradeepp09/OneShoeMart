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

const UserSignup = () => {
  const [user, setUser] = useState({
    user_name: '',
    user_email: '',
    password: '',
    user_mobile: '',
    user_Address: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE}/api/user/register`,
         user);
      alert('Signup successful');
      navigate('/user/login');
    } catch (error) {
      alert(error.response?.data?.msg || 'Signup failed');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          User Signup
        </Typography>
        <Box component="form" onSubmit={handleSignup} noValidate autoComplete="off">
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="user_name"
            value={user.user_name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            name="user_email"
            value={user.user_email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Mobile Number"
            name="user_mobile"
            value={user.user_mobile}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Address"
            name="user_Address"
            value={user.user_Address}
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

export default UserSignup;
