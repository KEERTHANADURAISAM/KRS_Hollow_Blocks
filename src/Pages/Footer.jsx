import React from "react";
import { Box, Typography, Link, Grid, TextField, Button } from "@mui/material";
import { Facebook, Twitter, YouTube, LinkedIn, Phone, Email } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const navItems = ["Home", "About", "Products", "Gallery", "Testimonials", "Contact"];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "white", py: 5, color: "#3A3A57" }}>
      <Grid container spacing={4} justifyContent="center" sx={{ px: 3 }}>
        {/* Company Info */}
        <Grid item xs={12} sm={4} textAlign={{ xs: "center", sm: "left" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontFamily: "Playfair Display, serif" }}
          >
            KRS Hollow Blocks
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            A108 Adam Street, New York, NY 535022
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <Phone fontSize="small" sx={{ mr: 1 }} />
            +91 97900 86894 | +91 99437 17808
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <Email fontSize="small" sx={{ mr: 1 }} />
            sivanesan1992@gmail.com
          </Typography>
        </Grid>

        {/* Useful Links */}
        <Grid item xs={12} sm={2} textAlign={{ xs: "center", sm: "left" }}>
          <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
            Useful Links
          </Typography>
          {navItems.map((item) => (
            <Typography key={item} variant="body2" sx={{ mt: 1 }}>
              <NavLink to={`/${item.toLowerCase()}`} style={{ textDecoration: "none", color: "#3A3A57" }}>
                {item}
              </NavLink>
            </Typography>
          ))}
        </Grid>

        {/* Our Services */}
        <Grid item xs={12} sm={3} textAlign={{ xs: "center", sm: "left" }}>
          <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
            Our Services
          </Typography>
          {["Web Design", "Web Development", "Product Management", "Marketing", "Graphic Design"].map((service) => (
            <Typography key={service} variant="body2" sx={{ mt: 1 }}>
              {service}
            </Typography>
          ))}
        </Grid>

        {/* Newsletter Subscription */}
        <Grid item xs={12} sm={3} textAlign={{ xs: "center", sm: "left" }}>
          <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
            Our Newsletter
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Subscribe to receive updates about our products and services.
          </Typography>
          <Box display="flex" sx={{ mt: 2 }}>
            <TextField variant="outlined" size="small" placeholder="Your email" sx={{ flexGrow: 1, bgcolor: "white", borderRadius: "5px" }} />
            <Button variant="contained" color="error" sx={{ ml: 1, px: 3 }}>
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Separator */}
      <Box mt={4} textAlign="center">
        <hr style={{ width: "80%", margin: "auto", border: "0.5px solid #444" }} />
      </Box>

      {/* Footer Bottom - Social Icons & Copyright */}
      <Grid container justifyContent="center" alignItems="center" gap="3" sx={{ px: { xs: 2, md: 4 }, mt: 3 }}>
        <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="body2" sx={{ fontSize: "14px" }}>
            Designed & Developed by <strong>Keerthana Duraisamy</strong> © 2025
          </Typography>
        </Grid>
       
      </Grid>
    </Box>
  );
};

export default Footer;
