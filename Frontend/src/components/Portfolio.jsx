import React from "react";
import SideMenu from "./SideMenu";
import Sections from "./Sections";
import WhatsAppButton from "./WhatsAppButton";

const Portfolio = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideMenu />
      <main style={{ padding: "40px", flex: 1 }}>
        <Sections />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Portfolio;