import { HeroContent } from "@/types/section";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  const { title, subtitle, ctaText } = content;

  return (
    <section className="bg-secondary text-secondary-foreground py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8">{subtitle}</p>
        <Button size="lg">{ctaText}</Button>
      </div>
    </section>
  );
}
