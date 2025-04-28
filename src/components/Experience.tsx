
import { useEffect, useRef } from "react";

const Experience = () => {
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

  return (
    <section id="experience" className="py-16 md:py-24 bg-muted">
      <div className="section-container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div 
          ref={sectionRef}
          className="animate-on-scroll mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground border-l-4 border-primary pl-4">
              Professional Experience
            </h3>
            
            <div className="relative pl-8 pb-6 border-l border-border">
              <div className="absolute left-0 top-0 transform -translate-x-1/2">
                <div className="w-5 h-5 rounded-full bg-primary"></div>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">Backend Developer Intern</h4>
                <p className="text-primary font-medium">Excite! Innovation Company</p>
                <div className="text-sm text-muted-foreground">
                  <p>Key Responsibilities:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Built and maintained backend APIs</li>
                    <li>Worked with Docker, Postman, and PostgreSQL</li>
                    <li>Collaborated using Git and GitHub for version control</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-bold text-foreground border-l-4 border-primary pl-4 mb-6">
                Certifications
              </h3>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Python Beginner Certificate</h4>
                  <p className="text-sm text-muted-foreground">Datacamp</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Graphics and Design Certificate</h4>
                  <p className="text-sm text-muted-foreground">Second Chance</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground border-l-4 border-primary pl-4">
              Education
            </h3>
            
            <div className="relative pl-8 pb-6 border-l border-border">
              <div className="absolute left-0 top-0 transform -translate-x-1/2">
                <div className="w-5 h-5 rounded-full bg-primary"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Bachelor of Science in Information Technology</h4>
                <p className="text-primary font-medium">Cooperative University of Kenya</p>
                <p className="text-sm text-muted-foreground">2019 - Expected 2025</p>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm border border-border mt-8">
              <h4 className="text-xl font-semibold text-primary mb-4">Blog Section</h4>
              <p className="text-foreground/80 mb-4">Coming Soon</p>
              <p className="text-foreground/70 italic">
                I plan to share my insights and tutorials on backend development, Django best practices, 
                and personal development in tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
