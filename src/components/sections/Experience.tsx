import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/animations/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built things"
          description="A track record of shipping full-stack features, from backend services to polished interfaces."
        />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-border to-transparent sm:left-[23px]"
          />

          <ol className="space-y-14">
            {experience.map((role, i) => (
              <Reveal key={role.id} delay={i * 0.1}>
                <li className="relative pl-14 sm:pl-16">
                  <span className="glass absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl sm:h-12 sm:w-12">
                    <Briefcase size={18} className="text-accent" />
                  </span>

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {role.role} <span className="text-muted font-medium">— {role.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-accent shrink-0">{role.period}</span>
                  </div>

                  <p className="text-sm text-muted leading-relaxed max-w-2xl">{role.summary}</p>

                  <div className="mt-5 grid sm:grid-cols-2 gap-6">
                    {role.frontend && (
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-muted-2 mb-2.5">
                          Frontend
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {role.frontend.map((t) => (
                            <Badge key={t}>{t}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {role.backend && (
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-muted-2 mb-2.5">
                          Backend
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {role.backend.map((t) => (
                            <Badge key={t}>{t}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {role.extras && (
                    <ul className="mt-5 space-y-1.5">
                      {role.extras.map((extra) => (
                        <li key={extra} className="flex gap-2 text-sm text-muted">
                          <span className="text-accent-2">›</span> {extra}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
