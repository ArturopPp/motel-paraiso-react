// src/pages/Home.js
import React from 'react';
import RoomCard from '../components/RoomCard';
import roomsData from '../data/rooms';
import './Home.css';

function Home() {
  // Función para el desplazamiento suave
  const scrollToRooms = () => {
    const section = document.getElementById('rooms-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <section className="hero-section">
        <div className="hero-overlay">
          <h2 className="hero-title">Tu escape perfecto en la ciudad</h2>
          <p className="hero-slogan">Discreción, lujo y confort a tu alcance las 24 horas.</p>
          {/* Conectamos la función al botón */}
          <button className="btn-hero-reserva" onClick={scrollToRooms}>
            Descubrir Habitaciones
          </button>
        </div>
      </section>

      {/* Agregamos el id para que la función sepa a dónde ir */}
      <section id="rooms-section" className="rooms-section">
        <h3 className="rooms-title">Nuestras Habitaciones</h3>
        <p>Explora nuestras opciones. Desde sencillas hasta suites VIP.</p>
        
        <div className="rooms-grid">
          {roomsData.map((habitacion) => (
            <RoomCard key={habitacion.id} room={habitacion} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;