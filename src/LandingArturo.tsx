import { motion } from "framer-motion";
import { Phone, ShieldCheck, CreditCard, Banknote, HeartPulse, Car, Wallet, Sparkles, Mail, ArrowRight } from "lucide-react";

export default function LandingArturo() {
  const phone = "+523325376945"; // tel and WhatsApp use E.164
  const whatsappHref = `https://wa.me/${phone}?text=Hola%20Arturo,%20me%20interesa%20tu%20asesor%C3%ADa.`;

  const container = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const card = {
    hidden: { opacity: 0, y: 12 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.08 * i, duration: 0.45 },
    }),
  };

  const products = [
    { title: "Seguros de Auto", emoji: "🚗", icon: Car, desc: "Protección total y asistencia vial 24/7.", color: "from-cyan-500 to-sky-500" },
    { title: "Seguro de Vida", emoji: "🛡️", icon: ShieldCheck, desc: "Tranquilidad para ti y tu familia.", color: "from-emerald-500 to-teal-500" },
    { title: "Gastos Médicos Mayores", emoji: "💖", icon: HeartPulse, desc: "Coberturas amplias y redes hospitalarias.", color: "from-rose-500 to-fuchsia-500" },
    { title: "Tarjetas de Crédito", emoji: "💳", icon: CreditCard, desc: "Estrategias para maximizar beneficios y evitar comisiones.", color: "from-violet-500 to-indigo-500" },
    { title: "Inversiones", emoji: "💼", icon: Wallet, desc: "Opciones de bajo a alto riesgo con acompañamiento.", color: "from-amber-500 to-orange-500" },
    { title: "AFORE / Retiro", emoji: "🏦", icon: Banknote, desc: "Optimiza tu ahorro para el retiro con decisiones informadas.", color: "from-lime-500 to-green-500" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-white/20">
      {/* Glow background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold tracking-tight">Arturo Ramírez · Inbursa</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <a href="#productos" className="text-sm text-white/80 hover:text-white transition">Productos</a>
            <a href="#conoceme" className="text-sm text-white/80 hover:text-white transition">Conóceme</a>
            <a href="#contacto" className="text-sm text-white/80 hover:text-white transition">Contacto</a>
          </nav>
          <a href={whatsappHref} target="_blank" className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20 transition">
            <Phone className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <motion.div variants={container} initial="hidden" animate="show" className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-widest text-white/60">Tu asesor financiero Inbursa</p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">Hola, soy <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Arturo Ramírez</span></h1>
            <p className="mt-5 text-lg text-white/80">
              No solamente tienes acceso a excelentes productos, cuentas con mi asesoría profesional desde el momento 1 y el acompañamiento.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${phone}`}
                className="rounded-2xl bg-white text-neutral-900 px-5 py-3 text-sm font-semibold shadow-lg shadow-white/10 hover:shadow-white/20 transition"
              >
                Llamar: +52 33 2537 6945
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition inline-flex items-center gap-2"
              >
                WhatsApp ahora <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <ul className="mt-6 text-white/80 text-sm leading-relaxed list-none space-y-1">
              <li>– Profesional en ciberseguridad</li>
              <li>– Excelentes conocimientos de cibernética jurídica</li>
              <li>– Consejos generales y respuestas a dudas complejas sobre tus seguros y tarjetas de crédito</li>
              <li>– No estás solo</li>
            </ul>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
            <div className="relative mx-auto aspect-square w-72 overflow-hidden rounded-3xl bg-gradient-to-tr from-white/10 to-white/5 p-1 shadow-2xl md:w-80">
              <div className="h-full w-full rounded-3xl bg-neutral-900/60 backdrop-blur flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-white/5 grid place-content-center">
                    <ShieldCheck className="h-10 w-10" />
                  </div>
                  <p className="text-sm uppercase tracking-widest text-white/60">Asesoría experta</p>
                  <p className="mt-1 text-lg font-semibold">Seguros · Tarjetas · Inversiones</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-tr from-cyan-400/30 to-indigo-400/30 blur-xl" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-tr from-fuchsia-400/30 to-rose-400/30 blur-2xl" />
          </motion.div>
        </motion.div>
      </section>

      {/* Productos */}
      <section id="productos" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Productos y soluciones <span className="text-white/60">con acompañamiento</span></h2>
          <span className="text-sm text-white/60">Elige un tema y conversemos</span>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.article
              key={p.title}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} opacity-30 blur-2xl transition group-hover:opacity-50`} />
              <div className="relative z-10">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>{p.emoji}</span>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                </div>
                <p className="text-sm text-white/80">{p.desc}</p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-medium hover:bg-white/20 transition">
                  Saber más <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Conóceme */}
      <section id="conoceme" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-white/5 to-white/0 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Conóceme</h2>
          <p className="mt-3 text-white/80">
            Soy Arturo Ramírez, tu asesor financiero en Inbursa. Mi enfoque combina criterios técnicos y humanos para que tomes decisiones informadas: riesgo, costo–beneficio y objetivos personales.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Feature icon={<ShieldCheck className="h-5 w-5" />} title="Profesional en ciberseguridad" text="Protejo tu información y tus procesos al evaluar productos financieros." />
            <Feature icon={<Mail className="h-5 w-5" />} title="Cibernética jurídica" text="Conocimientos sólidos para interpretar términos y obligaciones de contratos y pólizas." />
            <Feature icon={<CreditCard className="h-5 w-5" />} title="Dudas complejas" text="Respondo con ejemplos prácticos sobre seguros y tarjetas de crédito." />
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Contacto directo</h2>
          <p className="mt-2 text-white/80">Estoy listo para ayudarte desde el minuto 1.</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a href={`tel:${phone}`} className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition">
              <Phone className="h-4 w-4" /> Llamar +52 33 2537 6945
            </a>
            <a href={whatsappHref} target="_blank" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
              WhatsApp
            </a>
            <a href="#productos" className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/20 transition">
              Ver productos
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Arturo Ramírez · Inbursa — Hecho con dedicación.
      </footer>

      {/* Floating contact */}
      <a
        href={whatsappHref}
        target="_blank"
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 font-semibold text-neutral-900 shadow-xl hover:scale-105 active:scale-95 transition"
        aria-label="Abrir chat de WhatsApp"
      >
        <Phone className="h-4 w-4" /> Hablar ahora
      </a>

      <style>{`
        html { scroll-behavior: smooth; }
        /* Fancy underline on hover for nav links (progressive enhancement) */
        a[href^="#"] { position: relative; }
        a[href^="#"]::after { content: ""; position: absolute; left: 0; bottom: -2px; width: 0; height: 1px; background: currentColor; transition: width .25s; }
        a[href^="#"]:hover::after { width: 100%; }
      `}</style>
    </div>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mb-2 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1 text-xs font-medium">
        {icon}
        <span>{title}</span>
      </div>
      <p className="text-sm text-white/80">{text}</p>
    </div>
  );
}
