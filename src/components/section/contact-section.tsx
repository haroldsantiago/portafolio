import { DATA } from "@/data/resume";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="p-8 sm:p-12">
      <FadeIn>
        <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted-foreground mb-8">
          07 — Contacto
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
        {/* Columna izquierda */}
        <div className="flex flex-col gap-8">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[0.95] text-balance">
              Construyamos{" "}
              <span className="text-muted-foreground font-normal italic">
                algo juntos.
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background text-sm font-semibold hover:bg-foreground/85 transition-colors"
              >
                Enviar correo
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href={DATA.contact.social.X.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-accent hover:border-foreground/20 transition-colors"
              >
                DM en X
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Columna derecha */}
        <FadeIn delay={0.12}>
          <div className="flex flex-col gap-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Abierto a roles de tiempo completo, proyectos freelance y
              colaboraciones interesantes. Respondo todo — nada de spam por favor.
            </p>

            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-1">
                En otros lugares
              </p>
              {Object.entries(DATA.contact.social)
                .filter(([k]) => k !== "email")
                .map(([name, social]) => {
                  const Icon = social.icon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
                  return (
                    <Link
                      key={name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-3 border-b border-border/50 hover:border-foreground/20 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg border border-border bg-muted flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{name}</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </Link>
                  );
                })}
            </div>

            <div className="pt-2">
              <p className="text-[10px] font-mono text-muted-foreground/30">
                {DATA.name} · {DATA.location} · {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
