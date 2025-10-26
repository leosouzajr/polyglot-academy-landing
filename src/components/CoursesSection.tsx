import CourseCard from "./CourseCard";
import { styles } from "@/styles/meus-estilos";

const CoursesSection = () => {
  const courses = [
    {
      title: "Inglês",
      description: "Do básico ao avançado, desenvolva fluência para negócios, viagens e certificações internacionais.",
      level: "A1 - C2",
      duration: "6-24 meses",
      students: "3.2k alunos",
      flag: "🇬🇧",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Espanhol",
      description: "Aprenda o segundo idioma mais falado do mundo com professores nativos e metodologia dinâmica.",
      level: "A1 - C1",
      duration: "6-18 meses",
      students: "2.1k alunos",
      flag: "🇪🇸",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Francês",
      description: "Domine a língua da cultura, gastronomia e oportunidades profissionais na Europa.",
      level: "A1 - B2",
      duration: "8-20 meses",
      students: "1.8k alunos",
      flag: "🇫🇷",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Alemão",
      description: "Prepare-se para estudar ou trabalhar na Alemanha com cursos completos e certificações reconhecidas.",
      level: "A1 - C1",
      duration: "8-22 meses",
      students: "1.5k alunos",
      flag: "🇩🇪",
      color: "from-yellow-500 to-red-600",
    },
  ];

  return (
    <section id="cursos" className={`${styles.section} bg-muted/30`}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className={`${styles.badge} mx-auto`}>
            📚 Nossos Cursos
          </div>
          <h2 className={styles.h2}>
            Escolha Seu <span className={styles.textGradient}>Idioma</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cursos estruturados do nível básico ao avançado, com metodologia comprovada 
            e professores especializados em cada idioma.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou o idioma que procura?
          </p>
          <button className={styles.btnSecondary}>
            Ver Todos os Cursos
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
