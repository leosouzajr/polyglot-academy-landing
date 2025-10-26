import { ArrowRight, Play } from "lucide-react";
import { styles } from "@/styles/meus-estilos";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className={`${styles.container} relative z-10`}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className={styles.badge}>
              🌍 Aprenda idiomas de forma inteligente
            </div>
            
            <h1 className={styles.h1}>
              Domine Novos Idiomas com{" "}
              <span className={styles.textGradient}>Confiança</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Transforme sua carreira e conecte-se com o mundo. Aprenda com professores nativos, 
              metodologia comprovada e horários flexíveis que se adaptam à sua rotina.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className={styles.btnPrimary}>
                Comece Agora <ArrowRight className="ml-2 inline" size={20} />
              </button>
              <button className={styles.btnOutline}>
                <Play className="mr-2 inline" size={20} />
                Assistir Vídeo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Alunos Ativos</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-secondary">95%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Professores</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/hero-learning.jpg"
                alt="Estudantes aprendendo idiomas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-card p-4 rounded-xl shadow-lg animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                  🇬🇧
                </div>
                <div>
                  <div className="font-semibold text-sm">Inglês</div>
                  <div className="text-xs text-muted-foreground">Level B2</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-lg animate-pulse delay-150">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  🇪🇸
                </div>
                <div>
                  <div className="font-semibold text-sm">Espanhol</div>
                  <div className="text-xs text-muted-foreground">Level A1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
