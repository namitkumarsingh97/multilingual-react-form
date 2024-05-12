import React from "react";
import "./App.css";
import LanguageSelector from "./components/LanguageSelector.jsx";
import Content from "./components/Content.jsx";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div className="App">
        <h2>{t("header")}</h2>
        <LanguageSelector />
      </div>
      <hr />
      <div>
        <Content />
      </div>
    </>
  );
}

export default App;
