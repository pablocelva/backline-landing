export interface Testimonio {
  id: string;
  nombre: string;
  rol: string;
  texto: string;
  imagen?: string;
}

export const testimonios: Testimonio[] = [
  {
    id: "1",
    nombre: "Carlos Muñoz",
    rol: "Productor Musical",
    texto:
      "El backline que nos proporcionaron para el festival fue impecable. Todo llegó a tiempo, perfectamente configurado y sonó increíble. Sin duda el mejor servicio de arriendo del país.",
    imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&fit=crop",
  },
  {
    id: "2",
    nombre: "María José García",
    rol: "Directora de Eventos, CorpEventos",
    texto:
      "Para nuestras cenas de gala necesitamos equipos de primera calidad. Backline Pro nos ha salvado en más de una ocasión con su rapidez y profesionalismo. Altamente recomendados.",
    imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&fit=crop",
  },
  {
    id: "3",
    nombre: "Pablo Torres",
    rol: "Baterista Sesionista",
    texto:
      "La DW Collector's que arriendan es una joya. La mantienen impecable, con parches nuevos y afinación perfecta. Siempre que grabo en estudio la pido.",
    imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&fit=crop",
  },
  {
    id: "4",
    nombre: "Andrea Soto",
    rol: "Organizadora Festival Fusión",
    texto:
      "Trabajar con Backline Pro es un lujo. Entienden las necesidades técnicas de cada artista y se adaptan a cualquier requerimiento. Son parte fundamental del éxito de nuestro festival.",
    imagen: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&fit=crop",
  },
];
