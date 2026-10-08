import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharacterProps {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, range, progress }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
        {char}
      </span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-none"
      >
        {char}
      </motion.span>
    </span>
  );
};

interface WordProps {
  word: string;
  wordStartIndex: number;
  totalChars: number;
  progress: MotionValue<number>;
}

const Word: React.FC<WordProps> = ({ word, wordStartIndex, totalChars, progress }) => {
  const characters = word.split('');

  return (
    <span className="inline-block whitespace-nowrap">
      {characters.map((char, i) => {
        const charIndex = wordStartIndex + i;
        const start = charIndex / totalChars;
        const end = Math.min(1, (charIndex + 1) / totalChars);
        return (
          <Character
            key={i}
            char={char}
            range={[start, end]}
            progress={progress}
          />
        );
      })}
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;

  let accumulatedIndex = 0;

  return (
    <p
      ref={containerRef}
      className={`relative ${className}`}
    >
      {words.map((word, wordIndex) => {
        const startIndex = accumulatedIndex;
        // account for the word length plus 1 for the space
        accumulatedIndex += word.length + 1;

        return (
          <React.Fragment key={wordIndex}>
            <Word
              word={word}
              wordStartIndex={startIndex}
              totalChars={totalChars}
              progress={scrollYProgress}
            />
            {wordIndex < words.length - 1 && ' '}
          </React.Fragment>
        );
      })}
    </p>
  );
};

export default AnimatedText;
