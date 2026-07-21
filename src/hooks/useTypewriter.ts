import { useEffect, useState } from 'react';

interface TypewriterOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter(words: string[], options: TypewriterOptions = {}) {
  const { typingSpeed = 65, deletingSpeed = 35, pauseDuration = 1800 } = options;
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && subIndex === currentWord.length) {
      const pause = window.setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => window.clearTimeout(pause);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = window.setTimeout(
      () => setSubIndex((prev) => prev + (isDeleting ? -1 : 1)),
      isDeleting ? deletingSpeed : typingSpeed,
    );
    return () => window.clearTimeout(timeout);
  }, [subIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return words[wordIndex].slice(0, subIndex);
}
