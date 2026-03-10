// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Importamos nuestra página de inicio
import Home from "./pages/Home";
import Instalaciones from "./pages/Instalaciones";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* El menú de navegación ahora usa <Link> en lugar de <a> */}
        <header className="navbar">
          <h1>Motel Paraíso 🏨</h1>
          <nav className="nav-links">
            <Link to="/">Inicio</Link>
            <Link to="/instalaciones">Instalaciones</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        </header>

        {/* Aquí es donde React "inyectará" la página correcta */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instalaciones" element={<Instalaciones />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
