import { useState } from "react";
import type { Equipo } from "../../data/equipos";

interface Props {
  equipos: Equipo[];
  categorias: readonly string[];
}

export default function EquipmentFilter({ equipos, categorias }: Props) {
  const [categoria, setCategoria] = useState<string>("Todas");
  const [busqueda, setBusqueda] = useState("");

  const filtrados = equipos.filter((eq) => {
    const matchCat = categoria === "Todas" || eq.categoria === categoria;
    const matchBusq =
      !busqueda ||
      eq.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      eq.marca.toLowerCase().includes(busqueda.toLowerCase());
    return matchCat && matchBusq;
  });

  return (
    <div>
      <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategoria("Todas")}
            class={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              categoria === "Todas"
                ? "bg-brand-600 text-white"
                : "bg-surface-100 text-surface-600 hover:bg-surface-200"
            }`}
          >
            Todas
          </button>
          {categorias.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategoria(cat)}
              class={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                categoria === cat
                  ? "bg-brand-600 text-white"
                  : "bg-surface-100 text-surface-600 hover:bg-surface-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <input
          type="search"
          placeholder="Buscar equipo o marca..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          class="w-full rounded-xl border border-surface-300 px-4 py-2 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 sm:w-64"
        />
      </div>

      {filtrados.length === 0 ? (
        <p class="py-12 text-center text-surface-500">
          No encontramos equipos con esos criterios.
        </p>
      ) : (
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((eq) => (
            <div
              key={eq.id}
              class="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <span class="mb-2 inline-block rounded-full bg-brand-100 px-3 py-0.5 text-xs font-medium text-brand-700">
                {eq.categoria}
              </span>
              <h3 class="mt-2 text-lg font-bold text-surface-900">{eq.nombre}</h3>
              <p class="mt-1 text-sm text-surface-500">{eq.marca}</p>
              <p class="mt-2 text-sm text-surface-600">{eq.descripcion}</p>
              <button
                type="button"
                class="mt-4 w-full rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                Cotizar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
