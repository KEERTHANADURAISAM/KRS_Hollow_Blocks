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
          sx={{ color: "black", mb: 3, fontWeight: "bold", textAlign: "center" }}
        >
          Our Gallery
        </Typography>
      </motion.div>

      {/* 3x3 Grid Layout with slightly increased image size */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)", // 2 columns on small screens
            sm: "repeat(3, 1fr)", // 3 columns on medium & large screens
          },
          gap: 3,
          maxWidth: "1100px", // Increased max width
          width: "100%",
          px: 2,
        }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.07 }} // Increased hover effect slightly
          >
            <Box
              component="img"
              src={src}
              alt={`Gallery Image ${index + 1}`}
              sx={{
                width: "100%",
                height: "auto",
                aspectRatio: "16/10", // Slightly wider aspect ratio
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)", // Enhanced shadow
                cursor: "pointer",
              }}
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Gallery;
