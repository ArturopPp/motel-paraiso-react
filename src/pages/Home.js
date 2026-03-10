// src/pages/Home.js
import React from 'react';
import RoomCard from '../components/RoomCard';
import roomsData from '../data/rooms';

function Home() {
  return (
    <main>
      <section className="hero-section">
        <h2>Tu escape perfecto en la ciudad</h2>
        <p>Discreción, lujo y confort a tu alcance las 24 horas.</p>
      </section>

      <section className="rooms-section">
        <h3>Nuestras Habitaciones</h3>
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