// src/pages/Instalaciones.js
import React from 'react';
import './Instalaciones.css'; // Importamos sus estilos

// Lista de nuestras 5 imágenes requeridas para el proyecto
const fotosGaleria = [
  { id: 1, titulo: "Entrada Discreta y Segura", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" },
  { id: 2, titulo: "Estacionamiento Privado", url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800" },
  { id: 3, titulo: "Bar y Servicio a la Habitación", url: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 4, titulo: "Alberca Climatizada", url: "https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 5, titulo: "Detalles de Lujo", url: "https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&w=800" }
];

function Instalaciones() {
  return (
    <main className="instalaciones-page">
      <div className="instalaciones-header">
        <h2>Nuestras Instalaciones</h2>
        <p>Conoce los espacios diseñados para tu total comodidad y privacidad.</p>
      </div>

      {/* Galería de imágenes */}
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
    </main>
  );
}

export default Instalaciones;