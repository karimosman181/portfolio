import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const dictionary = "0123456789qwertyuiopasdfghjklzxcvbnm!?></a`~+*=@#$%".split(
  ""
);
const singelWord = {
  initial: {},
  animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
};

const DecrytingEffect = ({ text }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const [dec, setDec] = useState(text);

  const count = useRef(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setDec(
        text
          .split("")
          .map((letter, index) => {
            if (index < count.current) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );
    }, 300);
    count.current = count.current + 1 / 3;
    return () => {
      clearInterval(interval);
    };
  }, [dec, text]);

  return <>{dec}</>;
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <h1 className="text-light mt-2 mb-2 text-8xl md:text-7xl sm:!text-5xl block  max-w-lg  w-full font-Gugi uppercase tracking-widest overflow-hidden">
      <DecrytingEffect text={text} />
    </h1>
  );
};

export default AnimatedText;
