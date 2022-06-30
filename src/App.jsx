import "./styles/App.css";
import About from "./pages/About";
import Header from "./components/header/Header";
import House from "./pages/House";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

function App() {
  const location = useLocation();
  const path = location.pathname;
  const [darkMode,setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) ?? false)

  const setDarkModeToggle = ()=>{
    setDarkMode(!darkMode)
  }

  useEffect(()=>{
    localStorage.setItem('darkMode',JSON.stringify(darkMode))
  },[darkMode])
  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <div className="AppMain">
      {path !== "/not_found" ? (
      <Header path={path} darkMode={darkMode} setDarkModeToggle={setDarkModeToggle} />
      ): ""}
      <Routes>
        <Route path="/" element={<House darkMode={darkMode} />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/not_found" element={<NotFound/>}/>
        <Route path="*" element={<Navigate to="/not_found"/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;