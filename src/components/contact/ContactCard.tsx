import { Card, CardContent } from "@/components/ui/card";

interface ContactCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
}

export function ContactCard({
  title,
  value,
  description,
  icon: Icon,
}: ContactCardProps) {
  return (
    <Card className="hover:shadow-md transition">
      <CardContent className="p-6 space-y-3">
        <Icon className="h-8 w-8 text-primary" />
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="font-medium">{value}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
