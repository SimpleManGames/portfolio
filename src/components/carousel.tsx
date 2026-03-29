"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type CarouselProps = {
  images: string[];
};

export default function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    if (!lightbox) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (images.length === 0) return null;

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            src={images[index]}
            alt={`Slide ${index + 1}`}
            width={800}
            height={450}
            className="w-full h-auto object-contain"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute inset-y-0 left-0 w-1/4 flex items-center justify-start pl-3 text-zinc-100/0 hover:text-zinc-100/80 transition-colors text-2xl cursor-pointer"
              >
                &larr;
              </button>
              <button
                onClick={next}
                className="absolute inset-y-0 right-0 w-1/4 flex items-center justify-end pr-3 text-zinc-100/0 hover:text-zinc-100/80 transition-colors text-2xl cursor-pointer"
              >
                &rarr;
              </button>
            </>
          )}
          <button
            onClick={() => setLightbox(true)}
            className="absolute inset-y-0 left-1/4 right-1/4 cursor-zoom-in"
          />
        </div>
        {images.length > 1 && (
          <span className="text-sm text-muted-foreground font-mono">
            {index + 1} / {images.length}
          </span>
        )}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setLightbox(false)}
        >
          <Image
            src={images[index]}
            alt={`Slide ${index + 1}`}
            width={1600}
            height={900}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-100/60 hover:text-zinc-100 transition-colors text-4xl cursor-pointer"
              >
                &larr;
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-100/60 hover:text-zinc-100 transition-colors text-4xl cursor-pointer"
              >
                &rarr;
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
