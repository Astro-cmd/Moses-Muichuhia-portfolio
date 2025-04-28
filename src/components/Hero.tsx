import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";
import TypeWriter from "./TypeWriter";

const Hero = () => {
  const jobTitles = [
    "Backend Developer",
    "Python Developer",
    "Data Analyst",
    "Software Engineer"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
          <div className="flex-1 space-y-6 slide-in-left">
            <div>
              <h2 className="text-lg md:text-xl font-medium text-primary">Hello, I'm</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
                Moses Muichuhia Wanjiku <span className="block md:inline">(Astro)</span>
              </h1>
              <div className="text-xl md:text-2xl font-medium text-muted-foreground mt-4">
                <TypeWriter words={jobTitles} />
              </div>
            </div>

            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
              Passionate backend developer skilled in building scalable, secure, and robust APIs and web applications. 
              I have a strong foundation in Python, Django, and Flask, and I'm always eager to learn new technologies and improve my skills.
              I thrive in collaborative environments and enjoy tackling complex challenges.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-md">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-md group">
                <a href="#projects" className="inline-flex items-center">
                  View Projects
                  <ArrowDownCircle className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="pt-6 flex items-center space-x-6">
              <a 
                href="mailto:mmuichuhia@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-12 md:mt-0 flex-1 flex justify-center slide-in-right animate-float">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center animate-glow">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-background flex items-center justify-center relative overflow-hidden shadow-xl">
                {/* Simple img tag - place your image in public/images/ */}
                <img
                  src="public\images\meee.jpg" // Path to your image in public/ folder
                  alt="Moses Muichuhia Wanjiku"
                  className="w-full h-full object-cover rounded-full"
                  width={288}
                  height={288}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;