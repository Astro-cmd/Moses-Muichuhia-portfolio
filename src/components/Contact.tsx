import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the email
    toast.success("Message sent successfully!", {
      description: "I'll get back to you as soon as possible!",
      position: "bottom-right",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "mmuichuhia@gmail.com",
      link: "mailto:mmuichuhia@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "0111532826",
      link: "tel:0111532826"
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub",
      value: "GitHub Profile",
      link: "#"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      value: "LinkedIn Profile",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>
        
        <div 
          ref={sectionRef}
          className="animate-on-scroll mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's connect!</h3>
            <p className="text-foreground/80 mb-8">
              Whether you have a question, project idea, or just want to say hi, 
              feel free to reach out. I'm currently available for freelance work and open to new opportunities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="card-hover overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-1 bg-primary"></div>
                  <CardContent className="p-4 flex items-start space-x-4">
                    <div className="bg-primary/10 p-2 rounded-md mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">{item.title}</h4>
                      <a 
                        href={item.link} 
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <Card className="overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
