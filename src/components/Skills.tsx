
import { useEffect, useRef } from "react";

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Django", "Django Rest Framework"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "SQLite"],
    },
    {
      title: "Tools",
      skills: ["Docker", "Git", "GitHub", "Postman", "Miro"],
    },
    {
      title: "Other Skills",
      skills: ["RESTful API Development", "Software Documentation", "Team Collaboration"],
    },
  ];

  const SkillBar = ({ skill }: { skill: string }) => {
    return (
      <div className="group">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">{skill}</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full origin-left group-hover:animate-pulse" 
            style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }} 
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        
        <div 
          ref={sectionRef}
          className="animate-on-scroll mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="bg-background p-6 rounded-lg shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
