import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import studioImg from "@/assets/studio.jpg";
import { CustomCursor } from "@/components/CustomCursor";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "PAMPA — Estudio de Arquitectura Contemporánea" },
      {
        name: "description",
        content:
          "PAMPA es un estudio de arquitectura dedicado a proyectos residenciales y de autor. Diseño contemporáneo, precisión constructiva y sensibilidad por el lugar.",
      },
      { property: "og:title", content: "PAMPA — Estudio de Arquitectura" },
      {
        property: "og:description",
        content:
          "Arquitectura contemporánea de autor. Casas, obras y espacios diseñados con precisión y sensibilidad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const projects = [
  { title: "Casa Pampa", place: "Uruguay · 2025", img: p1, aspect: "aspect-[4/5]" },
  { title: "Villa Horizonte", place: "Punta del Este · 2024", img: p2, aspect: "aspect-[4/5]" },
  { title: "Refugio Bosque", place: "Chile · 2024", img: p3, aspect: "aspect-[4/5]" },
  { title: "Mirador Sierra", place: "Córdoba · 2023", img: p4, aspect: "aspect-[4/5]" },
];

function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <CustomCursor />

      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-background/85 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container-x flex items-center justify-between">
          <a href="#top" aria-label="PAMPA — inicio" className="group flex items-baseline gap-1">
            <span className="font-display text-2xl tracking-[0.18em] leading-none">PAMPA</span>
            <span className="eyebrow text-muted-foreground translate-y-[-2px]">ARQ</span>
          </a>

          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-10 text-xs uppercase tracking-[0.28em]">
              <li><a href="#top" className="nav-link" data-active="true">Home</a></li>
              <li><a href="#proyectos" className="nav-link">Proyectos</a></li>
              <li><a href="#estudio" className="nav-link">Estudio</a></li>
              <li><a href="#prensa" className="nav-link">Prensa</a></li>
              <li><a href="#contacto" className="nav-link">Contacto</a></li>
            </ul>
          </nav>


          <a
            href="#contacto"
            className="md:hidden text-xs uppercase tracking-[0.28em] border-b border-foreground/40 pb-0.5"
          >
            Menú
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section
          className="relative h-dvh min-h-[640px] w-full overflow-hidden"
          aria-label="Presentación del estudio"
        >
          <div className="absolute inset-0 hero-zoom">
            <img
              src={heroImg}
              alt="Residencia contemporánea diseñada por PAMPA al anochecer"
              width={1920}
              height={1200}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />

          <div className="relative z-10 container-x flex h-full flex-col justify-end pb-24">
            <div className="fade-in max-w-3xl">
              <p className="eyebrow text-white/70 mb-6">Estudio de arquitectura · Est. 2016</p>
              <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
                Espacios que
                <br />
                permanecen.
              </h1>
              <p className="mt-8 max-w-xl text-white/80 text-base md:text-lg leading-relaxed">
                Somos PAMPA. Diseñamos casas y obras de autor donde la materia,
                la luz y el paisaje se ordenan con precisión y silencio.
              </p>
            </div>
          </div>

          <a
            href="#proyectos"
            aria-label="Descubrir proyectos"
            className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-max flex-col items-center gap-3 text-white/80"
          >
            <span className="eyebrow">Scroll</span>
            <svg className="bounce-down" width="14" height="22" viewBox="0 0 14 22" fill="none" aria-hidden="true">
              <path d="M7 1v18m0 0l6-6m-6 6l-6-6" stroke="currentColor" strokeWidth="1" />
            </svg>
          </a>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="py-28 md:py-40">
          <div className="container-x">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
                <div>
                  <p className="eyebrow text-muted-foreground mb-4">01 — Obra</p>
                  <h2 className="text-4xl md:text-6xl">Proyectos</h2>
                </div>
                <p className="max-w-md text-muted-foreground leading-relaxed">
                  Una selección de residencias y obras recientes. Cada proyecto
                  responde a su lugar con una lectura precisa del programa, el
                  clima y la materia.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 md:gap-y-32">
              {projects.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <a href="#" className="project-card group block">
                    <div className={`${p.aspect} overflow-hidden bg-muted`}>
                      <img
                        src={p.img}
                        alt={`${p.title}, ${p.place}`}
                        width={1200}
                        height={1500}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="mt-6 flex items-baseline justify-between gap-4">
                      <h3 className="text-2xl md:text-3xl">{p.title}</h3>
                      <span className="eyebrow text-muted-foreground shrink-0">
                        {p.place}
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-24 flex justify-center">
                <a
                  href="#"
                  className="eyebrow border-b border-foreground/40 pb-2 hover:border-foreground transition-colors"
                >
                  Ver toda la obra
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Estudio */}
        <section id="estudio" className="py-28 md:py-40 bg-card">
          <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <Reveal className="lg:col-span-6">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={studioImg}
                  alt="Interior del estudio PAMPA con maquetas y planos"
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale"
                />
              </div>
            </Reveal>

            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow text-muted-foreground mb-4">02 — Estudio</p>
                <h2 className="text-4xl md:text-6xl mb-8">
                  Precisión,
                  <br />
                  materia y lugar.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="space-y-6 text-muted-foreground leading-relaxed max-w-xl">
                  <p>
                    PAMPA es un estudio de arquitectura fundado sobre la idea de
                    que cada obra debe pertenecer a su lugar. Trabajamos con un
                    equipo reducido, cercano a cada cliente y a cada proceso
                    constructivo.
                  </p>
                  <p>
                    Nuestro trabajo abarca vivienda unifamiliar, refugios,
                    interiores y proyectos culturales. Buscamos una arquitectura
                    silenciosa, honesta con sus materiales y precisa en cada
                    detalle.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={220}>
                <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
                  <div>
                    <dt className="eyebrow text-muted-foreground mb-2">Fundado</dt>
                    <dd className="font-display text-3xl">2016</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-muted-foreground mb-2">Obras</dt>
                    <dd className="font-display text-3xl">42</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-muted-foreground mb-2">Países</dt>
                    <dd className="font-display text-3xl">05</dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Prensa */}
        <section id="prensa" className="py-28 md:py-36">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow text-muted-foreground mb-4">03 — Prensa</p>
              <h2 className="text-4xl md:text-6xl mb-16">Publicaciones</h2>
            </Reveal>
            <ul className="divide-y divide-border border-y border-border">
              {[
                { name: "Domus", year: "2025", topic: "Casa Pampa" },
                { name: "Dezeen", year: "2024", topic: "Villa Horizonte" },
                { name: "ArchDaily", year: "2024", topic: "Refugio Bosque" },
                { name: "Wallpaper*", year: "2023", topic: "Mirador Sierra" },
              ].map((r, i) => (
                <Reveal key={r.name} delay={i * 60}>
                  <li className="grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-3 items-center gap-4 py-6 md:py-8 group">
                    <span className="font-display text-2xl md:text-3xl">{r.name}</span>
                    <span className="hidden md:block text-muted-foreground">{r.topic}</span>
                    <span className="eyebrow text-muted-foreground text-right">{r.year}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-28 md:py-40 bg-card">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow text-muted-foreground mb-4">04 — Contacto</p>
              <h2 className="text-4xl md:text-7xl max-w-4xl leading-[1] mb-16">
                Conversemos sobre
                <br />
                tu próximo proyecto.
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border pt-12">
              <Reveal>
                <p className="eyebrow text-muted-foreground mb-4">Escribinos</p>
                <a href="mailto:hola@pampa.studio" className="nav-link text-lg md:text-xl block">
                  hola@pampa.studio
                </a>
                <a
                  href="https://wa.me/000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link text-lg md:text-xl block mt-3"
                >
                  WhatsApp
                </a>
              </Reveal>
              <Reveal delay={100}>
                <p className="eyebrow text-muted-foreground mb-4">Estudio</p>
                <address className="not-italic text-lg md:text-xl leading-relaxed">
                  Av. Costanera 1204
                  <br />
                  Montevideo, Uruguay
                </address>
              </Reveal>
              <Reveal delay={200}>
                <p className="eyebrow text-muted-foreground mb-4">Redes</p>
                <ul className="space-y-2 text-lg md:text-xl">
                  <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container-x flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs uppercase tracking-[0.24em] text-muted-foreground">
          <span className="font-display text-base tracking-[0.18em] normal-case text-foreground">
            PAMPA <span className="text-muted-foreground">Arquitectura</span>
          </span>
          <span>© {new Date().getFullYear()} PAMPA — Todos los derechos reservados</span>
          <span>Diseñado por Felipe Artigas · 2026</span>
        </div>
      </footer>
    </>
  );
}
