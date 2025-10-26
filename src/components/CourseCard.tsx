import { Clock, Users, BookOpen, ArrowRight } from "lucide-react";
import { styles } from "@/styles/meus-estilos";

interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  duration: string;
  students: string;
  flag: string;
  color: string;
}

const CourseCard = ({ title, description, level, duration, students, flag, color }: CourseCardProps) => {
  return (
    <div className={styles.cardGradient}>
      {/* Card Header */}
      <div className={`p-6 bg-gradient-to-br ${color}`}>
        <div className="flex items-center justify-between">
          <span className="text-6xl">{flag}</span>
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
            {level}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        <h3 className={styles.h4}>{title}</h3>
        <p className="text-muted-foreground">{description}</p>

        {/* Course Info */}
        <div className="flex flex-wrap gap-4 pt-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={16} className="text-primary" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users size={16} className="text-secondary" />
            <span>{students}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen size={16} className="text-accent" />
            <span>Material Incluso</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className={`w-full ${styles.btnOutline} mt-4 group`}>
          Ver Detalhes
          <ArrowRight className="ml-2 inline group-hover:translate-x-1 transition-transform" size={18} />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
