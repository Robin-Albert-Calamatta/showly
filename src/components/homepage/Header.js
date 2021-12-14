import React from "react";
import Badge from "../Badge";
import "../homepage/header.css";

function Header() {
  return (
    <div
      style={{ height: "100px", maxHeight: "100px", backgroundColor: "#333" }}
    >
      <Badge />

      <h1>Socialy</h1>
    </div>
  );
}

export default Header;
