import { motion } from "framer-motion";
import useScrollReveal from "../hooks/useScrollReveal";
import images from "../assets/images";

const services = [
  {
    title: "Escritorios",
    desc: "Funcionales y ergonómicos para tu oficina o home office.",
    img: images.escritorios,
  },
  {
    title: "Cocinas Integrales",
    desc: "Diseños modernos que optimizan cada centímetro de tu cocina.",
    img: images.cocinas,
  },
  {
    title: "Closets",
    desc: "Soluciones de almacenamiento elegantes y a tu medida.",
    img: images.closets,
  },
  {
    title: "Estantes",
    desc: "Organización con estilo para cualquier espacio.",
    img: images.estantes,
  },
  {
    title: "Puertas",
    desc: "Acabados premium que complementan tu diseño interior.",
    img: images.puertas,
  },
  {
    title: "Muebles a medida",
    desc: "Proyectos únicos adaptados a tu visión y espacio.",
    img: images.medida,
  },
];

function ServiceCard({ service, index }) {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-dark-light transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-light/90 via-dark-light/20 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
        <p className="text-sm text-slate-400">{service.desc}</p>
      </div>
      {/* Glow border on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 30px rgba(12,143,143,0.15)" }}
      />
    </motion.div>
  );
}

export default function Services() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="servicios" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Nuestros servicios
          </p>
          <h2 className="text-3xl font-extrabold text-white font-heading sm:text-4xl">
            Soluciones en melamina para cada espacio
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
