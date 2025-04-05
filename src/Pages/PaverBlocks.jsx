import React from "react";
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Card, CardContent } from "@mui/material";

const paverBlocks = [
  { name: "Standard Paver Block", thickness: "60mm", usage: "Pedestrian pathways, light traffic areas", color: "Natural Grey, Red, Yellow" },
  { name: "Heavy-Duty Paver Block", thickness: "80mm", usage: "Driveways, moderate vehicular traffic", color: "Grey, Red, Yellow" },
  { name: "Industrial Paver Block", thickness: "100mm", usage: "Industrial yards, heavy-duty areas", color: "Customizable" },
];

const PaverBlocks = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Paver Blocks</Typography>
      <Typography variant="body1" gutterBottom>
        Explore our range of durable and aesthetically appealing paver blocks suitable for various applications.
      </Typography>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Product</b></TableCell>
              <TableCell><b>Thickness</b></TableCell>
              <TableCell><b>Usage</b></TableCell>
              <TableCell><b>Available Colors</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paverBlocks.map((block, index) => (
              <TableRow key={index}>
                <TableCell>{block.name}</TableCell>
                <TableCell>{block.thickness}</TableCell>
                <TableCell>{block.usage}</TableCell>
                <TableCell>{block.color}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom style={{ marginTop: "20px" }}>Installation Guidelines</Typography>
      <ul>
        <li>Excavate and prepare the site with a stable base.</li>
        <li>Lay a compacted layer of crushed stone or gravel.</li>
        <li>Apply sand bedding for a level surface.</li>
        <li>Install paver blocks in the desired pattern.</li>
        <li>Compact the pavers and fill joints with sand.</li>
      </ul>
    </Container>
  );
};

export default PaverBlocks;
