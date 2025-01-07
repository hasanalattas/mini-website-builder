import { FooterContent } from "@/types/section";

interface FooterSectionProps {
  content: FooterContent;
}

export function FooterSection({ content }: FooterSectionProps) {
  const { copyright, links } = content;
  const linkList = links.split(",");

  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>{copyright}</p>
        <nav>
          <ul className="flex space-x-4">
            {linkList.map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:underline">
                  {link.trim()}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
