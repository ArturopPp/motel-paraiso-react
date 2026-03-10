// src/components/RoomCard.js
import React from 'react';
import './RoomCard.css'; // Importamos sus propios estilos

function RoomCard({ room }) {
  // Recibimos "room" como propiedad (prop) desde la base de datos
  return (
    <div className="room-card">
      <img src={room.image} alt={room.name} className="room-image" />
      
      <div className="room-info">
        <h3>{room.name}</h3>
        <p className="room-desc">{room.description}</p>
        
        <ul className="room-features">
          {/* Recorremos la lista de características de cada cuarto */}
          {room.features.map((feature, index) => (
            <li key={index}>✨ {feature}</li>
          ))}
        </ul>
        
        <div className="room-footer">
          <span className="room-price">${room.price} MXN</span>
          <button className="btn-reserve">Ver Disponibilidad</button>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;