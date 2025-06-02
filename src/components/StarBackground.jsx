import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [binaries, setBinaries] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detect dark mode from <html class="dark">
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode(); // initial
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    generateStars();
    generateBinaries();
    const handleResize = () => {
      generateStars();
      generateBinaries();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const generateStars = () => {
    const count = Math.floor((window.innerWidth * window.innerHeight) / 9000);
    const newStars = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.6 + 0.4,
      duration: Math.random() * 5 + 2,
    }));
    setStars(newStars);
  };

  const generateBinaries = () => {
    const count = 30;
    const newBinaries = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 6 + 4,
      value: Math.random() > 0.5 ? "1" : "0",
    }));
    setBinaries(newBinaries);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden font-mono text-sky-400 dark:text-white">
      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.y}%`,
            left: `${star.x}%`,
            opacity: star.opacity,
            backgroundColor: isDarkMode ? "white" : "#38bdf8", // white in dark mode, sky-400 otherwise
            animationDuration: `${star.duration}s`,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Binary Rain */}
      {binaries.map((binary) => (
        <span
          key={binary.id}
          className="absolute text-sm animate-binary-fall"
          style={{
            left: `${binary.x}%`,
            animationDelay: `${binary.delay}s`,
            animationDuration: `${binary.duration}s`,
            color: isDarkMode ? "white" : "#38bdf8" // match star logic
          }}
        >
          {binary.value}
        </span>
      ))}
    </div>
  );
};
