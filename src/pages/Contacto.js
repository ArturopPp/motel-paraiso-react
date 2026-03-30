// src/pages/Contacto.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Contacto.css";

function Contacto() {
  const location = useLocation();

  // Estado para capturar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    habitacion: "",
    fecha: "",
    mensaje: "",
  });

  // Efecto para leer la habitación desde la URL (si viene de Instalaciones)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const habSeleccionada = params.get("habitacion");
    if (habSeleccionada) {
      setFormData((prev) => ({ ...prev, habitacion: habSeleccionada }));
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert(`Gracias ${formData.nombre}. Hemos recibido tu solicitud para la ${formData.habitacion}.`);
  };

  return (
    <main className="contacto-page">
      <div className="contacto-header">
        <h2>Contáctanos</h2>
        <p>
          Estamos disponibles las 24 horas para atender tus dudas o reservas en Motel El Gaucho.
        </p>
      </div>

      <div className="contacto-container">
        {/* Columna Izquierda: Formulario Mejorado */}
        <div className="contacto-form-section">
          <h3>Reserva o Envíanos un mensaje</h3>
          <form className="form-reserva" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre o Alias</label>
              <input
                type="text"
                id="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="¿Cómo te llamamos?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
                required
              />
            </div>

            {/* NUEVOS CAMPOS: Habitación y Fecha */}
            <div className="form-row-reserva">
              <div className="form-group">
                <label htmlFor="habitacion">Habitación</label>
                <select 
                  id="habitacion" 
                  value={formData.habitacion} 
                  onChange={handleChange} 
                  required
                >
                  <option value="">Selecciona una...</option>
                  <option value="Habitación Sencilla">Habitación Sencilla</option>
                  <option value="Suite con Jacuzzi">Suite con Jacuzzi</option>
                  <option value="Master Suite">Master Suite</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="fecha">Fecha</label>
                <input 
                  type="date" 
                  id="fecha" 
                  value={formData.fecha} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje o Solicitud Especial</label>
              <textarea
                id="mensaje"
                rows="4"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="¿Necesitas una decoración especial o tienes alguna duda?"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-enviar">
              Enviar Solicitud
            </button>
          </form>
        </div>

        {/* Columna Derecha: Info y Mapa (Tus datos originales) */}
        <div className="contacto-info-section">
          <h3>Información y Ubicación</h3>
          <div className="info-detalles">
            <p>
              <strong>📍 Dirección:</strong> J787+5Q, 50774 San Bartolo del Llano, Méx.
            </p>
            <p>
              <strong>📞 Teléfono:</strong> (Tu número de contacto aquí)
            </p>
            <p>
              <strong>🕒 Horario:</strong> Abierto 24/7 los 365 días del año.
            </p>
          </div>

          <div className="mapa-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.323565158671!2d-99.5886!3d19.4312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzUyLjMiTiA5OcKwMzUnMTkuMCJX!5e0!3m2!1ses!2smx!4v1620000000000!5m2!1ses!2smx"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "15px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación oficial Motel El Gaucho"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contacto;