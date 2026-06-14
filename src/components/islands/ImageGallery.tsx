import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  label?: string;
}

interface Props {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSelected(i)}
            class="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-200"
          >
            <div class="flex h-full items-center justify-center text-surface-400">
              {img.alt}
            </div>
            {img.label && (
              <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span class="text-sm font-medium text-white">{img.label}</span>
              </div>
            )}
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            class="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Cerrar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>

          <div class="max-h-[80vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div class="flex aspect-[4/3] items-center justify-center rounded-2xl bg-surface-200">
              {images[selected].alt}
            </div>
            {images[selected].label && (
              <p class="mt-3 text-center text-white">{images[selected].label}</p>
            )}
          </div>

          <div class="absolute inset-x-0 bottom-8 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => { e.stopPropagation(); setSelected(i); }}
                class={`size-2 rounded-full transition-all ${
                  i === selected ? "w-6 bg-white" : "bg-white/40"
                }`}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
