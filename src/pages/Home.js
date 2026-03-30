// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

// Definimos las 3 habitaciones aquí para que sea fácil de editar
const habitacionesDestacadas = [
  {
    id: 1,
    nombre: "Habitación Sencilla",
    precio: "$350 / 6 hrs",
    imagen: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800",
    desc: "Privacidad y confort esencial."
  },
  {
    id: 2,
    nombre: "Suite con Jacuzzi",
    precio: "$600 / 6 hrs",
    imagen: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800",
    desc: "El equilibrio perfecto para una noche especial."
  },
  {
    id: 3,
    nombre: "Master Suite",
    precio: "$850 / 6 hrs",
    imagen: "https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Lujo total con amenidades premium."
  }
];

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-container">
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Motel El Gaucho</h1>
          <p className="hero-slogan">Privacidad, confort y discreción en cada detalle.</p>
          <div className="hero-buttons">
            <button className="btn-hero-reserva" onClick={() => navigate('/instalaciones')}>
              Ver Disponibilidad
            </button>
            <button className="btn-hero-ubicacion" onClick={() => navigate('/contacto')}>
              Ubicación
            </button>
          </div>
        </div>
      </section>

      <section className="features-strip">
        <div className="feature-item"><span>✅</span> Abierto 24/7</div>
        <div className="feature-item"><span>✅</span> Cochera Privada</div>
        <div className="feature-item"><span>✅</span> Facturación Disponible</div>
      </section>

      {/* NUEVA SECCIÓN DE HABITACIONES EN HOME */}
      <section className="home-rooms-preview">
        <h2 className="rooms-title">Nuestras Habitaciones</h2>
        <div className="rooms-grid">
          {habitacionesDestacadas.map((hab) => (
            <div key={hab.id} className="room-card-mini">
              <img src={hab.imagen} alt={hab.nombre} />
              <div className="room-card-info">
                <h3>{hab.nombre}</h3>
                <p className="room-price">{hab.precio}</p>
                <button className="btn-ver-mas" onClick={() => navigate('/instalaciones')}>
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;