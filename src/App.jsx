import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home"
import UserTable from "./components/userTable/UserTable"
import Cards from "./components/cards/Cards";
import './App.css';

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <Router>
        <div className={`container ${theme}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cards" element={<Cards />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
