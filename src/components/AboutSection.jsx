import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiMedium } from "react-icons/si";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-3xl text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          &lt; About <span className="text-sky-400">Me /&gt;</span>
        </h2>

        <h3 className="text-2xl font-semibold text-sky-400 mb-4">
          Driven by curiosity, defined by code!
        </h3>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          I’m Anaya, a passionate computer science graduate student at the University of Southern California with two years of industry experience as a Senior Analyst at Deutsche Bank. With a strong academic foundation and hands-on experience from internships and personal projects, I thrive on building purposeful tech.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          I specialize in full-stack development with proficiency in Java, Python, JavaScript, and ReactJS. My strengths lie in problem-solving and applying core computer science principles including data structures, algorithms, operating systems, and databases to create scalable solutions. I also love participating in hackathons, coding competitions, and volunteer initiatives.
        </p>

        <div className="pt-10 mb-15 flex justify-center gap-6">
          <a
            href="https://github.com/anayagarde"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <Github className="h-6 w-6 text-foreground hover:text-sky-400 transition-transform duration-300 hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/anayagarde/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-foreground hover:text-sky-400 transition-transform duration-300 hover:scale-110" />
          </a>
          <a
            href="mailto:anayasuh@usc.edu"
            title="Email"
          >
            <Mail className="h-6 w-6 text-foreground hover:text-sky-400 transition-transform duration-300 hover:scale-110" />
          </a>
          <a
            href="https://anayagarde.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Medium"
          >
            <SiMedium className="h-6 w-6 text-foreground hover:text-sky-400 transition-transform duration-300 hover:scale-110" />
          </a>
        </div>
      </div>
    </section>
  );
};
