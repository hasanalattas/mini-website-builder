import { FeaturesContent } from "@/types/section";

interface FeaturesSectionProps {
  content: FeaturesContent;
}

export function FeaturesSection({ content }: FeaturesSectionProps) {
  const { title, features } = content;
  const featureList = features.split(",");

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <div key={index} className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{feature.trim()}</h3>
              <p>Description for {feature.trim()} goes here.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
