export type SectionType =
  | "header"
  | "hero"
  | "features"
  | "testimonial"
  | "cta"
  | "footer";

export interface HeaderContent {
  title: string;
  navItems: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
}

export interface FeaturesContent {
  title: string;
  features: string;
}

export interface TestimonialContent {
  quote: string;
  author: string;
}

export interface CTAContent {
  title: string;
  buttonText: string;
}

export interface FooterContent {
  copyright: string;
  links: string;
}

export type SectionContent =
  | HeaderContent
  | HeroContent
  | FeaturesContent
  | TestimonialContent
  | CTAContent
  | FooterContent;

export interface Section {
  id: string;
  type: SectionType;
  content: SectionContent;
}
