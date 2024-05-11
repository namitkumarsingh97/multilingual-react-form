import React, { useState } from "react";
import i18n from "../i18n";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.jsx file.

  function chooseLanguage(e) {
    e.preventDefault();
    i18n.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  }

  return (
    <select defaultValue={selectedLanguage} onChange={chooseLanguage}>
      <option value="en">English</option>
      <option value="de">German</option>
      <option value="hi">Hindi</option>
      <option value="it">Italian</option>
      <option value="ja">Japanese</option>
    </select>
  );
};

export default LanguageSelector;
