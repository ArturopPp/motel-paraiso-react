// src/data/rooms.js

const rooms = [
  {
    id: 1,
    name: "Habitación Estándar",
    description: "Ideal para una escapada rápida. Discreción y confort.",
    price: 450,
    features: ["Cama Matrimonial", "Regadera", "TV con cable"],
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Suite con Jacuzzi",
    description: "Relajación total con jacuzzi privado e hidromasaje.",
    price: 800,
    features: ["Cama King Size", "Jacuzzi", "Sillón Tantra", "Smart TV"],
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Master Suite VIP",
    description: "Lujo al máximo nivel. Amplio espacio y amenidades premium.",
    price: 1200,
    features: [
      "Cama King Size",
      "Alberca privada",
      "Tubo de pole dance",
      "Minibar",
    ],
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800",
  },
];

export default rooms;
