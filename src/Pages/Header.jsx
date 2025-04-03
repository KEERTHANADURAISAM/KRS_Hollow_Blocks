import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Header = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2, // Padding on sides for better spacing
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source
          src="/mixkit-building-under-construction-in-los-angeles-30431-hd-ready.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      />

      {/* Text Content */}
      <Box
      sx={{
        position: "relative",
        zIndex: 2,
        color: "#fff",
        maxWidth: { xs: "90%", sm: "80%", md: "600px" },
        textAlign: "center",
        px: { xs: 3, sm: 5 },
      }}
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Title */}
      <motion.div variants={textVariants}>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "2.2rem", sm: "2.7rem", md: "3.2rem" },
          }}
        >
          High-Quality Hollow Blocks
        </Typography>
      </motion.div>

      {/* Subheading */}
      <motion.div variants={textVariants}>
        <Typography
          variant="h6"
          mt={2}
          sx={{
            fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.6rem" },
          }}
        >
          Durable | Reliable | Sustainable
        </Typography>
      </motion.div>

      {/* Description */}
      <motion.div variants={textVariants}>
        <Typography
          variant="body1"
          mt={2}
          maxWidth="600px"
          mx="auto"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
            textAlign: "center",
            lineHeight: "1.6",
          }}
        >
          Crafted with precision and high-grade materials, our hollow blocks
          ensure strength and longevity for all construction needs.
        </Typography>
      </motion.div>

      {/* Button */}
      <motion.div variants={buttonVariants} whileHover="hover">
        <Button
          sx={{
            backgroundColor: "#0D0D1F",
            mt: 3,
            px: 3,
            py: 1.5,
            color: "white",
            letterSpacing: 2,
            transition: "0.3s",
            "&:hover": {
              background: "linear-gradient(to right, #6278FE, #5DA0FB)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            },
          }}
        >
          Explore Products
        </Button>
      </motion.div>
    </Box>
    </Box>
  );
};

export default Header;
