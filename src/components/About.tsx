
import { useEffect, useRef } from "react";

const About = () => {
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
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div 
          ref={sectionRef}
          className="animate-on-scroll mt-12 flex flex-col md:flex-row md:items-center md:space-x-12"
        >
          <div className="flex-1 space-y-6 order-2 md:order-1">
            <p className="text-lg text-foreground/80">
              I'm a backend developer who loves bringing ideas to life through code. 
              I specialize in Python and Django, focusing on creating seamless APIs and database-driven applications.
            </p>
            
            <p className="text-lg text-foreground/80">
              Apart from coding, I enjoy skating, swimming, football, and chess. 
              These activities help me maintain a balanced life and approach problems with fresh perspectives.
            </p>
            
            <p className="text-lg text-foreground/80">
              My career goal is to secure a backend developer role by the end of the year and eventually 
              launch my own startup focusing on innovative solutions that address real-world challenges.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">Currently:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Pursuing a Bachelor of Science in Information Technology at Cooperative University of Kenya</li>
                <li>Available for backend development opportunities</li>
                <li>Open to freelance and remote work</li>
              </ul>
            </div>
          </div>
          
          <div className="flex-1 order-1 md:order-2 mb-8 md:mb-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary/10 rounded-lg transform rotate-6"></div>
              <div className="absolute inset-0 bg-primary/20 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-background shadow-lg rounded-lg flex items-center justify-center p-6">
                <div className="text-center space-y-4">
                  <div className="inline-block p-4 rounded-full bg-primary/10">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-16 w-16 text-primary" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Backend Focus</h3>
                  <p className="text-foreground/70">Creating robust and efficient server-side solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
