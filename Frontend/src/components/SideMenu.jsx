import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const SideMenu = () => {
  const { setLang } = useContext(LanguageContext);

  return (
    <div style={{ width: "200px", padding: "20px", borderRight: "1px solid #222" }}>
      <button onClick={() => setLang("en")}>EN</button>
      <button onClick={() => setLang("id")}>ID</button>
    </div>
  );
};

export default SideMenu;