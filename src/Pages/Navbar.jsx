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
import { Link } from "react-router-dom"; // Import Link for routing
import krslogo from '/KRS-removebg-preview.png'

const navItems = ["Home", "About", "Products", "Gallery", "Testimonials", "Contact"];
const products = ["Hollow Blocks", "Molded Rings", "Molded Pillars", "Paver Blocks"];

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
        <Box
  component="img"
  src={krslogo}
  alt="KRS HOLLOW BLOCKS"
  sx={{
    width: { xs: 120, sm: 150, md: 130 }, // Adjust width for different screen sizes
    height: "auto",
    objectFit: "contain",
  }}
/>



 
        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, fontFamily: "Montserrat, sans-serif" }}>
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
              <Button
                key={item}
                component={Link}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                sx={{ color: "#ffffff", fontSize: "1rem", textTransform: "none" }}
              >
                {item}
              </Button>
            )
          ))}
        </Box>

        {/* Products Dropdown */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          {products.map((product) => (
            <MenuItem key={product} component={Link} to={`/products/${product.toLowerCase().replace(/\s+/g, "-")}`} onClick={handleClose}>
              {product}
            </MenuItem>
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
              <ListItemButton component={Link} to={item === "Home" ? "/" : `/${item.toLowerCase()}`} onClick={() => setOpen(false)}>
                {item}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
