
import React, { useState, useEffect } from 'react';

type Props = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
};

const TypeWriter = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000
}: Props) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentWord = words[wordIndex];
      
      if (!isDeleting && !isWaiting) {
        if (text === currentWord) {
          setIsWaiting(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsWaiting(false);
          }, delayBetweenWords);
          return;
        }
        setText(currentWord.substring(0, text.length + 1));
      } else if (isDeleting) {
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setText(text.substring(0, text.length - 1));
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, isWaiting, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="inline-block min-w-[20ch] font-medium">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriter;
