import React, { useState } from "react";
import i18n from "../i18n";
import "../App.css";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.jsx file.

  function chooseLanguage(e) {
    e.preventDefault();
    i18n.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  }

  return (
    <select
      defaultValue={selectedLanguage}
      onChange={chooseLanguage}
      className="language_selector"
    >
      <option value="ar">عربي</option>
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="de">Deutsch</option>
      <option value="hi">हिंदी</option>
      <option value="kn">ಕನ್ನಡ</option>
      <option value="mr">मराठी</option>
      <option value="it">Italiano</option>
      <option value="ja">日本語</option>
      <option value="te">తెలుగు</option>
      <option value="ur">اردو</option>
    </select>
  );
};

export default LanguageSelector;
