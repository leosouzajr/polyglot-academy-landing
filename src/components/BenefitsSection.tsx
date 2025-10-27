import { GraduationCap, Calendar, Globe, Award } from "lucide-react";
import { styles } from "@/styles/meus-estilos";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Calendar,
      title: "Aulas Flexíveis",
      description: "Escolha os melhores horários para você. Aulas ao vivo, gravadas e suporte 24/7.",
      color: "text-secondary",
    },
    {
      icon: GraduationCap,
      title: "Professores Nativos",
      description: "Aprenda com quem vive o idioma diariamente. Todos os nossos professores são nativos e certificados.",
      color: "text-primary",
    },
    {
      icon: Globe,
      title: "Método Imersivo",
      description: "Metodologia baseada em conversação real e situações do dia a dia para acelerar seu aprendizado.",
      color: "text-accent",
    },
    {
      icon: Award,
      title: "Certificado Reconhecido",
      description: "Certificações alinhadas ao CEFR (Quadro Europeu Comum de Referência), aceitas internacionalmente.",
      color: "text-primary",
    },
  ];

  return (
    <section id="beneficios" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className={`${styles.badge} mx-auto`}>
            ⭐ Por Que Escolher a Polyglot?
          </div>
          <h2 className={styles.h2}>
            Nossos <span className={styles.textGradient}>Diferenciais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 10 anos transformando vidas através do ensino de idiomas. 
            Conheça o que nos torna únicos.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group text-center space-y-4 p-6 rounded-xl hover:bg-muted/50 transition-all duration-300"
            >
              <div className={`${styles.iconBox} mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={benefit.color} size={32} />
              </div>
              <h3 className={styles.h4}>{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl">
          <div className="text-center">
            <div className={`text-4xl font-bold ${styles.textGradient}`}>5+</div>
            <div className="text-sm text-muted-foreground mt-1">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${styles.textGradient}`}>80+</div>
            <div className="text-sm text-muted-foreground mt-1">Professores Certificados</div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${styles.textGradient}`}>10k+</div>
            <div className="text-sm text-muted-foreground mt-1">Alunos Formados</div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${styles.textGradient}`}>95%</div>
            <div className="text-sm text-muted-foreground mt-1">Taxa de Aprovação</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
