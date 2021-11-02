import React, { useState } from "react";
import "./App.css";
import DisplayTab from "./components/DisplayTab";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  return (
    <div className="App">
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <DisplayTab currentTab={currentTab} />
      <Footer />
    </div>
  );
}

export default App;
