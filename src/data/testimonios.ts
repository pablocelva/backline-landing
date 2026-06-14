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
  },
  {
    id: "2",
    nombre: "María José García",
    rol: "Directora de Eventos, CorpEventos",
    texto:
      "Para nuestras cenas de gala necesitamos equipos de primera calidad. Backline Pro nos ha salvado en más de una ocasión con su rapidez y profesionalismo. Altamente recomendados.",
  },
  {
    id: "3",
    nombre: "Pablo Torres",
    rol: "Baterista Sesionista",
    texto:
      "La DW Collector's que arriendan es una joya. La mantienen impecable, con parches nuevos y afinación perfecta. Siempre que grabo en estudio la pido.",
  },
  {
    id: "4",
    nombre: "Andrea Soto",
    rol: "Organizadora Festival Fusión",
    texto:
      "Trabajar con Backline Pro es un lujo. Entienden las necesidades técnicas de cada artista y se adaptan a cualquier requerimiento. Son parte fundamental del éxito de nuestro festival.",
  },
];
