import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { styles } from "@/styles/meus-estilos";
import { EnrollmentModal } from "./EnrollmentModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { name: "Cursos", href: "#cursos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Contato", href: "#contato" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className={styles.container}>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Polyglot <span className={styles.textGradient}>Academy</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className={styles.link}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle & CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-3">
  <button 
    className={styles.btnPrimary}
    onClick={() => setIsEnrollmentOpen(true)}
  >
    matricular
  </button>
  <button
    onClick={toggleTheme}
    className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200"
    aria-label="Toggle theme"
  >
    {theme === "dark" ? (
      <Sun className="w-5 h-5 text-foreground" />
    ) : (
      <Moon className="w-5 h-5 text-foreground" />
    )}
  </button>
</div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-4 duration-300">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={styles.link}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-foreground" />
                  ) : (
                    <Moon className="w-5 h-5 text-foreground" />
                  )}
                </button>
                <button 
                  className={`flex-1 ${styles.btnPrimary}`}
                  onClick={() => setIsEnrollmentOpen(true)}
                >
                  matricular
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      <EnrollmentModal 
        isOpen={isEnrollmentOpen} 
        onClose={() => setIsEnrollmentOpen(false)} 
      />
    </header>
  );
};

export default Header;
