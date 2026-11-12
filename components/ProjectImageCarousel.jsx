"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from "react-icons/fi";

export default function ProjectImageCarousel({ images = [], title = "Project" }) {
  const cleanImages = useMemo(() => [...new Set(images.filter(Boolean))], [images]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);

  const total = cleanImages.length;

  useEffect(() => {
    if (total <= 1 || paused || hovered) return;

    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % total);
    }, 4000);

    return () => clearInterval(timer);
  }, [total, paused, hovered]);

  useEffect(() => {
    if (activeIndex >= total && total > 0) {
      setActiveIndex(0);
    }
  }, [activeIndex, total]);

  if (!total) {
    return (
      <div className="flex aspect-[1.48] w-full items-center justify-center rounded-[28px] border border-[#d8e3d5] bg-[#edf4ea] text-sm font-bold text-slate-400">
        Project preview unavailable
      </div>
    );
  }

  const getIndex = (offset) => (activeIndex + offset + total) % total;

  const previousIndex = getIndex(-1);
  const nextIndex = getIndex(1);

  const goNext = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % total);
  };

  const goPrevious = () => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const goTo = (index) => {
    if (index === activeIndex) return;

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const getImageName = (image) => {
    const file = image.split("/").pop()?.replace(/\.[^/.]+$/, "") || "Project Screen";

    return file
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  };

  return (
    <div
      className="relative w-full px-4 pb-9 pt-4 sm:px-8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {total > 1 && (
        <>
          <motion.div
            key={`back-left-${previousIndex}`}
            initial={{ opacity: 0, x: 20, rotate: 0 }}
            animate={{ opacity: 0.5, x: 0, rotate: -5 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-14 left-0 top-10 z-0 w-[88%] overflow-hidden rounded-[26px] border border-[#242823] bg-black p-2 shadow-[0_18px_45px_rgba(32,67,44,.08)]"
          >
            <img
              src={cleanImages[previousIndex]}
              alt={`${title} previous preview`}
              className="h-full w-full rounded-[20px] object-cover opacity-70"
            />
          </motion.div>

          <motion.div
            key={`back-right-${nextIndex}`}
            initial={{ opacity: 0, x: -20, rotate: 0 }}
            animate={{ opacity: 0.65, x: 0, rotate: 5 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-14 right-0 top-10 z-10 w-[88%] overflow-hidden rounded-[26px] border border-[#cdddc9] bg-white p-2 shadow-[0_18px_45px_rgba(32,67,44,.1)]"
          >
            <img
              src={cleanImages[nextIndex]}
              alt={`${title} next preview`}
              className="h-full w-full rounded-[20px] object-cover opacity-80"
            />
          </motion.div>
        </>
      )}

      <motion.div
        layout
        className="relative z-20 overflow-hidden rounded-[28px] border border-[#456c38] bg-white p-0.5 shadow-[0_28px_75px_rgba(32,67,44,.16)]"
      >
        <div className="relative aspect-[1.48] overflow-hidden rounded-[22px] bg-[#edf4ea]">
          <AnimatePresence initial={false} mode="popLayout" custom={direction}>
            <motion.div
              key={cleanImages[activeIndex]}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 70 : -70, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -70 : 70, scale: 0.97 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                src={cleanImages[activeIndex]}
                alt={`${title} ${getImageName(cleanImages[activeIndex])}`}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

          <div className="absolute bottom-4 left-4 z-30">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-white/70">
              CRM Interface
            </p>
          </div>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/60 bg-white/90 text-[#135e34] shadow-lg backdrop-blur transition duration-300 hover:scale-110 hover:bg-[#135e34] hover:text-white"
              >
                <FiChevronLeft size={21} />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/60 bg-white/90 text-[#135e34] shadow-lg backdrop-blur transition duration-300 hover:scale-110 hover:bg-[#135e34] hover:text-white"
              >
                <FiChevronRight size={21} />
              </button>
            </>
          )}

          <div className="absolute bottom-4 right-4 z-40 flex items-center gap-2">
            {total > 1 && (
              <button
                type="button"
                onClick={() => setPaused((value) => !value)}
                aria-label={paused ? "Play carousel" : "Pause carousel"}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#135e34] shadow-md backdrop-blur transition hover:bg-[#135e34] hover:text-white"
              >
                {paused ? <FiPlay size={13} /> : <FiPause size={13} />}
              </button>
            )}

            <span className="rounded-full bg-black/50 px-3 py-1.5 text-[10px] font-extrabold text-white backdrop-blur">
              {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </motion.div>

      {total > 1 && (
        <div className="relative z-30 mt-5 flex items-center justify-center gap-2">
          {cleanImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Open screen ${index + 1}`}
              className={`cursor-pointer rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "h-2 w-8 bg-[#135e34]"
                  : "h-2 w-2 bg-[#c6d6c3] hover:bg-[#7fa087]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}