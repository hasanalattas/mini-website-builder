import { TestimonialContent } from "@/types/section";

interface TestimonialSectionProps {
  content: TestimonialContent;
}

export function TestimonialSection({ content }: TestimonialSectionProps) {
  const { quote, author } = content;

  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto text-center">
        <blockquote className="text-2xl italic mb-4">"{quote}"</blockquote>
        <p className="text-lg font-semibold">- {author}</p>
      </div>
    </section>
  );
}
