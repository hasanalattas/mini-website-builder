"use client";

import {
  Section,
  HeaderContent,
  HeroContent,
  FeaturesContent,
  TestimonialContent,
  CTAContent,
  FooterContent,
} from "@/types/section";
import { EditableSection } from "./editable-section";
import { HeaderSection } from "./sections/header-section";
import { HeroSection } from "./sections/hero-section";
import { FeaturesSection } from "./sections/features-section";
import { TestimonialSection } from "./sections/testimonial-section";
import { CTASection } from "./sections/cta-section";
import { FooterSection } from "./sections/footer-section";

interface SectionRendererProps {
  section: Section;
  onUpdate: (updatedSection: Section) => void;
  onDelete: () => void;
}

export function SectionRenderer({
  section,
  onUpdate,
  onDelete,
}: SectionRendererProps) {
  const renderSection = () => {
    switch (section.type) {
      case "header":
        return <HeaderSection content={section.content as HeaderContent} />;
      case "hero":
        return <HeroSection content={section.content as HeroContent} />;
      case "features":
        return <FeaturesSection content={section.content as FeaturesContent} />;
      case "testimonial":
        return (
          <TestimonialSection content={section.content as TestimonialContent} />
        );
      case "cta":
        return <CTASection content={section.content as CTAContent} />;
      case "footer":
        <FooterSection content={section.content as FooterContent} />;
      default:
        return null;
    }
  };

  return (
    <EditableSection section={section} onUpdate={onUpdate} onDelete={onDelete}>
      {renderSection()}
    </EditableSection>
  );
}
