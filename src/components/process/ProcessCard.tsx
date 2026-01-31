import { Card, CardContent } from "@/components/ui/card";

interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export function ProcessCard({
  step,
  title,
  description,
  icon: Icon,
}: ProcessCardProps) {
  return (
    <Card className="relative h-full hover:shadow-lg transition">
      <CardContent className="p-6 space-y-4">
        <span className="absolute top-4 right-4 text-sm text-muted-foreground">
          {step}
        </span>

        <Icon className="h-10 w-10 text-primary" />

        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
