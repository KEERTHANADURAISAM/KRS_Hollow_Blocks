import React from "react";
import { motion } from "framer-motion";

const products = [
  { name: "Hollow Blocks", image: "/block-removebg-preview.png" },
  { name: "Molded Rings", image: "/mold_rings-removebg-preview.png" },
  { name: "Molded Pillars", image: "/pngtree-white-roman-pillar-building-png-image_13539431.png" },
  { name: "Paver Blocks", image: "/paver-removebg-preview.png" },
];

const ProductCard = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px 20px",
        backgroundColor: "#0D0D1F",
      }}
    >
      <h2 style={{ color: "wheat", marginBottom: "30px", fontSize: "2rem" }}>
        Our Products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
          justifyContent: "center",
          padding: "10px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
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
            <h3
              style={{
                marginTop: "12px",
                fontSize: "1.2rem",
                color: "wheat",
              }}
            >
              {product.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
