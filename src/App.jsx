import { useState } from 'react'
import './App.css'
import Button from "./components/Button"
import Navbar from "./components/navbar/Navbar"
import HeroSection from './components/home/HeroSection'

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <HeroSection />
      </div>
    </>
  )
}

export default App
