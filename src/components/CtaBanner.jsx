import { motion } from "framer-motion";
import useScrollReveal from "../hooks/useScrollReveal";

export default function CtaBanner() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Full-width background glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Main container */}
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-dark-light/80 backdrop-blur-sm">
            {/* Gradient border effect */}
            <div
              className="absolute inset-0 rounded-3xl opacity-50"
              style={{
                background:
                  "linear-gradient(135deg, rgba(12,143,143,0.3) 0%, transparent 40%, transparent 60%, rgba(12,143,143,0.2) 100%)",
              }}
            />

            {/* Floating orbs */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/15 blur-[60px]" />
            <div className="pointer-events-none absolute right-1/3 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-primary/10 blur-[50px]" />

            {/* Grid pattern overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 grid items-center gap-8 p-10 sm:p-14 lg:grid-cols-5 lg:gap-12 lg:p-16">
              {/* Left content */}
              <div className="lg:col-span-3">
                {/* <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                    Cotización gratuita
                  </span>
                </motion.div> */}

                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-4 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
                >
                  ¿Listo para
                  <span className="block text-primary">transformar tu espacio?</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="max-w-lg text-base text-slate-400 sm:text-lg"
                >
                  Cuéntanos tu idea y recibe una cotización personalizada sin
                  compromiso. Nuestro equipo te acompaña en cada paso.
                </motion.p>
              </div>

              {/* Right side */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col items-start gap-6 lg:col-span-2 lg:items-center"
              >
                {/* Stats */}
                <div className="flex w-full gap-6 sm:gap-8">
                  <div className="text-center">
                    <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">500+</p>
                    <p className="mt-1 text-xs text-slate-400 sm:text-sm">Proyectos entregados</p>
                  </div>
                  <div className="h-12 w-px bg-slate-700" />
                  <div className="text-center">
                    <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">98%</p>
                    <p className="mt-1 text-xs text-slate-400 sm:text-sm">Clientes satisfechos</p>
                  </div>
                </div>

                {/* CTA button */}
                <button
                  onClick={() => {
                    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group relative w-full overflow-hidden rounded-full bg-primary px-10 py-4 text-center font-bold text-white transition-all hover:shadow-lg hover:shadow-primary/30 sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Solicitar cotización
                    <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                </button>

                <p className="text-xs text-slate-500">
                  Sin compromiso &middot; Respuesta en menos de 24h
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
