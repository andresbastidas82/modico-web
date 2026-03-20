import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollReveal from "../hooks/useScrollReveal";
import images from "../assets/images";

const testimonials = [
  {
    name: "María González",
    role: "Diseñadora de interiores",
    text: "Modico superó mis expectativas. La calidad de los acabados y la atención al detalle son impecables.",
    avatar: images.avatars[0],
  },
  {
    name: "Carlos Ramírez",
    role: "Arquitecto",
    text: "Trabajar con Modico fue una experiencia excelente. Cumplieron con los tiempos y el resultado fue espectacular.",
    avatar: images.avatars[1],
  },
  {
    name: "Ana Martínez",
    role: "Propietaria de restaurante",
    text: "El mobiliario que fabricaron para mi restaurante le dio un toque moderno y elegante. Totalmente recomendados.",
    avatar: images.avatars[2],
  },
];

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

export default function Testimonials() {
  const [ref, isVisible] = useScrollReveal();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = useCallback(
    (dir) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
    },
    []
  );

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  const t = testimonials[current];

  return (
    <section id="testimonios" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonios
          </p>
          <h2 className="text-3xl font-extrabold text-white font-heading sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="glass rounded-2xl p-8 sm:p-10"
              >
                {/* Stars */}
                <div className="mb-5 flex justify-center text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="mb-8 text-center text-base leading-relaxed text-slate-300 italic sm:text-lg">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/30"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Testimonio anterior"
            className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-dark-light text-slate-300 transition-all hover:border-primary hover:text-primary sm:-translate-x-14"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Siguiente testimonio"
            className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-dark-light text-slate-300 transition-all hover:border-primary hover:text-primary sm:translate-x-14"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                aria-label={`Ir al testimonio ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
