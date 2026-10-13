import { softSkills } from "@/data/portfolio";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";

export default function SoftSkills() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Beyond Code" title="How I work with people" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 [&>*:last-child:nth-child(3n+1)]:lg:col-start-2">
          {softSkills.map((skill, i) => (
            <Reveal
              key={skill.id}
              delay={i * 0.06}
              className="rounded-2xl border border-border p-6 transition-colors duration-300 hover:bg-surface"
            >
              <h3 className="font-display text-base font-bold text-foreground">{skill.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{skill.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
