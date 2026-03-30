// src/components/WhatsAppButton.js
import React from 'react';
import './WhatsAppButton.css';

function WhatsAppButton() {
  // Aquí pones el número del motel (sin espacios ni guiones)
  // Ejemplo: 521 + lada + número
    const telefono = "527221234567"; 
    const mensaje = "Hola, quisiera consultar disponibilidad en Motel El Gaucho.";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    return (
    <a href={url} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        />
        <span>¡Reserva por WhatsApp!</span>
    </a>
    );
}

export default WhatsAppButton;