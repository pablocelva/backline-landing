import { type FormEvent, useState } from "react";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  evento: string;
  mensaje: string;
}

const initialForm: FormData = {
  nombre: "",
  email: "",
  telefono: "",
  evento: "",
  mensaje: "",
};

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initialForm);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("Form data:", data);
    setSent(true);
    setData(initialForm);
  }

  if (sent) {
    return (
      <div class="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <p class="text-lg font-semibold text-green-800">
          ¡Mensaje enviado con éxito!
        </p>
        <p class="mt-2 text-green-600">
          Te contactaremos en menos de 2 horas.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          class="mt-4 text-sm font-medium text-green-700 underline underline-offset-2 hover:text-green-800"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} class="space-y-5">
      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label for="nombre" class="mb-1 block text-sm font-medium text-surface-700">
            Nombre completo
          </label>
          <input
            id="nombre"
            type="text"
            required
            value={data.nombre}
            onChange={(e) => setData({ ...data, nombre: e.target.value })}
            class="w-full rounded-xl border border-surface-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label for="email" class="mb-1 block text-sm font-medium text-surface-700">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            required
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            class="w-full rounded-xl border border-surface-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            placeholder="correo@ejemplo.cl"
          />
        </div>
      </div>

      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label for="telefono" class="mb-1 block text-sm font-medium text-surface-700">
            Teléfono
          </label>
          <input
            id="telefono"
            type="tel"
            value={data.telefono}
            onChange={(e) => setData({ ...data, telefono: e.target.value })}
            class="w-full rounded-xl border border-surface-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            placeholder="+56 9 1234 5678"
          />
        </div>
        <div>
          <label for="evento" class="mb-1 block text-sm font-medium text-surface-700">
            Tipo de evento
          </label>
          <select
            id="evento"
            value={data.evento}
            onChange={(e) => setData({ ...data, evento: e.target.value })}
            class="w-full rounded-xl border border-surface-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          >
            <option value="">Selecciona una opción</option>
            <option value="concierto">Concierto / Festival</option>
            <option value="corporativo">Evento Corporativo</option>
            <option value="grabacion">Grabación en Estudio</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      <div>
        <label for="mensaje" class="mb-1 block text-sm font-medium text-surface-700">
          Cuéntanos qué necesitas
        </label>
        <textarea
          id="mensaje"
          rows={4}
          required
          value={data.mensaje}
          onChange={(e) => setData({ ...data, mensaje: e.target.value })}
          class="w-full resize-none rounded-xl border border-surface-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          placeholder="Equipos, fechas, lugar, requerimientos especiales..."
        />
      </div>

      <button
        type="submit"
        class="w-full rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 active:bg-brand-800"
      >
        Enviar cotización
      </button>
    </form>
  );
}
