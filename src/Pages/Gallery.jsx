import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Importing 9 images
import image1 from "/gallery1.jpg";
import image2 from "/gallery2.jpg";
import image3 from "/gallery3.jpg";
import image4 from "/gallery4.jpg";
import image5 from "/gallery5.jpg";
import image6 from "/gallery6.jpg";
import image7 from "/gallery7.jpg";
import image8 from "/gallery8.jpg";
import image9 from "/gallery9.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const Gallery = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "black",
            mb: 4,
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { xs: "1.8rem", sm: "2.2rem" },
          }}
        >
          Our Gallery
        </Typography>
      </motion.div>

      {/* Responsive Grid Layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)", // 🔹 Single column on mobile
            sm: "repeat(2, 1fr)", // 🔹 Two columns on small screens
            md: "repeat(3, 1fr)", // 🔹 Three columns on medium & larger screens
          },
          gap: 3,
          maxWidth: "1100px",
          width: "100%",
          px: 2,
        }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }} // Smooth hover effect
          >
            <Box
              component="img"
              src={src}
              alt={`Gallery Image ${index + 1}`}
              sx={{
                width: "100%",
                height: "auto",
                aspectRatio: "4/3", // Balanced image ratio
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
              }}
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Gallery;
