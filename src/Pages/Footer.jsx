import React from "react";
import { Container, Grid, Typography, Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#0D0D1F", color: "white", py: 2, borderTop: "1px solid #ddd" }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          {/* Brand Name */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{ fontFamily: "'Playfair Display', serif", fontWeight: "bold", fontSize: "1.5rem" }}
            >
              KRS Hollow Blocks
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
            <Typography variant="body1" sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
              {["Home", "About", "Products", "Contact"].map((text) => (
                <Link
                  key={text}
                  component={RouterLink}
                  to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                  color="inherit"
                  underline="none"
                  sx={{
                    fontSize: "0.9rem",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      display: "block",
                      width: "50%",
                      height: "2px",
                      backgroundColor: "#333",
                      position: "absolute",
                      bottom: "-3px",
                      left: "50%",
                      transform: "translateX(-50%) scaleX(0)",
                      transition: "transform 0.3s ease-in-out",
                    },
                    "&:hover::after": {
                      transform: "translateX(-50%) scaleX(1)",
                    },
                  }}
                >
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={4} sx={{ textAlign: "right" }}>
            <Typography variant="body2" sx={{ fontFamily: "Montserrat, sans-serif" }}>
              📞 97900 86894 | 99437 17808
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Montserrat, sans-serif" }}>
              ✉️ info@krshollowblocks.com
            </Typography>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box textAlign="center" mt={2}>
          <Typography variant="caption" sx={{ fontFamily: "Montserrat, sans-serif", color: "#777" }}>
            &copy; {new Date().getFullYear()} KRS Hollow Blocks. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
