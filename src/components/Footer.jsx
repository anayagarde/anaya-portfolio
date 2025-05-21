import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      setTime(now.toLocaleTimeString([], options));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative text-center py-8 text-sm text-muted-foreground mt-16">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="absolute right-4 top-2 md:right-8 p-2 bg-sky-400 text-white rounded-full shadow-md hover:bg-sky-400/80 transition-all"
        aria-label="Back to top"
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      {/* Message with Animated Emoji */}
      <p>
        &copy; {new Date().getFullYear()} Anaya Garde · Thanks for visiting at{" "}
        <span className="text-sky-400 font-medium">{time}</span>{" "}
        <span className="inline-block animate-wiggle">👋</span>
      </p>
    </footer>
  );
};
