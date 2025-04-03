import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import { Facebook, Twitter, YouTube, LinkedIn, Phone, Email } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const navItems = ["Home", "About", "Products", "Gallery", "Testimonials", "Contact"];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#0D0D1F", py: 3, borderTop: "1px solid #ddd", color: "white" }}>
      {/* Logo */}
      <Box textAlign="center" mb={2}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", md: "1.4rem" }, fontFamily: "Playfair Display, serif" }}
        >
          KRS Hollow Blocks
        </Typography>
      </Box>

      {/* Navigation Links */}
      <Grid container justifyContent="center" spacing={2} sx={{ textAlign: "center", mb: 2 }}>
        {navItems.map((item) => (
          <Grid item key={item}>
            <NavLink
              to={`/${item.toLowerCase()}`}
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1rem",
                fontFamily: "Montserrat, sans-serif",
                position: "relative",
                padding: "5px 10px",
                display: "inline-block",
              }}
            >
              {item}
            </NavLink>
          </Grid>
        ))}
      </Grid>

      {/* Separator */}
      <Box mt={2} mb={2} textAlign="center">
        <hr style={{ width: "80%", margin: "auto", border: "0.5px solid #ddd" }} />
      </Box>

      {/* Contact Info */}
      <Grid container justifyContent="center" spacing={3} sx={{ textAlign: "center", mb: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
            <Phone fontSize="small" />
            <Typography variant="body2">+91 97900 86894 | +91 99437 17808</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
            <Email fontSize="small" />
            <Typography variant="body2">info@krshollowblocks.com</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright & Social Icons */}
      <Grid container justifyContent="center" alignItems="center" sx={{ px: { xs: 2, md: 4 } }}>
  <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
    <Typography variant="body2" sx={{ fontSize: "14px", mt: 2 }}>
      Designed & Developed by <strong>Keerthana Duraisamy</strong> © 2025
    </Typography>
  </Grid>
  <Grid item xs={12} md={6}>
    <Box 
      display="flex" 
      justifyContent="center" // Force center alignment
      sx={{
        width: "100%", // Ensure full width
        mt: { xs: 2, md: 0 },
      }}
    >
      <Box display="flex" gap={2}>
        <Link href="#" color="inherit"><Facebook /></Link>
        <Link href="#" color="inherit"><Twitter /></Link>
        <Link href="#" color="inherit"><YouTube /></Link>
        <Link href="#" color="inherit"><LinkedIn /></Link>
      </Box>
    </Box>
  </Grid>
</Grid>

    </Box>
  );
};

export default Footer;
