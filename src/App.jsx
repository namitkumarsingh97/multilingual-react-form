import React from "react";
import "./App.css";
import LanguageSelector from "./components/LanguageSelector.jsx";
import Content from "./components/Content.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <div className="App">
      <h2>Multilingual Component in React</h2>
      <LanguageSelector />
      <Content />
      <Sidebar />
    </div>
  );
}

export default App;
