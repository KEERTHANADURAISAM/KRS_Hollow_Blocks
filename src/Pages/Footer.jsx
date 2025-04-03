import React from "react";
import { Container, Grid, Typography, Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#2C3E50", color: "white", py: 3, mt: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* About Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We provide top-notch services in web and mobile development. 
              Contact us for your next project.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" underline="none" display="block">
              Home
            </Link>
            <Link href="#" color="inherit" underline="none" display="block">
              Services
            </Link>
            <Link href="#" color="inherit" underline="none" display="block">
              Contact
            </Link>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: info@example.com
            </Typography>
            <Typography variant="body2">
              Phone: +123 456 7890
            </Typography>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box textAlign="center" mt={3}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
