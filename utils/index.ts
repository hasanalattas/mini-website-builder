import { Section, SectionContent, SectionType } from "@/types/section";

export function getDefaultContent(type: SectionType): SectionContent {
  switch (type) {
    case "header":
      return { title: "Company Name", navItems: "Home,About,Contact" };
    case "hero":
      return {
        title: "Welcome to Our Site",
        subtitle: "Discover amazing things",
        ctaText: "Get Started",
      };
    case "features":
      return {
        title: "Our Features",
        features: "Feature 1,Feature 2,Feature 3",
      };
    case "testimonial":
      return { quote: "This product is amazing!", author: "John Doe" };
    case "cta":
      return { title: "Ready to get started?", buttonText: "Sign Up Now" };
    case "footer":
      return {
        copyright: "© 2025 Company Name",
        links: "Privacy Policy,Terms of Service",
      };
    default:
      throw new Error(`Unsupported section type: ${type}`);
  }
}

export function isValidSection(section: any): section is Section {
  return (
    typeof section === "object" &&
    typeof section.id === "string" &&
    typeof section.type === "string" &&
    typeof section.content === "object"
  );
}
