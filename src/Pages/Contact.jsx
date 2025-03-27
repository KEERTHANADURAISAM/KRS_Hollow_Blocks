import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0D0D1F",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 5,
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
          maxWidth: "1100px", // Reduced width for better layout
          width: "100%",
        }}
      >
        {/* Left Side - Location */}
        <Box
          sx={{
            backgroundColor: "#1C1C3A",
            padding: 3,
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            📍 Our Location
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            KRS Hollow Blocks,Chathrapatti,Pudhukottai
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            97900 86894 - 99437 17808
          </Typography>
          <iframe
            title="Google Map"
            width="100%"
            height="230"
            frameBorder="0"
            style={{ borderRadius: "10px" }}
            src="https://www.google.com/maps/embed/v1/place?q=New+York&key=YOUR_GOOGLE_MAPS_API_KEY"
            allowFullScreen
          ></iframe>
        </Box>

        {/* Right Side - Contact Form */}
        <Box
          sx={{
            backgroundColor: "#1C1C3A",
            padding: 3,
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            ✉️ Contact Us
          </Typography>

          <TextField
            fullWidth
            label="Your Name"
            variant="standard"
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: {
                color: "white",
                borderBottom: "2px solid white",
              },
            }}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Your Email"
            variant="standard"
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: {
                color: "white",
                borderBottom: "2px solid white",
              },
            }}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Message"
            variant="standard"
            multiline
            rows={4}
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: {
                color: "white",
                borderBottom: "2px solid white",
              },
            }}
            sx={{ mb: 2 }}
          />

          <Button
            variant="contained"
            sx={{
              backgroundColor: "wheat",
              color: "black",
              mt: 2,
              fontWeight: "bold",
              transition: "0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#1C1C3A",
                color: "white",
                letterSpacing: 2,
              },
            }}
            endIcon={<Send />}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
