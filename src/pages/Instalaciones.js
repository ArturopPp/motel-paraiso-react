// src/pages/Instalaciones.js
import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Instalaciones.css";

const fotosGaleria = [
  { id: 1, titulo: "Entrada Discreta y Segura", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" },
  { id: 2, titulo: "Estacionamiento Privado", url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800" },
  { id: 3, titulo: "Bar y Servicio a la Habitación", url: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 4, titulo: "Alberca Climatizada", url: "https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 5, titulo: "Detalles de Lujo", url: "https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

const habitaciones = [
  {
    id: 101,
    nombre: "Habitación Sencilla",
    precio: "$350 / 6 hrs",
    imagen: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800",
    amenidades: ["Cama King Size", "Smart TV", "Cochera Privada"],
    disponibilidad: [
      { dia: "Lun", estado: "libre" }, { dia: "Mar", estado: "libre" }, { dia: "Mié", estado: "libre" },
      { dia: "Jue", estado: "ocupado" }, { dia: "Vie", estado: "ocupado" }, { dia: "Sáb", estado: "ocupado" }, { dia: "Dom", estado: "libre" }
    ]
  },
  {
    id: 102,
    nombre: "Suite con Jacuzzi",
    precio: "$600 / 6 hrs",
    imagen: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800",
    amenidades: ["Jacuzzi Hidromasaje", "Luces LED", "Sonido Bluetooth"],
    disponibilidad: [
      { dia: "Lun", estado: "ocupado" }, { dia: "Mar", estado: "libre" }, { dia: "Mié", estado: "libre" },
      { dia: "Jue", estado: "libre" }, { dia: "Vie", estado: "ocupado" }, { dia: "Sáb", estado: "ocupado" }, { dia: "Dom", estado: "ocupado" }
    ]
  },
  {
    id: 103,
    nombre: "Master Suite",
    precio: "$850 / 6 hrs",
    imagen: "https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&w=800",
    amenidades: ["Jacuzzi Doble", "Sala de Estar", "Potro del Amor", "Minibar"],
    disponibilidad: [
      { dia: "Lun", estado: "libre" }, { dia: "Mar", estado: "libre" }, { dia: "Mié", estado: "libre" },
      { dia: "Jue", estado: "libre" }, { dia: "Vie", estado: "libre" }, { dia: "Sáb", estado: "ocupado" }, { dia: "Dom", estado: "libre" }
    ]
  }
];

function Instalaciones() {
  const navigate = useNavigate(); 

  // CORRECCIÓN: La función ahora recibe el nombre de la habitación
  const irAContacto = (nombreHabitacion) => {
    navigate(`/contacto?habitacion=${encodeURIComponent(nombreHabitacion)}`);
  };

  return (
    <main className="instalaciones-page">
      <div className="instalaciones-header">
        <h2>Conoce Motel El Gaucho</h2>
        <p>Espacios diseñados para tu total comodidad, discreción y privacidad.</p>
      </div>

      <section className="galeria-section">
        <h3>Nuestras Áreas Comunes</h3>
        <div className="galeria-grid">
          {fotosGaleria.map((foto) => (
            <div key={foto.id} className="galeria-item">
              <img src={foto.url} alt={foto.titulo} />
              <div className="galeria-overlay">
                <span>{foto.titulo}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="habitaciones-section">
        <h3>Nuestras Habitaciones</h3>
        <div className="habitaciones-grid">
          {habitaciones.map((habitacion) => (
            <div key={habitacion.id} className="habitacion-card">
              <div className="habitacion-img-container">
                <img src={habitacion.imagen} alt={habitacion.nombre} />
                <span className="precio-tag">{habitacion.precio}</span>
              </div>
              
              <div className="habitacion-info">
                <h3>{habitacion.nombre}</h3>
                <ul>
                  {habitacion.amenidades.map((item, index) => (
                    <li key={index}>✨ {item}</li>
                  ))}
                </ul>

                <div className="calendario-mini">
                  <p className="calendario-titulo">Disponibilidad esta semana:</p>
                  <div className="dias-grid">
                    {habitacion.disponibilidad.map((d, i) => (
                      <div key={i} className={`dia-item ${d.estado}`}>
                        <span className="dia-nombre">{d.dia}</span>
                        <div className="punto-estado"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CORRECCIÓN: El botón envía el nombre de la habitación actual */}
                <button 
                  className="btn-reservar-card"
                  onClick={() => irAContacto(habitacion.nombre)}
                >
                  Consultar Disponibilidad
                </button>

              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Instalaciones;