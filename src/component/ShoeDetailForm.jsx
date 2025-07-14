import React, { useState } from 'react';
import {
  Box, Button, Container, MenuItem, Select, TextField, Typography,
  InputLabel, FormControl, Grid, CircularProgress, Paper
} from '@mui/material';

const ShoeDetailForm = () => {
  const brands = [
    "Nike", "Adidas", "Puma", "New Balance", "Skechers", "Reebok",
    "Converse", "Asics", "Vans", "Timberland", "Gucci", "Balenciaga", "Louis Vuitton", "Prada", "Versace",
    "Under Armour", "Fila", "Brooks", "Hoka One One", "Salomon", "Mizuno", "Altra", "Saucony", "La Sportiva",
    "DC Shoes", "Supra", "Etnies", "Globe", "Off-White", "Yeezy",
    "Bata", "Liberty", "Relaxo", "Red Tape", "Woodland", "Campus", "Sparx", "Khadim's", "HRX", "Roadster",
    "Allbirds", "Rothy’s", "Veja", "Cariuma", "On Running"
  ];

  const genders = ["Men", "Women", "Unisex", "Kids"];
  const shoeTypes = [
    "Running Shoes", "Casual Shoes", "Formal Shoes", "Sneakers", "Loafers",
    "Boots", "Sandals", "Slippers", "Walking Shoes", "Training Shoes",
    "Hiking Shoes", "Trekking Shoes", "Basketball Shoes", "Football Shoes", "Tennis Shoes",
    "Golf Shoes", "Slip-Ons", "Derby Shoes", "Oxford Shoes", "Heels",
    "Wedges", "Ballet Flats", "Mules", "Clogs", "Espadrilles",
    "Ethnic Footwear", "Work Safety Shoes", "Waterproof Shoes", "Skateboarding Shoes", "Platform Shoes"
  ];

  const [formData, setFormData] = useState({
    brand: '', model: '', gender: '', type: '', colors: '', price: '', shoeImage: null
  });

  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prev => ({ ...prev, shoeImage: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const data = new FormData();
    data.append('shoeImage', formData.shoeImage);
    data.append('brand', formData.brand);
    data.append('model', formData.model);
    data.append('gender', formData.gender);
    data.append('type', formData.type);
    data.append('colors', formData.colors);
    data.append('price', formData.price);

    try {
      const res = await fetch('http://localhost:5000/api/shoes', {
        method: 'POST',
        body: data,
      });

      if (res.ok) {
        alert('✅ Shoe details submitted successfully!');
        setFormData({
          brand: '', model: '', gender: '', type: '', colors: '', price: '', shoeImage: null
        });
      } else {
        alert('❌ Failed to submit data');
      }
    } catch (error) {
      console.error('Server Error:', error);
      alert('Server error while submitting shoe data');
    } finally {
      setSubmitting(false);
    }
  };

  return (
        <Container maxWidth="md">
      <Paper
        elevation={10}
        sx={{
          mt: 6,
          p: 4,
          borderRadius: 4,
          background: 'linear-gradient(135deg, #ffffffee, #f7f9fb)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold" color="primary">
          Add New Shoe
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>

            {/* Image Upload */}
            <Grid item xs={12}>
              <Button
                variant="outlined"
                component="label"
                fullWidth
                sx={{ py: 1.5, fontWeight: 'bold' }}
                disabled={uploading}
              >
                {uploading ? 'Uploading...' : 'Upload Shoe Image'}
                <input hidden type="file" name="shoeImage" accept="image/*" onChange={handleChange} />
              </Button>
              {formData.shoeImage && (
                <img
                  src={URL.createObjectURL(formData.shoeImage)}
                  alt="Preview"
                  style={{
                    width: '100%',
                    marginTop: 16,
                    borderRadius: 12,
                    objectFit: 'cover',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
              )}
            </Grid>

            {/* Brand */}
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Brand</InputLabel>
                <Select name="brand" value={formData.brand} onChange={handleChange} label="Brand">
                  {brands.map((b) => (
                    <MenuItem key={b} value={b}>{b}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Model */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Gender */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  label="Gender"
                >
                  {genders.map((g) => (
                    <MenuItem key={g} value={g}>{g}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Type */}
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Type</InputLabel>
                <Select name="type" value={formData.type} onChange={handleChange} label="Type">
                  {shoeTypes.map((t) => <MenuItem key={t} value={t}>{t}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>

            {/* Colors */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Colors (comma-separated)"
                name="colors"
                value={formData.colors}
                onChange={handleChange}
                placeholder="Red, Black, White"
                required
              />
            </Grid>

            {/* Price */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Price (INR)"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                inputProps={{ min: 0 }}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                size="large"
                sx={{ py: 1.5, fontWeight: 'bold' }}
                disabled={uploading || submitting}
                endIcon={submitting && <CircularProgress size={20} color="inherit" />}
              >
                {submitting ? 'Submitting...' : 'Submit Shoe'}
              </Button>
            </Grid>

          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default ShoeDetailForm;
