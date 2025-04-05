import React from "react";
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Card, CardContent } from "@mui/material";

const hollowBlocks = [
  { name: "Standard Hollow Block", size: "400mm x 200mm x 200mm", strength: "7.5, 10, 15 N/mm²", weight: "14 kg" },
  { name: "Lightweight Hollow Block", size: "400mm x 200mm x 200mm", strength: "5, 7.5, 10 N/mm²", weight: "10 kg" },
  { name: "Insulated Hollow Block", size: "400mm x 200mm x 200mm", strength: "7.5, 10 N/mm²", weight: "12 kg" },
];

const relatedProducts = [
  { name: "Eco-Friendly Hollow Block", size: "400mm x 150mm x 200mm", weight: "12 kg" },
  { name: "High-Density Hollow Block", size: "400mm x 250mm x 200mm", weight: "18 kg" },
  { name: "Aerated Concrete Block", size: "600mm x 200mm x 250mm", weight: "8 kg" },
];

const HollowBlocks = () => {
  return (
    <Container sx={{bgcolor:"white"}}>
      <Typography variant="h4" gutterBottom>Our Hollow Block Collection</Typography>
      <Typography variant="body1" gutterBottom>
        Explore our range of durable and high-quality hollow blocks designed for various construction needs.
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Product</b></TableCell>
              <TableCell><b>Size (L x W x H)</b></TableCell>
              <TableCell><b>Compressive Strength</b></TableCell>
              <TableCell><b>Weight</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hollowBlocks.map((block, index) => (
              <TableRow key={index}>
                <TableCell>{block.name}</TableCell>
                <TableCell>{block.size}</TableCell>
                <TableCell>{block.strength}</TableCell>
                <TableCell>{block.weight}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom style={{ marginTop: "20px" }}>Related Products</Typography>
      <Grid container spacing={2}>
        {relatedProducts.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2">Size: {item.size}</Typography>
                <Typography variant="body2">Weight: {item.weight}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HollowBlocks;
