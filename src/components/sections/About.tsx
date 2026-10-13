import { CheckCircle2 } from "lucide-react";
import { personal, aboutPoints, aboutInfo } from "@/data/portfolio";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Full-stack developer, end to end"
          description={personal.summary}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12">
          <Reveal delay={0.1}>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {aboutPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="glass rounded-2xl p-6 sm:p-8">
            <dl className="grid grid-cols-1 gap-6">
              {aboutInfo.map((info, i) => (
                <div key={info.label} className={i !== 0 ? "border-t border-border pt-6" : ""}>
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted-2">{info.label}</dt>
                  <dd className="mt-1.5 text-base font-medium text-foreground">{info.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
