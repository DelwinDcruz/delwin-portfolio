import { cn } from "@/lib/utils";

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface-2/60 px-3 py-1 font-mono text-xs text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
