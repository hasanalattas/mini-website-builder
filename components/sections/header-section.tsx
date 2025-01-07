import { HeaderContent } from "@/types/section";

interface HeaderSectionProps {
  content: HeaderContent;
}

export function HeaderSection({ content }: HeaderSectionProps) {
  const { title, navItems } = content;
  const navLinks = navItems.split(",");

  return (
    <header className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <nav>
          <ul className="flex space-x-4">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:underline">
                  {item.trim()}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
