import { ArrowDown } from "lucide-react";
import { AnimatedText } from "./AnimatedText";
import photo from "../assets/IMG_6374.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Main container */}
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 z-10">
        {/* Image */}
        <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-sky-400 shadow-xl animate-fade-in">
          <img
            src={photo}
            alt="Anaya Garde"
            className="w-full h-full object-cover"
          />
        </div>
      
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl text-left font-bold tracking-tight leading-tight">
          <span className="block animate-fade-in">Hey!</span>
          <span className="block text-sky-400">
            <span className="inline-block opacity-0 animate-fade-in-delay-1">I</span>
            <span className="inline-block opacity-0 animate-fade-in-delay-2">'m</span>
            <span className="inline-block opacity-0 animate-fade-in-delay-3">&nbsp;Anaya&nbsp;</span>
            <span className="inline-block opacity-0 animate-fade-in-delay-4">Garde</span>

          </span>
        </h1>

      </div>

      {/* Animated text below everything else, above scroll */}
      <div className="mt-8 min-h-[2.5rem] text-lg font-mono text-center">
        <AnimatedText />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-sky-400" />
      </div>
    </section>
  );
};
