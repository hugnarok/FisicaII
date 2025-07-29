import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PhysicsCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  icon?: string;
  variant?: "temperature" | "energy" | "entropy" | "work" | "default";
  className?: string;
}

const variantStyles = {
  temperature: "border-physics-temperature/20 bg-gradient-to-br from-physics-temperature/5 to-physics-temperature/10",
  energy: "border-physics-energy/20 bg-gradient-to-br from-physics-energy/5 to-physics-energy/10",
  entropy: "border-physics-entropy/20 bg-gradient-to-br from-physics-entropy/5 to-physics-entropy/10", 
  work: "border-physics-work/20 bg-gradient-to-br from-physics-work/5 to-physics-work/10",
  default: "border-border/20 bg-gradient-to-br from-muted/5 to-muted/10"
};

export function PhysicsCard({ 
  title, 
  subtitle, 
  children, 
  icon, 
  variant = "default",
  className 
}: PhysicsCardProps) {
  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-2",
      variantStyles[variant],
      className
    )}>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          {icon && (
            <Badge variant="secondary" className="text-2xl px-3 py-2">
              {icon}
            </Badge>
          )}
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            {subtitle && (
              <CardDescription className="text-muted-foreground mt-1">
                {subtitle}
              </CardDescription>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {children}
      </CardContent>
    </Card>
  );
}