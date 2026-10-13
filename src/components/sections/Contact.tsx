import { Mail, MapPin, Github } from "lucide-react";
import { personal } from "@/data/portfolio";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import ContactForm from "@/components/sections/ContactForm";
import CopyEmail from "@/components/sections/CopyEmail";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to full stack, Java developer, and software developer roles. Reach out and I'll get back to you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <Reveal delay={0.05} className="space-y-4">
            <div className="glass rounded-2xl p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2">
                <Mail size={17} className="text-accent" />
              </span>
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-2">Email</p>
              <CopyEmail email={personal.email} />
            </div>

            <div className="glass rounded-2xl p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2">
                <Github size={17} className="text-accent-2" />
              </span>
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-2">GitHub</p>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-1 block text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {personal.githubHandle}
              </a>
            </div>

            <div className="glass rounded-2xl p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2">
                <MapPin size={17} className="text-accent" />
              </span>
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-2">Location</p>
              <p className="mt-1 text-sm font-medium text-foreground">{personal.location}</p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
