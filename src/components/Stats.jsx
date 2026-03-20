import { motion } from "framer-motion";
import useCountUp from "../hooks/useCountUp";

const stats = [
  { value: 500, suffix: "+", label: "Proyectos entregados" },
  { value: 8, suffix: "+", label: "Años de experiencia" },
  { value: 98, suffix: "%", label: "Clientes satisfechos" },
  { value: 1200, suffix: "+", label: "Muebles fabricados" },
];

function StatItem({ stat, index }) {
  const [ref, count] = useCountUp(stat.value, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <p className="font-heading text-4xl font-bold text-primary sm:text-5xl">
        {count}
        <span>{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
