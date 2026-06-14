export interface Equipo {
  id: string;
  nombre: string;
  categoria: string;
  marca: string;
  descripcion: string;
  imagen?: string;
  destacado?: boolean;
}

export const categorias = [
  "Baterías",
  "Amplificadores de Guitarra",
  "Amplificadores de Bajo",
  "Teclados",
  "Micrófonos",
  "Percusión",
  "Backline Vocal",
] as const;

export type Categoria = (typeof categorias)[number];

export const equipos: Equipo[] = [
  {
    id: "bateria-1",
    nombre: "Batería Acústica DW Collector's",
    categoria: "Baterías",
    marca: "DW",
    descripcion: "Serie Collectors 5 piezas con herrajes y platillos Zildjian K Custom.",
    imagen: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600&q=80&fit=crop",
    destacado: true,
  },
  {
    id: "bateria-2",
    nombre: "Batería Electrónica Roland TD-50K",
    categoria: "Baterías",
    marca: "Roland",
    descripcion: "Batería digital con módulo TD-50X, pads digitales y platillos V-Cymbal.",
    imagen: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600&q=80&fit=crop",
    destacado: true,
  },
  {
    id: "amp-guitar-1",
    nombre: "Fender Twin Reverb '65 Reissue",
    categoria: "Amplificadores de Guitarra",
    marca: "Fender",
    descripcion: "Amplificador valvular 2x12\" de 85W. Sonido limpio clásico americano.",
    imagen: "https://images.unsplash.com/photo-1550684848-5e7a2a127e26?w=600&q=80&fit=crop",
    destacado: true,
  },
  {
    id: "amp-guitar-2",
    nombre: "Marshall JCM800 2203",
    categoria: "Amplificadores de Guitarra",
    marca: "Marshall",
    descripcion: "Cabezal valvular 100W con gabinete 4x12\". El sonido rock por excelencia.",
    imagen: "https://images.unsplash.com/photo-1550684848-5e7a2a127e26?w=600&q=80&fit=crop",
  },
  {
    id: "amp-guitar-3",
    nombre: "Vox AC30 Hand-Wired",
    categoria: "Amplificadores de Guitarra",
    marca: "Vox",
    descripcion: "Amplificador combo valvular 2x12\" de 30W. El sonido británico clásico.",
    imagen: "https://images.unsplash.com/photo-1550684848-5e7a2a127e26?w=600&q=80&fit=crop",
    destacado: true,
  },
  {
    id: "amp-bass-1",
    nombre: "Ampeg SVT-VR + 8x10",
    categoria: "Amplificadores de Bajo",
    marca: "Ampeg",
    descripcion: "Cabezal valvular 300W con gabinete 8x10\". El estándar del bajo.",
    imagen: "https://images.unsplash.com/photo-1550684848-5e7a2a127e26?w=600&q=80&fit=crop",
    destacado: true,
  },
  {
    id: "amp-bass-2",
    nombre: "Darkglass Microtubes 900",
    categoria: "Amplificadores de Bajo",
    marca: "Darkglass",
    descripcion: "Cabezal híbrido 900W con distorsión Microtubes integrada.",
    imagen: "https://images.unsplash.com/photo-1550684848-5e7a2a127e26?w=600&q=80&fit=crop",
  },
  {
    id: "teclado-1",
    nombre: "Nord Stage 4 88",
    categoria: "Teclados",
    marca: "Nord",
    descripcion: "Teclado escenario con acción de martillo pesado, 3 engines y efectos.",
    imagen: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80&fit=crop",
    destacado: true,
  },
  {
    id: "teclado-2",
    nombre: "Roland Jupiter-X",
    categoria: "Teclados",
    marca: "Roland",
    descripcion: "Sintetizador polifónico con motores Jupiter-8, Juno-106, SH-101 y más.",
    imagen: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80&fit=crop",
  },
  {
    id: "microfono-1",
    nombre: "Shure SM58",
    categoria: "Micrófonos",
    marca: "Shure",
    descripcion: "Micrófono vocal dinámico cardioide. El estándar mundial.",
    imagen: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80&fit=crop",
  },
  {
    id: "microfono-2",
    nombre: "Sennheiser e965",
    categoria: "Micrófonos",
    marca: "Sennheiser",
    descripcion: "Micrófono vocal de condensador con doble diafragma. Calidad de estudio.",
    imagen: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80&fit=crop",
    destacado: true,
  },
  {
    id: "percusion-1",
    nombre: "Percusión LP Complete Set",
    categoria: "Percusión",
    marca: "Latin Percussion",
    descripcion: "Set completo: congas, bongós, timbales, cajón y accesorios.",
    imagen: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600&q=80&fit=crop",
  },
  {
    id: "vocal-1",
    nombre: "Sennheiser EW G4 965",
    categoria: "Backline Vocal",
    marca: "Sennheiser",
    descripcion: "Sistema inalámbrico vocal profesional con micrófono de condensador.",
    imagen: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80&fit=crop",
    destacado: true,
  },
];
