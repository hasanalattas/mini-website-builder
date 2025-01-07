import { CTAContent } from "@/types/section";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  content: CTAContent;
}

export function CTASection({ content }: CTASectionProps) {
  const { title, buttonText } = content;

  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <Button size="lg" variant="secondary">
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
