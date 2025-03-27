import React from "react";

const products = [
  { name: "Hollow Blocks", image: "/hollow-blocks.jpg" },
  { name: "Molded Rings", image: "/molled-ring-pillar.jpg" },
  { name: "Molded Pillars", image: "/molled-ring-pillar.jpg" },
  { name: "Paver Blocks", image: "/paver-blocks.jpg" },
];

const ProductCard = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px" }}>
      {products.map((product, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#f5f5f5",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            width: "200px",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", height: "150px", borderRadius: "10px", objectFit: "cover" }}
          />
          <h3 style={{ marginTop: "10px", fontSize: "18px" }}>{product.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
