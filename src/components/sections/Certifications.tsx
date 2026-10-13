import { Award } from "lucide-react";
import { certifications, volunteer } from "@/data/portfolio";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";

export default function Certifications() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Certifications" title="Credentials & recognition" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <Reveal
              key={cert.id}
              delay={i * 0.08}
              className="glass rounded-2xl p-6 transition-colors duration-300 hover:border-accent-2/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2">
                <Award size={18} className="text-accent" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-foreground leading-snug">
                {cert.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{cert.issuer}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="glass mt-8 rounded-2xl p-6 sm:p-7">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-2">Volunteer Experience</p>
          <h3 className="mt-2 font-display text-lg font-bold text-foreground">{volunteer.title}</h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">{volunteer.description}</p>
        </Reveal>
      </Container>
    </section>
  );
}
