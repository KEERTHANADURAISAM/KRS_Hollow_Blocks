import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import image1 from "/images-removebg-preview.png"; // Ensure correct path
import image2 from "/gallery1.jpg";
import image3 from "/gallery2.jpg";
import image4 from "/gallery3.jpg";
import image5 from "/gallery4.jpg";

const About = () => {
  return (
    <Box>
      {/* About Section */}
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0D0D1F",
          px: 5,
          py: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Column on small screens, row on larger screens
            alignItems: "center",
            maxWidth: "1200px",
            width: "100%",
            gap: 4,
          }}
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ flex: 1, textAlign: "center" }} // Equal width for both sections
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                color: "wheat",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              About KRS Hollow Blocks
            </Typography>

            <Typography
              variant="body1"
              mt={2}
              sx={{
                fontSize: "1.2rem",
                lineHeight: "1.6",
                color: "#ddd",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              We specialize in high-quality hollow blocks, delivering durable and sustainable solutions
              for construction projects. Our mission is to provide reliable materials that stand the test of time.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 3 }}>
              <Button
                sx={{
                  px: 4,
                  py: 1.5,
                  backgroundColor: "#6278FE",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  letterSpacing: 1,
                  "&:hover": { backgroundColor: "#5DA0FB" },
                }}
              >
                Learn More
              </Button>
            </Box>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ flex: 1, display: "flex", justifyContent: "center" }}
          >
           <img
  src={image1}
  alt="Hollow Blocks"
  style={{
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    borderRadius: "10px",
    objectFit: "contain",
  }}
/>

          </motion.div>
        </Box>
      </Box>

      {/* Gallery Section */}
      {/* <Box
        sx={{
          width: "100%",
          backgroundColor: "#181818",
          py: 5,
          px: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "wheat", mb: 3, fontWeight: "bold", textAlign: "center" }}
        >
          Our Gallery
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            maxWidth: "1200px",
            width: "100%",
          }}
        >
          {[image2, image3, image4, image5].map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                component="img"
                src={img}
                alt={`Gallery Image ${index + 1}`}
                sx={{
                  width: { xs: "100%", sm: "48%", md: "30%" }, // Responsive sizing
                  maxWidth: "350px",
                  height: "auto",
                  borderRadius: "10px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                  cursor: "pointer",
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Box> */}
    </Box>
  );
};

export default About;
