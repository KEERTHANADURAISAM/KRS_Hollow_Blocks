import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { Facebook, Twitter, YouTube, LinkedIn } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const navItems = ["Home", "About", "Products", "Gallery", "Testimonials", "Contact"];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#0D0D1F", py: 2, borderTop: "1px solid #ddd",color:"white" }}>
      {/* Logo */}
      <Box textAlign="center" mb={1}>
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1.4rem", fontFamily: "Playfair Display, serif" }}>
          KRS Hollow Blocks
        </Typography>
      </Box>

      {/* Navigation Links */}
      <Box display="flex" justifyContent="center" gap={3}>
        {navItems.map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1rem",
              fontFamily: "Montserrat, sans-serif",
              position: "relative",
              color:"white"
            }}
          >
            {item}
            <Box
              sx={{
                position: "absolute",
                bottom: -2,
                left: "25%",
                width: "50%",
                height: "2px",
                backgroundColor: "black",
                transition: "0.3s",
                transform: "scaleX(0)",
              }}
              className="hover-line"
            ></Box>
          </NavLink>
        ))}
      </Box>

      {/* Thin Separator */}
      <Box mt={2} mb={1} textAlign="center">
        <hr style={{ width: "80%", margin: "auto", border: "0.5px solid #ddd" }} />
      </Box>

      {/* Copyright & Social Icons */}
      <Box display="flex" justifyContent="space-between" alignItems="center" px={3}>
      <p style={{ textAlign: "center", fontSize: "14px", color: "white", marginTop: "20px" }}>
          Designed & Developed by <strong>Keerthana Duraisamy</strong> © 2025
        </p>
        <Box display="flex" gap={2}>
          <Link href="#" color="inherit"><Facebook /></Link>
          <Link href="#" color="inherit"><Twitter /></Link>
          <Link href="#" color="inherit"><YouTube /></Link>
          <Link href="#" color="inherit"><LinkedIn /></Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
