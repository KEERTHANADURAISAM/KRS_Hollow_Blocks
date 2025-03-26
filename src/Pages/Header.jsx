import React from "react";
import { Box, Button, Typography } from "@mui/material";

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
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Text Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          color: "#fff",
          maxWidth: { xs: "90%", sm: "80%", md: "600px" }, // More width on mobile
          textAlign: "center",
          px: { xs: 3, sm: 5 }, // More padding on small screens
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "2.2rem", sm: "2.7rem", md: "3.2rem" }, // Bigger text
          }}
        >
          High-Quality Hollow Blocks
        </Typography>

        <Typography
          variant="h6"
          mt={2}
          sx={{
            fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.6rem" },
          }}
        >
          Durable | Reliable | Sustainable
        </Typography>

        <Typography
          variant="body1"
          mt={2}
          maxWidth="600px"
          mx="auto"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" }, // Bigger on mobile
            textAlign: "center", // Properly aligned
            lineHeight: "1.6", // Better spacing
          }}
        >
          Crafted with precision and high-grade materials, our hollow blocks
          ensure strength and longevity for all construction needs.
        </Typography>

        <Button
          sx={{
            backgroundColor: "#0D0D1F",
            mt: 3, // More spacing above button
            px: 3,
            py: 1.5, // Bigger button
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
      </Box>
    </Box>
  );
};

export default Header;
