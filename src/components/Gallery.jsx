import { motion } from "framer-motion";
import useScrollReveal from "../hooks/useScrollReveal";
import images from "../assets/images";

function GalleryItem({ src, index }) {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-2xl"
    >
      <img
        src={src}
        alt={`Proyecto Modico ${index + 1}`}
        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-72"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-dark/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary">
          Ver proyecto
        </span>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="galeria" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Portafolio
          </p>
          <h2 className="text-3xl font-extrabold text-white font-heading sm:text-4xl">
            Nuestros proyectos
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.gallery.map((src, i) => (
            <GalleryItem key={i} src={src} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
