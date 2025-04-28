import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
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
  
  const projects = [
    {
      title: "Boltshift (E-commerce Website)",
      description: "A full-fledged e-commerce website developed using Django Rest API. It allows users to browse products, add to cart, and checkout.",
      technologies: ["Django", "Django Rest Framework", "PostgreSQL", "Docker"],
      demoLink: "https://boltshift.vercel.app/",
      githubLink: "https://github.com/Astro-cmd/Boltshift-Backend",
      status: "Completed"
    },
    {
      title: "jirani Tours And Travels (Travel Agency Website)",
      description: "A travel agency website that provides information about various travel packages and allows users to book trips.", 
      
      technologies: ["React", "Tailwind CSS", "Django Rest Framework", "PostgreSQL", "Docker"],
      demoLink: "https://moses-portfolio.vercel.app/",
      githubLink: "#",
      status: "Completed"
    },
    {
      title: "Astro (Blog Website)",
      description: "A blog website where I share my thoughts and experiences on various topics. Built with Next.js and Tailwind CSS.",
      technologies: ["Next.js", "Tailwind CSS"],
      demoLink: "https://moses-blog.vercel.app/",
      githubLink: "#",
      status: "Completed"
    },
    {
      title: "codeIn-arena (Online Coding Platform)",
      description: "An online coding platform that allows users to practice coding problems, participate in contests, and improve their coding skills.",
      technologies: ["Django", "Django Rest Framework", "PostgreSQL", "Docker"," React", "Tailwind CSS"],
      apps: ["Frontend", "Backend"],
      githubLink: "#",
      status: "In Progress"
    },
    {
      title: "Mo-wallet (Finance Management App)",
      description: "A platform designed to help users manage their finances effectively. Features include expense tracking, budget management, financial analytics, and spending predictions.",
      technologies: ["Django", "Django Rest Framework", "PostgreSQL", "Chart.js"],
      githubLink: "https://github.com/Astro-cmd/Mo-wallet",
      status: "In completion"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div 
          ref={sectionRef}
          className="animate-on-scroll mt-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="card-hover overflow-hidden transition-all duration-300 hover:shadow-lg border-border hover:border-primary/20" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant={project.status === "Completed" ? "default" : "outline"}>
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-foreground/70 mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="secondary" className="font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.apps && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">Apps Developed</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.apps.map(app => (
                        <Badge key={app} variant="outline" className="font-normal">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.demoLink && (
                    <Button asChild variant="default" size="sm" className="gap-1">
                      <a 
                        href={project.demoLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button asChild variant="outline" size="sm" className="gap-1">
                    <a 
                      href={project.githubLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
