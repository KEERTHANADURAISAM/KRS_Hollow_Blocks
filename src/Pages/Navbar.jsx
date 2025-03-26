import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["Home", "About", "Products", "Gallery", "Testimonials", "Contact"];
const products = ["Block 1", "Block 2", "Block 3", "Block 4"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProductsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#0D0D1F", padding: "10px 0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Brand Name with Logo Effect */}
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontFamily: "'Playfair Display', serif", // Unique font
            fontSize: "1.8rem",
            letterSpacing: "2px",
          }}
        >
          KRS Hollow Blocks
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 ,fontFamily:'Montserrat, sans-serif'}}>
          {navItems.map((item) => (
            item === "Products" ? (
              <Button
                key={item}
                sx={{ color: "#ffffff", fontSize: "1rem", textTransform: "none" }}
                onClick={handleProductsClick}
              >
                {item}
              </Button>
            ) : (
              <Button key={item} sx={{ color: "#ffffff", fontSize: "1rem", textTransform: "none" }}>
                {item}
              </Button>
            )
          ))}
        </Box>

        {/* Products Dropdown */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          {products.map((product) => (
            <MenuItem key={product} onClick={handleClose}>{product}</MenuItem>
          ))}
        </Menu>

        {/* Mobile Menu Button */}
        <IconButton sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }} onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 200 }}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton onClick={() => setOpen(false)}>{item}</ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
