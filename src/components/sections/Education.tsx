import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/animations/Reveal";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 [&>*:last-child:nth-child(3n+1)]:lg:col-start-2">
          {education.map((edu, i) => (
            <Reveal key={edu.id} delay={i * 0.1} className="glass rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2">
                  <GraduationCap size={18} className="text-accent-2" />
                </span>
                {edu.period && <span className="font-mono text-xs text-accent">{edu.period}</span>}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{edu.degree}</h3>
              <p className="mt-1 text-sm text-muted">{edu.institution}</p>
              {edu.detail && <p className="mt-3 text-sm font-medium text-foreground">{edu.detail}</p>}
              {edu.points && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.points.map((p) => (
                    <Badge key={p}>{p}</Badge>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
