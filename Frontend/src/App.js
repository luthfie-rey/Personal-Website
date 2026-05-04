import React from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}

export default App;