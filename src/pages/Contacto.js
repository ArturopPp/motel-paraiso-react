// src/pages/Contacto.js
import React from 'react';
import './Contacto.css';

function Contacto() {
  return (
    <main className="contacto-page">
      
      <div className="contacto-header">
        <h2>Contáctanos</h2>
        <p>Estamos disponibles las 24 horas para atender tus dudas o reservas.</p>
      </div>

      <div className="contacto-container">
        
        {/* Columna Izquierda: Formulario */}
        <div className="contacto-form-section">
          <h3>Envíanos un mensaje</h3>
          <form className="form-reserva">
            <div className="form-group">
              <label htmlFor="nombre">Nombre o Alias</label>
              <input type="text" id="nombre" placeholder="¿Cómo te llamamos?" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" placeholder="tu@correo.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje o Solicitud Especial</label>
              <textarea id="mensaje" rows="4" placeholder="¿Necesitas una decoración especial o tienes alguna duda?" required></textarea>
            </div>

            <button type="submit" className="btn-enviar">Enviar Mensaje</button>
          </form>
        </div>

        {/* Columna Derecha: Info y Mapa */}
        <div className="contacto-info-section">
          <h3>Información y Ubicación</h3>
          <div className="info-detalles">
            <p><strong>📍 Dirección:</strong> Av. Siempre Viva 123, Zona Centro, CDMX.</p>
            <p><strong>📞 Teléfono:</strong> (55) 1234-5678</p>
            <p><strong>🕒 Horario:</strong> Abierto 24/7 los 365 días del año.</p>
          </div>
          
          {/* Mapa incrustado de Google Maps (Iframe) */}
          <div className="mapa-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120411.10427814897!2d-99.2132742994464!3d19.42847000185966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1710100000000!5m2!1ses-419!2smx" 
              width="100%" 
              height="250" 
              style={{ border: 0, borderRadius: '8px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación"
            ></iframe>
          </div>
        </div>

      </div>
    </main>
  );
}

export default Contacto;