import React, { createContext, useState, useEffect } from "react";
import { translations } from "../data/mock";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved);
  }, []);

  const changeLang = (l) => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  const t = translations[lang];

  const pick = (obj) => obj?.[lang] || "";

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t, pick }}>
      {children}
    </LanguageContext.Provider>
  );
};