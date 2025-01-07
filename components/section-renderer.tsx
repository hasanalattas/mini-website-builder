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
        return isHeaderContent(section.content) ? (
          <HeaderSection content={section.content} />
        ) : null;
      case "hero":
        return isHeroContent(section.content) ? (
          <HeroSection content={section.content} />
        ) : null;
      case "features":
        return isFeaturesContent(section.content) ? (
          <FeaturesSection content={section.content} />
        ) : null;
      case "testimonial":
        return isTestimonialContent(section.content) ? (
          <TestimonialSection content={section.content} />
        ) : null;
      case "cta":
        return isCTAContent(section.content) ? (
          <CTASection content={section.content} />
        ) : null;
      case "footer":
        return isFooterContent(section.content) ? (
          <FooterSection content={section.content} />
        ) : null;
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

function isHeaderContent(content: any): content is HeaderContent {
  return "navItems" in content;
}

function isHeroContent(content: any): content is HeroContent {
  return "subtitle" in content && "ctaText" in content;
}

function isFeaturesContent(content: any): content is FeaturesContent {
  return "features" in content;
}

function isTestimonialContent(content: any): content is TestimonialContent {
  return "quote" in content && "author" in content;
}

function isCTAContent(content: any): content is CTAContent {
  return "buttonText" in content;
}

function isFooterContent(content: any): content is FooterContent {
  return "copyright" in content && "links" in content;
}
