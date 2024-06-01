import "./App.css";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";

function App() {
  return (
    <React.StrictMode>
      <>
        <Navbar />
        <Blog />
      </>
    </React.StrictMode>
  );
}

export default App;
