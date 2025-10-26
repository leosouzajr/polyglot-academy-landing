/**
 * Arquivo centralizado de estilos para Polyglot Academy
 * Utilize estas classes nos componentes via referência ao invés de repetir classNames
 * Exemplo: import { styles } from "@/styles/meus-estilos";
 *          <button className={styles.btnPrimary}>
 */

export const styles = {
  // Buttons
  btnPrimary: "px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300",
  btnSecondary: "px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 hover:shadow-md transition-all duration-300",
  btnOutline: "px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300",
  
  // Cards
  card: "bg-card rounded-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 overflow-hidden",
  cardGradient: "bg-gradient-to-b from-card to-muted/50 rounded-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 transition-all duration-300",
  
  // Typography
  h1: "text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight",
  h2: "text-3xl md:text-4xl lg:text-5xl font-bold text-foreground",
  h3: "text-2xl md:text-3xl font-bold text-foreground",
  h4: "text-xl md:text-2xl font-semibold text-foreground",
  textGradient: "bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent",
  
  // Containers
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  section: "py-16 md:py-24",
  
  // Inputs
  input: "px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all",
  
  // Badge/Tag
  badge: "px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium inline-block",
  
  // Links
  link: "text-primary hover:text-accent transition-colors duration-200 font-medium",
  
  // Icon containers
  iconBox: "w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary",
};
