import { cn } from "@/lib/utils";

interface FormulaProps {
  children: React.ReactNode;
  className?: string;
  variant?: "inline" | "block";
}

export function Formula({ children, className, variant = "inline" }: FormulaProps) {
  if (variant === "block") {
    return (
      <div className={cn(
        "bg-muted/30 border border-border/30 rounded-lg p-4 my-4",
        "font-mono text-lg text-center",
        "backdrop-blur-sm",
        className
      )}>
        {children}
      </div>
    );
  }

  return (
    <code className={cn(
      "bg-muted/50 px-2 py-1 rounded text-sm font-mono",
      "border border-border/30",
      className
    )}>
      {children}
    </code>
  );
}