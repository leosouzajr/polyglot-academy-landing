
import { GraduationCap, Calendar, Globe, Award } from "lucide-react";
import { styles } from "@/styles/meus-estilos";

const SobreSection = () => {
  const benefits = [
    {
      icon: GraduationCap,
      title: "Certificados",
      description: "Com uma pontuação de mais de 80% dos cursos, você ja ganha o certificado",
      color: "text-primary",
    },
    {
      icon: Calendar,
      title: "Aulas Flexíveis",
      description: "Escolha os melhores horários para você. Aulas ao vivo, gravadas e suporte 24/7.",
      color: "text-secondary",
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
    <section id="sobre" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className={`${styles.badge} mx-auto`}>
            ⭐ Informações Sobre Nossa Escola de Idiomas
          </div>
          <h2 className={styles.h2}>
            Principais <span className={styles.textGradient}>Informações</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos uma escola online, que ensina idiomas à distancia. 
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
            <div className={`text-4xl font-bold ${styles.textGradient}`}>10+</div>
            <div className="text-sm text-muted-foreground mt-1">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${styles.textGradient}`}>50+</div>
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

export default SobreSection;
