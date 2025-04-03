import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, Grid } from "@mui/material";

const products = [
  { name: "Hollow Blocks", image: "/block-removebg-preview.png" },
  { name: "Molded Rings", image: "/mold_rings-removebg-preview.png" },
  { name: "Molded Pillars", image: "/pngtree-white-roman-pillar-building-png-image_13539431.png" },
  { name: "Paver Blocks", image: "/paver-removebg-preview.png" },
];

const ProductCard = () => {
  return (
    <Box sx={{ textAlign: "center", py: 5, backgroundColor: "white" }}>
      {/* Heading */}
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
          color: "#6278FE",
          textAlign: "center",
          mb: 4,
        }}
      >
        Our Products
      </Typography>

      {/* Product Cards */}
      <Grid container spacing={3} justifyContent="center">
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <motion.div
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: "#1A1A2E",
                padding: "20px",
                borderRadius: "15px",
                textAlign: "center",
                boxShadow: "0px 6px 12px rgba(255, 255, 255, 0.2)",
                maxWidth: "320px",
                width: "100%",
                margin: "auto",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  color: "wheat",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                {product.name}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCard;
