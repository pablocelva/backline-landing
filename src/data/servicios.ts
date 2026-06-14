export interface Servicio {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
  destacado?: boolean;
}

export const servicios: Servicio[] = [
  {
    id: "arriendo-eventos",
    titulo: "Arriendo para Eventos Musicales",
    descripcion:
      "Equipamiento completo para conciertos, festivales y tocatas. Baterías, amplificadores, teclados y backline vocal de primeras marcas.",
    icono: "🎵",
    destacado: true,
  },
  {
    id: "arriendo-corporativo",
    titulo: "Arriendo Corporativo",
    descripcion:
      "Sonido e instrumentos para eventos empresariales, lanzamientos y cenas de gala. Soluciones profesionales con montaje incluido.",
    icono: "🏢",
    destacado: true,
  },
  {
    id: "estudio-grabacion",
    titulo: "Equipos para Estudio",
    descripcion:
      "Amplificadores vintage y modernos, baterías acústicas y electrónicas, y backline premium para sesiones de grabación.",
    icono: "🎙️",
    destacado: true,
  },
  {
    id: "asesoria-tecnica",
    titulo: "Asesoría Técnica",
    descripcion:
      "Te ayudamos a elegir el equipamiento ideal para tu evento. Evaluamos el recinto, el género musical y tus requerimientos específicos.",
    icono: "🔧",
  },
  {
    id: "transporte-montaje",
    titulo: "Transporte y Montaje",
    descripcion:
      "Llevamos los equipos a tu evento, los instalamos y configuramos. Nos preocupamos de la logística para que tú solo toques.",
    icono: "🚚",
  },
  {
    id: "mantenimiento",
    titulo: "Mantenimiento y Reparación",
    descripcion:
      "Servicio técnico especializado para equipos de audio e instrumentos. Revisión, calibración y puesta a punto.",
    icono: "🛠️",
  },
];
