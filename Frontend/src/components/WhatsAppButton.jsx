import React from "react";
import { contacts } from "../data/mock";

const WhatsAppButton = () => {
  return (
    <a
      href={contacts.whatsapp.url}
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#25D366",
        color: "white",
        padding: "10px 15px",
        borderRadius: "50px",
        textDecoration: "none",
      }}
    >
      WhatsApp
    </a>
  );
};

export default WhatsAppButton;