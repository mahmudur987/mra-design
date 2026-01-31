import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  includes: string[];
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  includes,
}: ServiceCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition">
      <CardContent className="p-6 space-y-4">
        <Icon className="h-10 w-10 text-primary" />

        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>

        <ul className="space-y-2 pt-2">
          {includes.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
