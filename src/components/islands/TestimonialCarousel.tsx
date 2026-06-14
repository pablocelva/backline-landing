import { useState } from "react";
import type { Testimonio } from "../../data/testimonios";

interface Props {
  testimonios: Testimonio[];
}

export default function TestimonialCarousel({ testimonios }: Props) {
  const [current, setCurrent] = useState(0);
  const t = testimonios[current];

  function next() {
    setCurrent((c) => (c + 1) % testimonios.length);
  }

  function prev() {
    setCurrent((c) => (c - 1 + testimonios.length) % testimonios.length);
  }

  return (
    <div class="relative mx-auto max-w-2xl px-4 text-center">
      <div class="min-h-[200px]">
        <p class="text-lg leading-relaxed italic text-surface-700">
          &ldquo;{t.texto}&rdquo;
        </p>
        <div class="mt-6 flex flex-col items-center gap-3">
          {t.imagen && (
            <img
              src={t.imagen}
              alt={t.nombre}
              class="size-14 rounded-full object-cover"
            />
          )}
          <div>
            <p class="font-semibold text-surface-900">{t.nombre}</p>
            <p class="text-sm text-surface-500">{t.rol}</p>
          </div>
        </div>
      </div>

      <div class="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          class="flex size-10 items-center justify-center rounded-full border border-surface-300 transition-colors hover:border-brand-500 hover:text-brand-600"
          aria-label="Anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        <div class="flex gap-2">
          {testimonios.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              class={`size-2 rounded-full transition-all ${
                i === current ? "w-6 bg-brand-600" : "bg-surface-300"
              }`}
              aria-label={`Ir al testimonio ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          class="flex size-10 items-center justify-center rounded-full border border-surface-300 transition-colors hover:border-brand-500 hover:text-brand-600"
          aria-label="Siguiente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
}
