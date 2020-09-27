import React from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager 1.0" />
      <div className="container">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
