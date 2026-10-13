"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; user can still select the text manually.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="focus-ring mt-1 flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
    >
      {email}
      {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} className="text-muted-2" />}
    </button>
  );
}
