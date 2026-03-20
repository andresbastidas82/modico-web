import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import images from "../assets/images";

const floatingImages = [
  {
    src: images.hero1,
    alt: "Cocina integral moderna",
    className: "absolute -top-4 right-0 w-[55%] h-[58%] z-20",
    delay: 0.3,
    y: [0, -12],
  },
  {
    src: images.hero2,
    alt: "Escritorio de melamina",
    className: "absolute bottom-0 -left-2 w-[50%] h-[52%] z-30",
    delay: 0.5,
    y: [0, 10],
  },
  {
    src: images.hero3,
    alt: "Closet a medida",
    className: "absolute bottom-[10%] right-[5%] w-[42%] h-[42%] z-10",
    delay: 0.7,
    y: [0, -8],
  },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background glow orbs */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"
      />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        {/* Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
          >
            Diseño &middot; Fabricación &middot; Instalación
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Mobiliario que{" "}
            <span className="glow-text text-primary">transforma</span>{" "}
            tus espacios
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-8 max-w-lg text-lg text-slate-400"
          >
            Fabricamos muebles en melamina de alta calidad, diseñados a tu
            medida con acabados premium y entrega puntual.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contacto"
              className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/30"
            >
              Cotizar ahora
            </a>
            <a
              href="#galeria"
              className="rounded-full border border-slate-600 px-8 py-3 font-semibold text-slate-300 transition-all hover:border-primary hover:text-primary"
            >
              Ver catálogo
            </a>
          </motion.div>
        </div>

        {/* Floating image collage */}
        <div className="relative h-[400px] sm:h-[450px] lg:h-[520px]">
          {/* Decorative line accents */}
          <div className="absolute left-[48%] top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          <div className="absolute left-0 top-[45%] h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          {/* Floating images */}
          {floatingImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: img.delay, ease: "easeOut" }}
              className={img.className}
            >
              <motion.div
                animate={{ y: img.y }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="group relative h-full w-full"
              >
                {/* Card glow */}
                <div className="absolute -inset-1 rounded-2xl bg-primary/10 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-primary/10">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Central decorative element */}
          <div className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-dark/80 shadow-lg shadow-primary/20 backdrop-blur-md"
            >
              <span className="font-heading text-lg font-bold text-primary">M</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
