import Reveal from "@/components/animations/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {description && <p className="mt-4 text-muted leading-relaxed">{description}</p>}
    </Reveal>
  );
}
