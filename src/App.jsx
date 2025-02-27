import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import UserTable from "./components/userTable/UserTable"
import Cards from "./components/cards/Cards"
import './App.css';

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <Router>
        <div className={`container ${theme}`}>
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<UserTable />} />
            <Route path="/cards" element={<Cards />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
