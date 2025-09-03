import { Card } from "@/components/ui/card";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function StepCard({ step, title, description, children }: StepCardProps) {
  return (
    <Card className="p-6 bg-card border-border shadow-card hover:shadow-elegant transition-all duration-smooth animate-slide-up">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-sm font-bold text-primary-foreground">
          {step}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
          {children && (
            <div className="mt-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}