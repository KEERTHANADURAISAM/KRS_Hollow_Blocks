import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import image1 from "/30073.jpg";

const About = () => {
    console.log("Image Path:", image1);

  return (
    <Box sx={{ width: "100%", py: { xs: 5, md: 10 }, px: 3, textAlign: "center" }}>
      <Grid container spacing={4} alignItems="center">
         {/* Right - Text Content */}
         <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              color: "wheat",
            }}
          >
            About KRS Hollow Blocks
          </Typography>

          <Typography variant="body1" mt={2} sx={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}>
            We specialize in high-quality hollow blocks, delivering durable and sustainable solutions
            for construction projects. Our mission is to provide reliable materials that stand the test of time.
          </Typography>

          <Button
            sx={{
              mt: 3,
              px: 4,
              py: 1.5,
              backgroundColor: "#6278FE",
              color: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              letterSpacing: 1,
              "&:hover": {
                backgroundColor: "#5DA0FB",
              },
            }}
          >
            Learn More
          </Button>
        </Grid>
        {/* Left - Image/Video */}
        <Grid item xs={12} md={6}>
        <img src="/30073.jpg" alt="Test Image" width="100" />

        </Grid>

       
      </Grid>
    </Box>
  );
};

export default About;
