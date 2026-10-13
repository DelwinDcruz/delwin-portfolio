import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, personal, socialLinks } from "@/data/portfolio";
import Container from "@/components/ui/Container";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-display text-lg font-bold text-foreground">{personal.name}</p>
            <p className="mt-1 text-sm text-muted">{personal.role}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = icons[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={social.label}
                  className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted hover:text-accent hover:border-accent/40 transition-colors"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-2">
          <p>
            © {year} {personal.name}. All rights reserved.
          </p>
          <p>Designed and developed by {personal.name}</p>
        </div>
      </Container>
    </footer>
  );
}
