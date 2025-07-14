import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Badge,
  InputBase,
  Paper
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import logo from '../component/assets/logo.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Feedback', path: '/feedback' },
  { label: 'Contact Us', path: '/contact-us' },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // You can navigate or filter products here
      console.log('Search:', searchQuery);
      // Example: navigate(`/products?search=${searchQuery}`);
    }
  };

  return (
    <>
      <AppBar position="sticky" color="default" elevation={3}>
        <Toolbar sx={{ justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>

          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/">
              <img src={logo} alt="Logo" style={{ height: 100 }} />
            </Link>
          </Box>

          {/* Search Bar - Desktop Only */}
          {!isMobile && (
            <Paper
              component="form"
              onSubmit={handleSearch}
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: 360,
                px: 1,
                borderRadius: 2,
                backgroundColor: '#f1f1f1'
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Shoes..."
                inputProps={{ 'aria-label': 'search shoes' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <IconButton type="submit" sx={{ p: 1 }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          )}

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  component={Link}
                  to={link.path}
                  color="inherit"
                >
                  {link.label}
                </Button>
              ))}
              <IconButton component={Link} to="/cart" color="inherit">
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.path} component={Link} to={link.path}>
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
            <ListItem button component={Link} to="/cart">
              <ListItemText primary="Cart" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
