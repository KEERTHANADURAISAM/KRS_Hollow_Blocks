import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import image1 from "/images-removebg-preview.png"; // Ensure correct path

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
          px: { xs: 3, sm: 5, md: 8 },
          py: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1200px",
            width: "100%",
            gap: { xs: 3, md: 6 },
          }}
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ flex: 1, textAlign: "center" }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
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
                fontSize: { xs: "1rem", sm: "1.2rem" },
                lineHeight: "1.6",
                color: "#ddd",
                textAlign: { xs: "center", md: "left" },
                maxWidth: "600px",
              }}
            >
              We specialize in high-quality hollow blocks, delivering durable and sustainable solutions
              for construction projects. Our mission is to provide reliable materials that stand the test of time.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, mt: 3 }}>
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
    </Box>
  );
};

export default About;
