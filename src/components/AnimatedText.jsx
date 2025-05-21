import { useEffect, useState } from "react";

const phrases = [
  "I am a software developer",
  "Problem solver at heart",
  "Fullstack Developer",
  "Code, compile, create",
 "Transforming ideas into apps",
 "Always building, always learning"
];

export const AnimatedText = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

useEffect(() => {
  const currentPhrase = phrases[phraseIndex];
  let delay = deleting ? 70 : 150;

  const type = () => {
    if (!deleting && charIndex < currentPhrase.length) {
      setDisplayedText(currentPhrase.substring(0, charIndex + 1));
      setCharIndex(charIndex + 1);
    } else if (deleting && charIndex > 0) {
      setDisplayedText(currentPhrase.substring(0, charIndex - 1));
      setCharIndex(charIndex - 1);
    } else {
      if (!deleting) {
        delay = 2500; // wait before deleting
        setDeleting(true);
      } else {
        delay = 500; // wait before next phrase
        setDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }
  };

  const timer = setTimeout(type, delay);
  return () => clearTimeout(timer);
}, [charIndex, deleting]);

  return (
    <h2 className="text-2xl sm:text-4xl md:text-4xl font-medium mt-8 mr-8">
      {displayedText}
      <span className="animate-pulse text-sky-400">|</span>
    </h2>
  );
};
